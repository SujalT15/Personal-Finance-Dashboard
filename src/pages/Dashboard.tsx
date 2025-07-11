
import React from 'react';
import { StatsCards } from '@/components/Dashboard/StatsCards';
import { ExpenseChart } from '@/components/Dashboard/ExpenseChart';
import { RecentTransactions } from '@/components/Dashboard/RecentTransactions';
import { BudgetProgress } from '@/components/Dashboard/BudgetProgress';
import { FinancialGoals } from '@/components/Dashboard/FinancialGoals';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your financial overview.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last updated</p>
          <p className="text-sm font-medium text-gray-900">
            {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      <StatsCards />
      <ExpenseChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <RecentTransactions />
        </div>
        <div className="space-y-6">
          <BudgetProgress />
          <FinancialGoals />
        </div>
      </div>
    </div>
  );
}
