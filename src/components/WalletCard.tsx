import React from 'react';
import { useWallet } from '../context/WalletContext';
import { Copy, ExternalLink, CreditCard, Send, Hexagon } from 'lucide-react';

export const WalletCard: React.FC = () => {
  const { connected, address, balance } = useWallet();
  
  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      // Would typically show a toast notification here
    }
  };
  
  if (!connected) {
    return (
      <div className="card flex items-center justify-center p-6">
        <div className="text-center">
          <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <CreditCard size={24} className="text-accent" />
          </div>
          <h3 className="font-medium mb-1">Wallet Not Connected</h3>
          <p className="text-secondary text-sm mb-4">Connect your wallet to view details</p>
          <button className="button-primary w-full">Connect Wallet</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-4 -top-4 w-32 h-32 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-medium">Wallet</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="bg-success/20 px-2 py-0.5 rounded text-xs text-success">
                Mainnet
              </div>
              <span className="text-xs text-secondary">ETH</span>
            </div>
          </div>
          <Hexagon size={24} className="text-accent" />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-xs text-secondary">ADDRESS</h4>
            <button onClick={copyAddress} className="text-secondary hover:text-primary">
              <Copy size={12} />
            </button>
          </div>
          <div className="font-mono text-sm truncate">
            {address}
          </div>
        </div>
        
        <div className="border border-border rounded-lg p-3 bg-background/50 backdrop-blur-sm mb-4">
          <div className="text-xs text-secondary mb-1">BALANCE</div>
          <div className="text-xl font-semibold">{balance} ETH</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="button-primary flex items-center justify-center gap-2">
            <Send size={16} />
            <span>Send</span>
          </button>
          <a 
            href="#" 
            className="button-secondary flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} />
            <span>Explorer</span>
          </a>
        </div>
      </div>
    </div>
  );
};