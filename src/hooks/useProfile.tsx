import { createContext, useContext, ReactNode, useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface IProfile {
  id: string;
  name: string;
  createdAt: number;
}

interface IProfileContext {
  profiles: IProfile[];
  activeProfile: IProfile | null;
  activeProfileId: string;
  setActiveProfileId: (id: string) => void;
  createProfile: (name: string) => IProfile;
  deleteProfile: (id: string) => void;
  renameProfile: (id: string, name: string) => void;
}

const ProfileContext = createContext<IProfileContext | null>(null);

const DEFAULT_PROFILE: IProfile = {
  id: "default",
  name: "学习者",
  createdAt: Date.now(),
};

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useLocalStorage<IProfile[]>("aipm-profiles", [DEFAULT_PROFILE]);
  const [activeProfileId, setActiveProfileId] = useLocalStorage<string>("aipm-active-profile", "default");

  const activeProfile = useMemo(
    () => profiles.find((p) => p.id === activeProfileId) ?? profiles[0] ?? null,
    [profiles, activeProfileId]
  );

  const createProfile = useCallback(
    (name: string) => {
      const newProfile: IProfile = {
        id: `profile-${Date.now()}`,
        name: name.trim() || "未命名",
        createdAt: Date.now(),
      };
      setProfiles((prev) => [...prev, newProfile]);
      setActiveProfileId(newProfile.id);
      return newProfile;
    },
    [setProfiles, setActiveProfileId]
  );

  const deleteProfile = useCallback(
    (id: string) => {
      setProfiles((prev) => {
        const next = prev.filter((p) => p.id !== id);
        if (next.length === 0) {
          setActiveProfileId(DEFAULT_PROFILE.id);
          return [DEFAULT_PROFILE];
        }
        if (id === activeProfileId) {
          setActiveProfileId(next[0].id);
        }
        return next;
      });
    },
    [activeProfileId, setProfiles, setActiveProfileId]
  );

  const renameProfile = useCallback(
    (id: string, name: string) => {
      setProfiles((prev) =>
        prev.map((p) => (p.id === id ? { ...p, name: name.trim() || p.name } : p))
      );
    },
    [setProfiles]
  );

  const value = useMemo(
    () => ({
      profiles,
      activeProfile,
      activeProfileId: activeProfile?.id ?? "default",
      setActiveProfileId,
      createProfile,
      deleteProfile,
      renameProfile,
    }),
    [profiles, activeProfile, setActiveProfileId, createProfile, deleteProfile, renameProfile]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
