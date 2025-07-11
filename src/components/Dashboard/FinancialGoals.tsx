
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Calendar, IndianRupee } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: 'Emergency Fund',
    target: 500000,
    current: 325000,
    deadline: '2024-12-31',
    color: 'emerald'
  },
  {
    id: 2,
    title: 'Goa Trip Fund',
    target: 80000,
    current: 35000,
    deadline: '2024-08-15',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Bike Down Payment',
    target: 150000,
    current: 85000,
    deadline: '2024-10-01',
    color: 'purple'
  }
];

export function FinancialGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5" />
          <span>Financial Goals</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{goal.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm font-medium text-gray-900">
                    <IndianRupee className="h-4 w-4" />
                    <span>{goal.current.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    of ₹{goal.target.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
              
              <Progress value={percentage} className="mb-2" />
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{percentage}% complete</span>
                <span className="text-emerald-600 font-medium">
                  ₹{remaining.toLocaleString('en-IN')} to go
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
