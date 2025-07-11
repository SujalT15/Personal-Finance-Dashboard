
import React from 'react';
import { TrendingUp, TrendingDown, PiggyBank, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    title: 'Total Income',
    value: '₹3,25,000',
    change: '+12.5%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'emerald'
  },
  {
    title: 'Total Expenses',
    value: '₹2,15,000',
    change: '+8.2%',
    changeType: 'negative',
    icon: TrendingDown,
    color: 'red'
  },
  {
    title: 'Savings',
    value: '₹1,10,000',
    change: '+15.3%',
    changeType: 'positive',
    icon: PiggyBank,
    color: 'blue'
  },
  {
    title: 'Budget Used',
    value: '68%',
    change: '-5.2%',
    changeType: 'positive',
    icon: Target,
    color: 'purple'
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
