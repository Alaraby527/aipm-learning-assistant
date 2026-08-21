import { Outlet } from "react-router-dom";
import { ProfileProvider } from "@/hooks/useProfile";
import Header from "./Header";
import AppSidebar from "./AppSidebar";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Layout() {
  useScrollToTop();
  return (
    <ProfileProvider>
      <div className="flex h-screen overflow-hidden bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ProfileProvider>
  );
}
