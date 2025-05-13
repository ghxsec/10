import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  Settings, 
  Wallet as WalletIcon
} from 'lucide-react';

export const Header: React.FC = () => {
  const { connected, address, connectWallet } = useWallet();
  const { theme, toggleTheme } = useTheme();
  const [notificationsCount, setNotificationsCount] = useState(3);
  
  return (
    <header className="border-b border-border p-4 flex items-center justify-between bg-card/30 backdrop-blur-md sticky top-0 z-40">
      {/* Search */}
      <div className="hidden md:flex items-center bg-background rounded-lg w-72 px-3 py-2 border border-border">
        <Search size={18} className="text-secondary" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none border-none w-full ml-2 text-sm"
        />
      </div>
      
      {/* Mobile title - shown on mobile only */}
      <h1 className="md:hidden font-bold">NexusWeb3</h1>
      
      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="icon-button relative">
          <Bell size={20} />
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {notificationsCount}
            </span>
          )}
        </button>
        
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="icon-button">
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        {/* Settings */}
        <button className="icon-button">
          <Settings size={20} />
        </button>
        
        {/* Wallet Connect Button */}
        {!connected ? (
          <button 
            onClick={connectWallet} 
            className="button-primary flex items-center gap-2"
          >
            <WalletIcon size={18} />
            <span className="hidden md:inline">Connect Wallet</span>
          </button>
        ) : (
          <div className="flex items-center bg-card px-3 py-1.5 rounded-lg border border-border">
            <span className="text-xs md:text-sm font-medium">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};