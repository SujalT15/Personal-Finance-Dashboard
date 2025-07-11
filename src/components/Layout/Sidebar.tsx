
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Target,
  Settings,
  CreditCard,
  BarChart3,
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Income', href: '/income', icon: TrendingUp },
  { name: 'Expenses', href: '/expenses', icon: TrendingDown },
  { name: 'Budgets', href: '/budgets', icon: PiggyBank },
  { name: 'Goals', href: '/goals', icon: Target },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Accounts', href: '/accounts', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="flex items-center space-x-2">
          <Wallet className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">WealthWise</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-emerald-50 text-emerald-700 border-r-4 border-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-4 text-white">
          <h3 className="font-semibold text-sm">Monthly Budget</h3>
          <p className="text-2xl font-bold">$2,450</p>
          <p className="text-xs opacity-90">$550 remaining</p>
        </div>
      </div>
    </div>
  );
}
