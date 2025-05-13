import React from 'react';
import { Globe, Zap, WifiOff, AlertTriangle } from 'lucide-react';

interface NetworkDetailsProps {
  nodeCount: number;
  blockHeight: number;
  gasPrice: string;
  tps: number;
  status: 'operational' | 'degraded' | 'outage';
  latency: number;
}

export const NetworkStatus: React.FC<NetworkDetailsProps> = ({
  nodeCount,
  blockHeight,
  gasPrice,
  tps,
  status,
  latency
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'operational':
        return <Zap size={16} className="text-success" />;
      case 'degraded':
        return <AlertTriangle size={16} className="text-warning" />;
      case 'outage':
        return <WifiOff size={16} className="text-error" />;
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Performance Degraded';
      case 'outage':
        return 'Network Outage';
    }
  };
  
  const getStatusColor = () => {
    switch (status) {
      case 'operational':
        return 'bg-success/20 text-success border-success/30';
      case 'degraded':
        return 'bg-warning/20 text-warning border-warning/30';
      case 'outage':
        return 'bg-error/20 text-error border-error/30';
    }
  };
  
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Network Status</h3>
        <div className={`flex items-center gap-2 rounded-full px-3 py-1 ${getStatusColor()} border`}>
          {getStatusIcon()}
          <span className="text-xs font-medium">{getStatusText()}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-background rounded-lg p-3">
          <div className="text-secondary text-xs mb-1">Block Height</div>
          <div className="font-medium">{blockHeight.toLocaleString()}</div>
        </div>
        
        <div className="bg-background rounded-lg p-3">
          <div className="text-secondary text-xs mb-1">Active Nodes</div>
          <div className="font-medium">{nodeCount}</div>
        </div>
        
        <div className="bg-background rounded-lg p-3">
          <div className="text-secondary text-xs mb-1">Gas Price</div>
          <div className="font-medium">{gasPrice} Gwei</div>
        </div>
        
        <div className="bg-background rounded-lg p-3">
          <div className="text-secondary text-xs mb-1">TPS</div>
          <div className="font-medium">{tps}</div>
        </div>
      </div>
      
      <div className="mt-4 bg-background rounded-lg p-3">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-secondary text-xs mb-1">Network Latency</div>
            <div className="font-medium">{latency} ms</div>
          </div>
          <Globe size={20} className="text-secondary" />
        </div>
        
        <div className="mt-2 w-full bg-card rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full rounded-full ${
              latency < 100 
                ? 'bg-success' 
                : latency < 300 
                  ? 'bg-warning' 
                  : 'bg-error'
            }`} 
            style={{ width: `${Math.min(100, (latency / 500) * 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};