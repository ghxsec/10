import React from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;