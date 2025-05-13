import React, { createContext, useContext, useState, useEffect } from 'react';

interface WalletContextType {
  connected: boolean;
  address: string | null;
  balance: string;
  connectWallet: () => void;
  disconnectWallet: () => void;
  networkId: number;
  isCorrectNetwork: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.0');
  const [networkId, setNetworkId] = useState(1); // Default to Ethereum mainnet
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  // Simulate connection status
  useEffect(() => {
    // This would be replaced with actual Web3 wallet detection
    const hasWallet = localStorage.getItem('walletConnected') === 'true';
    if (hasWallet) {
      setConnected(true);
      setAddress('0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62');
      setBalance('1.234');
    }
  }, []);

  const connectWallet = () => {
    // This would be replaced with actual Web3 wallet connection
    setConnected(true);
    setAddress('0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62');
    setBalance('1.234');
    localStorage.setItem('walletConnected', 'true');
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAddress(null);
    setBalance('0.0');
    localStorage.removeItem('walletConnected');
  };

  return (
    <WalletContext.Provider 
      value={{ 
        connected, 
        address, 
        balance, 
        connectWallet, 
        disconnectWallet,
        networkId,
        isCorrectNetwork
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};