import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

type ChartDataPoint = {
  label: string;
  value: number;
};

interface ChartProps {
  title: string;
  data: ChartDataPoint[];
  type?: 'bar' | 'line';
  change?: {
    value: string;
    positive: boolean;
  };
  height?: number;
  loading?: boolean;
}

export const ChartComponent: React.FC<ChartProps> = ({
  title,
  data,
  type = 'bar',
  change,
  height = 200,
  loading = false,
}) => {
  // Find the max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className={`card ${loading ? 'animate-pulse' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">{title}</h3>
        
        {change && (
          <div className="flex items-center gap-1.5">
            {change.positive ? (
              <ArrowUp size={14} className="text-success" />
            ) : (
              <ArrowDown size={14} className="text-error" />
            )}
            <span className={`text-xs ${change.positive ? 'text-success' : 'text-error'}`}>
              {change.value}
            </span>
          </div>
        )}
      </div>
      
      {loading ? (
        <div className="h-52 bg-background/50 rounded animate-pulse"></div>
      ) : (
        <div 
          className="mt-2" 
          style={{ height: `${height}px` }}
        >
          <div className="relative h-full flex items-end justify-between gap-1">
            {data.map((item, index) => {
              const percentage = (item.value / maxValue) * 100;
              
              return (
                <div 
                  key={index} 
                  className="group flex flex-col items-center flex-1 relative"
                >
                  {/* Bar or Line point */}
                  <div 
                    className={`w-full rounded-t-sm ${type === 'bar' ? 'bg-accent/80 hover:bg-accent' : 'relative'}`}
                    style={{ 
                      height: `${percentage}%`,
                      minHeight: '4px',
                      transition: 'height 0.3s ease'
                    }}
                  >
                    {type === 'line' && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-2 border-card"></div>
                    )}
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 bg-card p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="text-xs font-medium">{item.value}</div>
                  </div>
                  
                  {/* X-axis label */}
                  <div className="text-xs text-secondary mt-1 truncate max-w-full">
                    {item.label}
                  </div>
                </div>
              );
            })}
            
            {/* Connect line points if line chart */}
            {type === 'line' && (
              <svg
                className="absolute bottom-0 left-0 w-full h-full z-0 overflow-visible"
                preserveAspectRatio="none"
              >
                <polyline
                  points={data
                    .map((item, i) => {
                      const x = (i / (data.length - 1)) * 100;
                      const y = 100 - ((item.value / maxValue) * 100);
                      return `${x},${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
};