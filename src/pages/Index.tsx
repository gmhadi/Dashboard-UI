import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,849",
    change: "+12.5% from last month",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "bg-primary/10 text-primary",
  },
  {
    title: "Revenue",
    value: "$48,294",
    change: "+8.2% from last month",
    changeType: "positive" as const,
    icon: DollarSign,
    iconColor: "bg-success/10 text-success",
  },
  {
    title: "Active Sessions",
    value: "2,847",
    change: "-3.1% from last hour",
    changeType: "negative" as const,
    icon: Activity,
    iconColor: "bg-warning/10 text-warning",
  },
  {
    title: "Growth Rate",
    value: "24.8%",
    change: "Stable this quarter",
    changeType: "neutral" as const,
    icon: TrendingUp,
    iconColor: "bg-chart-4/10 text-chart-4",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back, John! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Table - Takes 2 columns */}
        <div className="lg:col-span-2">
          <DataTable />
        </div>

        {/* Profile Card - Takes 1 column */}
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
