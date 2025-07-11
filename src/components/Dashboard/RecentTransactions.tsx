
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react';

const transactions = [
  {
    id: 1,
    description: 'Salary Credit - TechCorp India',
    amount: 85000,
    type: 'income',
    category: 'Salary',
    date: '2024-01-15',
  },
  {
    id: 2,
    description: 'Grocery - Big Bazaar',
    amount: -2500,
    type: 'expense',
    category: 'Food',
    date: '2024-01-14',
  },
  {
    id: 3,
    description: 'Electricity Bill - BSES',
    amount: -1800,
    type: 'expense',
    category: 'Utilities',
    date: '2024-01-13',
  },
  {
    id: 4,
    description: 'Freelance Web Development',
    amount: 25000,
    type: 'income',
    category: 'Freelance',
    date: '2024-01-12',
  },
  {
    id: 5,
    description: 'Petrol - Indian Oil',
    amount: -1200,
    type: 'expense',
    category: 'Transportation',
    date: '2024-01-11',
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'income' 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
}
