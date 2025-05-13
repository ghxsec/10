import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  amount: string;
  from: string;
  to: string;
  date: string;
  status: 'confirmed' | 'pending' | 'failed';
}

interface TransactionTableProps {
  transactions: Transaction[];
  loading?: boolean;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({ 
  transactions, 
  loading = false 
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const maxPage = Math.ceil(transactions.length / itemsPerPage);
  
  const paginatedTransactions = transactions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  
  const getStatusClass = (status: Transaction['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/20 text-success';
      case 'pending':
        return 'bg-warning/20 text-warning';
      case 'failed':
        return 'bg-error/20 text-error';
    }
  };
  
  return (
    <div className="card overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Recent Transactions</h3>
        <a href="#" className="text-accent text-sm hover:underline">View All</a>
      </div>
      
      {loading ? (
        <div className="space-y-4">
          {Array(5).fill(0).map((_, idx) => (
            <div key={idx} className="h-14 bg-background/50 rounded animate-pulse"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border text-left">
                <tr>
                  <th className="pb-2 font-medium text-sm text-secondary">Type</th>
                  <th className="pb-2 font-medium text-sm text-secondary">Amount</th>
                  <th className="pb-2 font-medium text-sm text-secondary hidden md:table-cell">From/To</th>
                  <th className="pb-2 font-medium text-sm text-secondary hidden lg:table-cell">Date</th>
                  <th className="pb-2 font-medium text-sm text-secondary">Status</th>
                  <th className="pb-2 font-medium text-sm text-secondary"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paginatedTransactions.map(tx => (
                  <tr key={tx.id} className="group hover:bg-card/50">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-full ${tx.type === 'incoming' ? 'bg-success/20' : 'bg-error/20'}`}>
                          {tx.type === 'incoming' ? (
                            <ArrowDownLeft size={14} className="text-success" />
                          ) : (
                            <ArrowUpRight size={14} className="text-error" />
                          )}
                        </div>
                        <span className="text-sm capitalize">{tx.type}</span>
                      </div>
                    </td>
                    <td className="py-3 font-medium">
                      {tx.type === 'incoming' ? '+' : '-'}{tx.amount} ETH
                    </td>
                    <td className="py-3 hidden md:table-cell">
                      <span className="text-sm text-secondary truncate block max-w-[150px]">
                        {tx.type === 'incoming' ? tx.from : tx.to}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-secondary hidden lg:table-cell">
                      {tx.date}
                    </td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(tx.status)}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <a 
                        href="#" 
                        className="p-1.5 rounded-full bg-transparent text-secondary hover:bg-card hover:text-primary inline-block"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {maxPage > 1 && (
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
              <button 
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg bg-card disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm text-secondary">
                Page {page} of {maxPage}
              </span>
              <button 
                onClick={() => setPage(Math.min(maxPage, page + 1))}
                disabled={page === maxPage}
                className="p-1.5 rounded-lg bg-card disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};