import React from 'react';

type StatusType = 'connected' | 'disconnected' | 'pending' | 'error';

interface StatusIndicatorProps {
  status: StatusType;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  size = 'md' 
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'connected':
        return 'bg-success';
      case 'pending':
        return 'bg-warning animate-pulse';
      case 'error':
        return 'bg-error';
      case 'disconnected':
      default:
        return 'bg-secondary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-2 h-2';
      case 'lg':
        return 'w-4 h-4';
      case 'md':
      default:
        return 'w-3 h-3';
    }
  };

  return (
    <div className={`${getSizeClass()} ${getStatusColor()} rounded-full`}></div>
  );
};