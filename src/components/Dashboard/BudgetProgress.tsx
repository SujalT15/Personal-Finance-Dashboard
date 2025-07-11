
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const budgets = [
  {
    category: 'Housing',
    spent: 45000,
    budget: 60000,
    color: 'emerald'
  },
  {
    category: 'Food & Dining',
    spent: 18000,
    budget: 25000,
    color: 'blue'
  },
  {
    category: 'Transportation',
    spent: 12000,
    budget: 15000,
    color: 'purple'
  },
  {
    category: 'Entertainment',
    spent: 8000,
    budget: 12000,
    color: 'yellow'
  },
  {
    category: 'Utilities',
    spent: 6000,
    budget: 8000,
    color: 'red'
  }
];

export function BudgetProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgets.map((budget, index) => {
          const percentage = Math.round((budget.spent / budget.budget) * 100);
          const isOverBudget = percentage > 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{budget.category}</span>
                <span className="text-sm text-gray-500">
                  ₹{budget.spent.toLocaleString('en-IN')} / ₹{budget.budget.toLocaleString('en-IN')}
                </span>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
              />
              <div className="flex justify-between items-center text-sm">
                <span className={`font-medium ${
                  isOverBudget ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {percentage}% used
                </span>
                <span className={`${
                  isOverBudget ? 'text-red-600' : 'text-emerald-600'
                }`}>
                  ₹{isOverBudget ? (budget.spent - budget.budget).toLocaleString('en-IN') : (budget.budget - budget.spent).toLocaleString('en-IN')} 
                  {isOverBudget ? ' over' : ' remaining'}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
