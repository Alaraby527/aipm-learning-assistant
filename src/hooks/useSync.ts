import { useState, useCallback } from "react";

export type SyncStatus = "idle" | "syncing" | "success" | "error";

/**
 * 本地数据持久化 hook
 * 数据存储在浏览器 localStorage 中，无需云端同步
 */
export function useSync() {
  const [status, setStatus] = useState<SyncStatus>("idle");

  const syncToCloud = useCallback(async () => {
    // 本地存储模式：数据已自动保存到 localStorage
    setStatus("success");
    setTimeout(() => setStatus("idle"), 2000);
  }, []);

  const syncFromCloud = useCallback(async () => {
    // 本地存储模式：数据已在 localStorage 中
    setStatus("success");
    setTimeout(() => setStatus("idle"), 2000);
  }, []);

  return {
    status,
    lastSyncTime: null as string | null,
    syncToCloud,
    syncFromCloud,
    isCloudEnabled: false,
  };
}
