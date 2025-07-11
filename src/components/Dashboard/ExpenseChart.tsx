
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const monthlyData = [
  { month: 'Jan', income: 105000, expenses: 70000 },
  { month: 'Feb', income: 95000, expenses: 80000 },
  { month: 'Mar', income: 112500, expenses: 72500 },
  { month: 'Apr', income: 102500, expenses: 77500 },
  { month: 'May', income: 115000, expenses: 67500 },
  { month: 'Jun', income: 106250, expenses: 72250 },
];

const categoryData = [
  { name: 'Housing', value: 30000, color: '#10b981' },
  { name: 'Food', value: 16250, color: '#3b82f6' },
  { name: 'Transportation', value: 12000, color: '#8b5cf6' },
  { name: 'Entertainment', value: 8000, color: '#f59e0b' },
  { name: 'Utilities', value: 6000, color: '#ef4444' },
];

export function ExpenseChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, '']}
              />
              <Bar dataKey="income" fill="#10b981" name="Income" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, '']}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <span className="text-sm text-gray-600">{category.name}</span>
                <span className="text-sm font-medium">₹{category.value.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
