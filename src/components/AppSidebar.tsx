import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  MessageSquareQuote,
  ClipboardCheck,
  Map,
  Users,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "仪表盘", icon: LayoutDashboard, end: true },
  { to: "/study-plan", label: "学习计划", icon: CalendarDays },
  { to: "/interview", label: "面试题库", icon: MessageSquareQuote },
  { to: "/self-assessment", label: "能力自测", icon: ClipboardCheck },
  { to: "/knowledge-map", label: "知识地图", icon: Map },
  { to: "/interview-experience", label: "面经分享", icon: Users },
  { to: "/principles", label: "原则与资源", icon: BookOpen },
];

export default function AppSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r bg-sidebar lg:flex lg:flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-lg font-bold">AIPM</span>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t p-3 text-xs text-muted-foreground">
        基于 AIPM-Wiki 知识库
      </div>
    </aside>
  );
}
