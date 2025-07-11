
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Target, Calendar, IndianRupee, TrendingUp } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: 'Emergency Fund',
    target: 500000,
    current: 325000,
    deadline: '2024-12-31',
    category: 'Savings'
  },
  {
    id: 2,
    title: 'Kerala Trip',
    target: 80000,
    current: 35000,
    deadline: '2024-08-15',
    category: 'Travel'
  },
  {
    id: 3,
    title: 'Royal Enfield Down Payment',
    target: 150000,
    current: 85000,
    deadline: '2024-10-01',
    category: 'Vehicle'
  },
  {
    id: 4,
    title: 'Investment Portfolio',
    target: 1000000,
    current: 450000,
    deadline: '2025-03-31',
    category: 'Investment'
  }
];

export function Goals() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
          <p className="text-gray-600 mt-1">Set and track your financial objectives</p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Goal
        </Button>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Goal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Goal Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Emergency Fund"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter target amount"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter current amount"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Select Category</option>
                  <option value="savings">Savings</option>
                  <option value="travel">Travel</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="investment">Investment</option>
                  <option value="education">Education</option>
                  <option value="home">Home</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Create Goal
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          const remaining = goal.target - goal.current;
          
          return (
            <Card key={goal.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{goal.title}</span>
                  <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {goal.category}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center text-lg font-semibold text-gray-900">
                      <IndianRupee className="h-5 w-5" />
                      <span>{goal.current.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      of ₹{goal.target.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{percentage}%</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <Progress value={percentage} className="text-emerald-500" />
                
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-600 font-medium">
                    ₹{remaining.toLocaleString('en-IN')} remaining
                  </span>
                  <Button size="sm" variant="outline">
                    Add Money
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
