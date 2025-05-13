import React from 'react';
import { BarChart3, Users, Database, Wallet, Zap } from 'lucide-react';

// Mock transactions data
export const mockTransactions = [
  {
    id: '0x1a2b3c',
    type: 'incoming',
    amount: '0.245',
    from: '0x8F9a5D8F8F9a5D8F8F9a5D8F8F9a5D8F8F9a5D8F',
    to: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    date: '2025-05-23 14:35',
    status: 'confirmed',
  },
  {
    id: '0x2b3c4d',
    type: 'outgoing',
    amount: '0.125',
    from: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    to: '0x9A8B7C6D5E4F3G2H1I0J9K8L7M6N5O4P3Q2R1S0T',
    date: '2025-05-22 10:12',
    status: 'confirmed',
  },
  {
    id: '0x3c4d5e',
    type: 'incoming',
    amount: '1.500',
    from: '0x2A3B4C5D6E7F8G9H0I1J2K3L4M5N6O7P8Q9R0S1T',
    to: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    date: '2025-05-21 09:47',
    status: 'confirmed',
  },
  {
    id: '0x4d5e6f',
    type: 'outgoing',
    amount: '0.075',
    from: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    to: '0xA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0',
    date: '2025-05-21 08:22',
    status: 'pending',
  },
  {
    id: '0x5e6f7g',
    type: 'outgoing',
    amount: '0.350',
    from: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    to: '0x5F4E3D2C1B0A9Z8Y7X6W5V4U3T2S1R0Q9P8O7N6M',
    date: '2025-05-20 16:19',
    status: 'failed',
  },
  {
    id: '0x6f7g8h',
    type: 'incoming',
    amount: '0.125',
    from: '0x0Z9Y8X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1G',
    to: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    date: '2025-05-20 11:54',
    status: 'confirmed',
  },
  {
    id: '0x7g8h9i',
    type: 'outgoing',
    amount: '0.050',
    from: '0x7F4589620fb25Fb68526C8e1F1d4a37C66C0Ae62',
    to: '0x1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T',
    date: '2025-05-19 14:30',
    status: 'confirmed',
  },
];

// Mock metrics data
export const mockMetrics = [
  {
    title: 'Total Balance',
    value: '1.234 ETH',
    change: {
      value: '+5.2%',
      positive: true,
    },
    icon: <Wallet size={20} />,
    color: 'default',
  },
  {
    title: 'Active Users',
    value: '2,543',
    change: {
      value: '+12.3%',
      positive: true,
    },
    icon: <Users size={20} />,
    color: 'success',
  },
  {
    title: 'Gas Usage',
    value: '245.67 Gwei',
    change: {
      value: '-3.5%',
      positive: true,
    },
    icon: <Zap size={20} />,
    color: 'warning',
  },
  {
    title: 'Storage Used',
    value: '1.45 GB',
    change: {
      value: '+8.7%',
      positive: false,
    },
    icon: <Database size={20} />,
    color: 'error',
  },
];

// Mock chart data
export const mockChartData = {
  daily: [
    { label: 'Mon', value: 125 },
    { label: 'Tue', value: 87 },
    { label: 'Wed', value: 134 },
    { label: 'Thu', value: 75 },
    { label: 'Fri', value: 163 },
    { label: 'Sat', value: 201 },
    { label: 'Sun', value: 175 },
  ],
  weekly: [
    { label: 'Week 1', value: 743 },
    { label: 'Week 2', value: 612 },
    { label: 'Week 3', value: 829 },
    { label: 'Week 4', value: 714 },
  ],
};

// Mock network data
export const mockNetworkData = {
  nodeCount: 1243,
  blockHeight: 18765432,
  gasPrice: '45.2',
  tps: 27,
  status: 'operational',
  latency: 85,
};