
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, TrendingUp, Calendar, IndianRupee } from 'lucide-react';

const incomeData = [
  {
    id: 1,
    source: 'Primary Job - TechCorp India',
    amount: 85000,
    frequency: 'Monthly',
    nextPayment: '2024-02-01',
    category: 'Salary'
  },
  {
    id: 2,
    source: 'Freelance Web Development',
    amount: 25000,
    frequency: 'Project-based',
    nextPayment: '2024-01-20',
    category: 'Freelance'
  },
  {
    id: 3,
    source: 'Mutual Fund Dividends',
    amount: 3500,
    frequency: 'Quarterly',
    nextPayment: '2024-03-15',
    category: 'Investment'
  },
  {
    id: 4,
    source: 'Online Tutoring',
    amount: 12000,
    frequency: 'Monthly',
    nextPayment: '2024-01-25',
    category: 'Business'
  }
];

export function Income() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  const totalMonthlyIncome = incomeData.reduce((sum, income) => {
    if (income.frequency === 'Monthly') return sum + income.amount;
    if (income.frequency === 'Quarterly') return sum + (income.amount / 3);
    return sum + income.amount; // Project-based estimated monthly
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Income</h1>
          <p className="text-gray-600 mt-1">Track and manage your income sources</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Income Source
        </Button>
      </div>

      {/* Income Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                <p className="text-2xl font-bold text-emerald-600">₹{totalMonthlyIncome.toLocaleString('en-IN')}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">YTD Income</p>
                <p className="text-2xl font-bold text-gray-900">₹{(totalMonthlyIncome * 1.5).toLocaleString('en-IN')}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Income Sources</p>
                <p className="text-2xl font-bold text-gray-900">{incomeData.length}</p>
              </div>
              <IndianRupee className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Income Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Income Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incomeData.map((income) => (
              <div key={income.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{income.source}</h3>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span>{income.category}</span>
                    <span>•</span>
                    <span>{income.frequency}</span>
                    <span>•</span>
                    <span>Next: {income.nextPayment}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-emerald-600">₹{income.amount.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-gray-500">{income.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
