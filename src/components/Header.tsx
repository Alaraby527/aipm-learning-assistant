import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileSwitcher from "./ProfileSwitcher";
import DataManagementDialog from "./DataManagementDialog";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b px-4 lg:px-6">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-base font-semibold">AI 产品经理学习助手</h1>
      </div>
      <div className="flex items-center gap-2">
        <DataManagementDialog />
        <ProfileSwitcher />
      </div>
    </header>
  );
}
