import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon?: React.ReactNode;
  color?: 'default' | 'success' | 'warning' | 'error';
  loading?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon = <Activity size={20} />,
  color = 'default',
  loading = false,
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'error':
        return 'text-error';
      default:
        return 'text-accent';
    }
  };

  return (
    <div className={`card transition-all hover:shadow-glow ${loading ? 'animate-pulse' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-secondary text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg bg-card ${getColorClass()}`}>
          {icon}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-semibold">{value}</div>
        
        {change && (
          <div className="flex items-center gap-1">
            {change.positive ? (
              <TrendingUp size={16} className="text-success" />
            ) : (
              <TrendingDown size={16} className="text-error" />
            )}
            <span className={change.positive ? 'text-success' : 'text-error'}>
              {change.value}
            </span>
            <span className="text-xs text-secondary">vs last period</span>
          </div>
        )}
      </div>
    </div>
  );
};