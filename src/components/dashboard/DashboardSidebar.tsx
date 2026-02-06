import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Users", url: "/users", icon: Users },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const bottomNavItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle },
];

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar transition-all duration-300 ease-in-out flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold text-sidebar-foreground">
              Acme Inc
            </span>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {mainNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              isActive(item.url)
                ? "bg-sidebar-accent text-sidebar-foreground"
                : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border p-3 space-y-1">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              isActive(item.url)
                ? "bg-sidebar-accent text-sidebar-foreground"
                : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}

        {/* Collapse Button */}
        <button
          onClick={onToggle}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-muted transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-foreground",
            collapsed && "justify-center px-2"
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
