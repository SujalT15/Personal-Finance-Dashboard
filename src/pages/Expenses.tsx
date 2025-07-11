
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Filter, Search, TrendingDown } from 'lucide-react';

const expenseData = [
  {
    id: 1,
    description: 'House Rent',
    amount: 25000,
    category: 'Housing',
    date: '2024-01-01',
    recurring: true
  },
  {
    id: 2,
    description: 'Grocery Shopping - Reliance Fresh',
    amount: 3500,
    category: 'Food',
    date: '2024-01-14',
    recurring: false
  },
  {
    id: 3,
    description: 'Electricity Bill - BSES',
    amount: 1800,
    category: 'Utilities',
    date: '2024-01-13',
    recurring: true
  },
  {
    id: 4,
    description: 'Petrol - Indian Oil',
    amount: 1200,
    category: 'Transportation',
    date: '2024-01-11',
    recurring: false
  },
  {
    id: 5,
    description: 'Netflix Subscription',
    amount: 649,
    category: 'Entertainment',
    date: '2024-01-10',
    recurring: true
  }
];

const categories = ['All', 'Housing', 'Food', 'Utilities', 'Transportation', 'Entertainment'];

export function Expenses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenseData.filter(expense => {
    const matchesCategory = selectedCategory === 'All' || expense.category === selectedCategory;
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalExpenses = expenseData.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
          <p className="text-gray-600 mt-1">Track and categorize your expenses</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      {/* Expense Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Monthly Expenses</p>
              <p className="text-3xl font-bold text-red-600">₹{totalExpenses.toLocaleString('en-IN')}</p>
              <p className="text-sm text-gray-500 mt-1">+8.2% from last month</p>
            </div>
            <TrendingDown className="h-12 w-12 text-red-600" />
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search expenses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expense List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{expense.description}</h3>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-200 rounded-full text-xs">{expense.category}</span>
                    <span>{expense.date}</span>
                    {expense.recurring && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Recurring</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-red-600">-₹{expense.amount.toLocaleString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
