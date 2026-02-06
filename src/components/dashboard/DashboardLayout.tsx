import { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "lg:block",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "lg:pl-16" : "lg:pl-64"
        )}
      >
        <TopBar onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
