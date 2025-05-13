import React from 'react';
import { useWallet } from '../context/WalletContext';
import { StatusIndicator } from './StatusIndicator';

export const ProfileSection: React.FC = () => {
  const { connected, balance } = useWallet();
  
  return (
    <div className="card p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
        {/* This would typically be a user avatar */}
        <span className="font-bold">JD</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">John Doe</h4>
        <div className="flex items-center gap-1.5">
          <StatusIndicator status={connected ? 'connected' : 'disconnected'} size="sm" />
          <span className="text-xs text-secondary truncate">
            {connected ? `${balance} ETH` : 'Not connected'}
          </span>
        </div>
      </div>
    </div>
  );
};