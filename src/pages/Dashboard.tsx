import React from 'react';
import { MetricCard } from '../components/MetricCard';
import { TransactionTable } from '../components/TransactionTable';
import { NetworkStatus } from '../components/NetworkStatus';
import { ChartComponent } from '../components/ChartComponent';
import { WalletCard } from '../components/WalletCard';
import { mockMetrics, mockTransactions, mockChartData, mockNetworkData } from '../utils/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="font-bold">Dashboard</h1>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMetrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            color={metric.color}
          />
        ))}
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent
          title="Weekly Activity"
          data={mockChartData.daily}
          type="bar"
          change={{ value: '+12.5%', positive: true }}
        />
        <ChartComponent
          title="Monthly Transactions"
          data={mockChartData.weekly}
          type="line"
          change={{ value: '+8.2%', positive: true }}
        />
      </div>
      
      {/* Transaction Table & Network Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionTable transactions={mockTransactions} />
        </div>
        <div>
          <NetworkStatus {...mockNetworkData} />
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <WalletCard />
        </div>
        <div className="md:col-span-2 card">
          <h3 className="font-medium mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent text-xs font-medium">{item}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">New transaction detected</div>
                    <div className="text-xs text-secondary">
                      {new Date().toLocaleTimeString()} - Block #{18765400 + item}
                    </div>
                  </div>
                </div>
                <div className="text-xs bg-background/50 px-2 py-0.5 rounded border border-border">
                  0.00{item} ETH
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;