import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import StatCard from "@/components/StatCard";
import TimeFilter from "@/components/TimeFilter";
import ChartBubble from "@/components/ChartBubble";
import ChartBarLine from "@/components/ChartBarLine";
import ChartMultiLine from "@/components/ChartMultiLine";

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="p-4 space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Card type="AUM" api="/api/aum" />
          <Card type="SIP" api="/api/sip" />
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.25)] rounded-md p-5 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <TimeFilter />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
            <StatCard label="Purchases" api="/api/stat-cards?type=purchases" />
            <StatCard
              label="Redemptions"
              api="/api/stat-cards?type=redemptions"
            />
            <StatCard
              label="Rejected Transactions"
              api="/api/stat-cards?type=rejected"
            />
            <StatCard
              label="SIP Rejections"
              api="/api/stat-cards?type=sip-rejections"
            />
            <StatCard label="New SIP" api="/api/stat-cards?type=new-sip" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ChartBubble api="/api/charts/clients" />
          <ChartBarLine api="/api/charts/sip-business" />
          <ChartMultiLine api="/api/charts/monthly-mis" />
        </div>
      </main>
    </div>
  );
}
