
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, CreditCard, Building, Wallet, Eye, EyeOff, TrendingUp, TrendingDown } from 'lucide-react';

const accounts = [
  {
    id: 1,
    name: 'SBI Savings Account',
    type: 'Savings',
    bank: 'State Bank of India',
    balance: 285000,
    accountNumber: '****7892',
    icon: Building,
    color: 'blue'
  },
  {
    id: 2,
    name: 'HDFC Credit Card',
    type: 'Credit Card',
    bank: 'HDFC Bank',
    balance: -15000,
    accountNumber: '****4567',
    creditLimit: 150000,
    icon: CreditCard,
    color: 'purple'
  },
  {
    id: 3,
    name: 'Paytm Wallet',
    type: 'Wallet',
    bank: 'Paytm',
    balance: 2500,
    accountNumber: '9876543210',
    icon: Wallet,
    color: 'green'
  },
  {
    id: 4,
    name: 'ICICI Current Account',
    type: 'Current',
    bank: 'ICICI Bank',
    balance: 45000,
    accountNumber: '****1234',
    icon: Building,
    color: 'orange'
  }
];

const recentTransactions = [
  { id: 1, type: 'credit', amount: 5000, description: 'Salary Credit', account: 'SBI Savings', date: '2024-01-15' },
  { id: 2, type: 'debit', amount: 1200, description: 'Grocery Shopping', account: 'HDFC Credit Card', date: '2024-01-14' },
  { id: 3, type: 'credit', amount: 500, description: 'Cashback', account: 'Paytm Wallet', date: '2024-01-13' },
  { id: 4, type: 'debit', amount: 800, description: 'Utility Bill', account: 'SBI Savings', date: '2024-01-12' },
];

export function Accounts() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [hiddenBalances, setHiddenBalances] = useState(new Set());

  const toggleBalanceVisibility = (accountId: number) => {
    const newHidden = new Set(hiddenBalances);
    if (newHidden.has(accountId)) {
      newHidden.delete(accountId);
    } else {
      newHidden.add(accountId);
    }
    setHiddenBalances(newHidden);
  };

  const totalBalance = accounts
    .filter(acc => acc.type !== 'Credit Card')
    .reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Management</h1>
          <p className="text-gray-600 mt-1">Monitor all your financial accounts</p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      {/* Total Balance Summary */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-emerald-100">Total Balance</p>
              <p className="text-3xl font-bold">₹{totalBalance.toLocaleString('en-IN')}</p>
            </div>
            <Wallet className="h-12 w-12 text-emerald-100" />
          </div>
        </CardContent>
      </Card>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., SBI Savings Account"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Select Type</option>
                  <option value="savings">Savings Account</option>
                  <option value="current">Current Account</option>
                  <option value="credit">Credit Card</option>
                  <option value="wallet">Digital Wallet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank/Provider
                </label>
                <input
                  type="text"
                  placeholder="e.g., State Bank of India"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Balance (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter current balance"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Add Account
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowCreateForm(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => {
          const Icon = account.icon;
          const isHidden = hiddenBalances.has(account.id);
          
          return (
            <Card key={account.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-gray-600" />
                    <div>
                      <span className="block">{account.name}</span>
                      <span className="text-sm text-gray-500 font-normal">{account.bank}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBalanceVisibility(account.id)}
                  >
                    {isHidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Balance</span>
                  <span className={`text-xl font-bold ${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {isHidden ? '••••••' : `₹${Math.abs(account.balance).toLocaleString('en-IN')}`}
                    {account.balance < 0 && !isHidden && ' (Outstanding)'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Account No.</span>
                  <span className="text-sm font-medium">{account.accountNumber}</span>
                </div>
                
                {account.creditLimit && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Credit Limit</span>
                    <span className="text-sm font-medium">₹{account.creditLimit.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Type</span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${account.color}-100 text-${account.color}-800`}>
                    {account.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Account Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {transaction.type === 'credit' ? 
                    <TrendingUp className="h-5 w-5 text-green-600" /> : 
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  }
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.account} • {transaction.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
