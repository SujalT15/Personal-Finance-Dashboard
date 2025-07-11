
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Target, TrendingUp, AlertTriangle, IndianRupee } from 'lucide-react';

const budgets = [
  {
    id: 1,
    category: 'Food & Dining',
    budgeted: 15000,
    spent: 12500,
    color: 'emerald'
  },
  {
    id: 2,
    category: 'Transportation',
    budgeted: 8000,
    spent: 9200,
    color: 'red'
  },
  {
    id: 3,
    category: 'Entertainment',
    budgeted: 5000,
    spent: 3200,
    color: 'blue'
  },
  {
    id: 4,
    category: 'Shopping',
    budgeted: 10000,
    spent: 7800,
    color: 'purple'
  }
];

export function Budgets() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budget Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your monthly budgets</p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Budget
        </Button>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Budget</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Select Category</option>
                  <option value="food">Food & Dining</option>
                  <option value="transport">Transportation</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="shopping">Shopping</option>
                  <option value="utilities">Utilities</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Create Budget
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgets.map((budget) => {
          const percentage = Math.round((budget.spent / budget.budgeted) * 100);
          const remaining = budget.budgeted - budget.spent;
          const isOverBudget = budget.spent > budget.budgeted;
          
          return (
            <Card key={budget.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{budget.category}</span>
                  {isOverBudget && <AlertTriangle className="h-5 w-5 text-red-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spent</span>
                  <span className={`font-medium ${isOverBudget ? 'text-red-600' : 'text-gray-900'}`}>
                    ₹{budget.spent.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget</span>
                  <span className="font-medium text-gray-900">
                    ₹{budget.budgeted.toLocaleString('en-IN')}
                  </span>
                </div>
                
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className={`${isOverBudget ? 'text-red-500' : 'text-emerald-500'}`}
                />
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{percentage}% used</span>
                  <span className={`font-medium ${remaining >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {remaining >= 0 ? `₹${remaining.toLocaleString('en-IN')} left` : `₹${Math.abs(remaining).toLocaleString('en-IN')} over`}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
