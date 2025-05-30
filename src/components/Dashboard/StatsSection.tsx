import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface FunnelItemData {
  id: string;
  name: string;
  count: number;
  value: string;
  duration: string;
  color: string; // Tailwind color class e.g., 'bg-accent-red'
  isAverageTime?: boolean;
}

const funnelData: FunnelItemData[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: '$200', duration: '2 days', color: 'bg-accent-red' },
  { id: 'qualified', name: 'Qualified', count: 100, value: '$100', duration: '2 days', color: 'bg-accent-yellow' },
  { id: 'inConversation', name: 'In conversation', count: 50, value: '$100', duration: '', color: 'bg-sky-500', isAverageTime: true }, // Using sky-500 as a placeholder for the dark blue/purple in image
  { id: 'negotiations', name: 'Negotiations', count: 20, value: '$50', duration: '8 days', color: 'bg-accent-green' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: '$50', duration: '10 days', color: 'bg-accent-purple' },
];

const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

interface PieChartSourceData {
  name: string;
  value: number;
  percentage: string;
  color: string; // Hex color for Recharts
  revenue: string;
}

const sourcesData: PieChartSourceData[] = [
  { name: 'Clutch', value: 3000, percentage: '50%', color: '#E94A35', revenue: '$3000' }, // accent-red
  { name: 'Behance', value: 1000, percentage: '40%', color: '#F59E0B', revenue: '$1000' }, // accent-yellow
  { name: 'Instagram', value: 1000, percentage: '10%', color: '#10B981', revenue: '$1000' }, // accent-green
  { name: 'Dribbble', value: 1000, percentage: '10%', color: '#8B5CF6', revenue: '$1000' }, // accent-purple
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border rounded-md shadow-lg">
        <p className="text-sm text-primary-text">{`${payload[0].name} : ${payload[0].payload.revenue} (${payload[0].payload.percentage})`}</p>
        <p className="text-xs text-secondary-text">from leads total</p>
      </div>
    );
  }
  return null;
};

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary-text">600</span>
            <span className="ml-2 text-secondary-text">active leads</span>
          </div>
          <div className="space-y-3">
            <div className="flex w-full h-3 rounded-full overflow-hidden mb-3">
              {funnelData.map(item => (
                <div key={item.id} className={cn(item.color, 'h-full')} style={{ width: `${(item.count / totalFunnelCount) * 100}%` }}></div>
              ))}
            </div>
            {funnelData.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className={cn('w-3 h-3 rounded-sm mr-2', item.color)}></span>
                  <span className="text-primary-text">{item.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-secondary-text w-12 text-right">{item.count}</span>
                  <span className="text-secondary-text w-12 text-right">{item.value}</span>
                  {item.isAverageTime ? 
                    <span className="text-secondary-text w-24 text-right text-xs bg-gray-700 text-white px-1 py-0.5 rounded">average time on this stage</span> :
                    <span className="text-secondary-text w-20 text-right">{item.duration}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold text-primary-text">Sources</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 text-xs px-2 py-1 text-secondary-text">
                <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                Last 6 months
                <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>Last 3 months</DropdownMenuItem>
              <DropdownMenuItem>Last 6 months</DropdownMenuItem>
              <DropdownMenuItem>Last 12 months</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-52 md:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                  strokeWidth={0} // Remove border between pie segments
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 space-y-2">
            {sourcesData.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: source.color }}></span>
                  <span className="text-primary-text">{source.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary-text mr-2 w-14 text-right">{source.revenue}</span>
                  <span className="text-secondary-text w-10 text-right">{source.percentage}</span>
                </div>
              </div>
            ))}
             <div className="text-right mt-2">
              <Button variant="link" className="text-xs text-primary p-0 h-auto hover:text-primary/80">
                View all sources
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSection;
