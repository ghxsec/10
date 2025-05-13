import React from 'react';
import { useWallet } from '../context/WalletContext';
import { 
  LayoutDashboard, 
  BarChart3, 
  Wallet, 
  Settings, 
  Users, 
  Database, 
  Globe, 
  LogOut,
  Layers,
  Hexagon
} from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { ProfileSection } from './ProfileSection';

export const Sidebar: React.FC = () => {
  const { connected, disconnectWallet } = useWallet();
  
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Analytics', icon: <BarChart3 size={20} /> },
    { name: 'Wallet', icon: <Wallet size={20} /> },
    { name: 'Network', icon: <Globe size={20} /> },
    { name: 'Users', icon: <Users size={20} /> },
    { name: 'Storage', icon: <Database size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="bg-card border-r border-border h-screen fixed w-full z-50 md:relative md:w-auto transition-all duration-300 transform translate-x-0 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center gap-3">
        <div className="relative">
          <Hexagon size={32} className="text-accent" />
          <Layers size={16} className="absolute top-2 left-2 text-white" />
        </div>
        <h1 className="text-xl font-bold">NexusWeb3</h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <a 
            key={item.name} 
            href="#" 
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
            {item.active && (
              <div className="w-1.5 h-6 bg-accent absolute right-0 rounded-l-md"></div>
            )}
          </a>
        ))}
      </nav>
      
      {/* Connection Status */}
      <div className="p-4 border-t border-border space-y-4">
        <div className="card flex items-center justify-between py-2 px-3">
          <div className="flex items-center gap-2">
            <StatusIndicator status={connected ? 'connected' : 'disconnected'} />
            <span className="text-sm">
              {connected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          <div className="bg-background/50 px-2 py-1 rounded text-xs">
            Mainnet
          </div>
        </div>
        
        {/* User Profile */}
        <ProfileSection />

        {/* Logout */}
        {connected && (
          <button 
            onClick={disconnectWallet}
            className="w-full flex items-center gap-2 p-2 text-error/80 hover:text-error transition-colors duration-300"
          >
            <LogOut size={18} />
            <span>Disconnect</span>
          </button>
        )}
      </div>
    </aside>
  );
};