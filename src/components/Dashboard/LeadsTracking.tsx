import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface LeadsChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsChartData: LeadsChartDataPoint[] = [
  { month: 'March', closedWon: 90, closedLost: 68 },
  { month: 'April', closedWon: 55, closedLost: 38 },
  { month: 'May', closedWon: 70, closedLost: 80 },
  { month: 'June', closedWon: 85, closedLost: 5 },
  { month: 'July', closedWon: 60, closedLost: 40 },
  { month: 'August', closedWon: 30, closedLost: 95 },
];

const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border rounded-md shadow-lg text-sm">
        <p className="label text-primary-text font-medium mb-1">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface LeadsTrackingProps {
  className?: string;
}

const LeadsTracking: React.FC<LeadsTrackingProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = React.useState<'leadsCame' | 'leadsConverted' | 'totalDealsSize'>('leadsConverted');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-start sm:items-center justify-between pb-2 sm:pb-6">
        <div>
          <CardTitle className="text-lg font-semibold text-primary-text">Leads tracking</CardTitle>
          <div className="mt-1 sm:mt-2 flex items-baseline space-x-4">
            <p className="text-2xl sm:text-3xl font-bold text-primary-text">680 <span className="text-sm font-normal text-secondary-text">total closed</span></p>
            <p className="text-2xl sm:text-3xl font-bold text-primary-text">70 <span className="text-sm font-normal text-secondary-text">total lost</span></p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2 sm:mt-0">
          <div className="flex space-x-1">
            <Button 
              variant={activeFilter === 'leadsCame' ? "secondary" : "ghost"} 
              size="sm" 
              className="text-xs h-7 px-2"
              onClick={() => setActiveFilter('leadsCame')}
            >
              Leads came
            </Button>
            <Button 
              variant={activeFilter === 'leadsConverted' ? "secondary" : "ghost"} 
              size="sm" 
              className="text-xs h-7 px-2"
              onClick={() => setActiveFilter('leadsConverted')}
            >
              Leads Converted
            </Button>
            <Button 
              variant={activeFilter === 'totalDealsSize' ? "secondary" : "ghost"} 
              size="sm" 
              className="text-xs h-7 px-2"
              onClick={() => setActiveFilter('totalDealsSize')}
            >
              Total deals size
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-7 text-xs px-2 py-1 text-secondary-text">
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
        </div> 
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))"/>
              <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomChartTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, fill: 'transparent' }} />
              <Legend 
                verticalAlign="bottom" 
                align="left" 
                iconType="square" 
                iconSize={10}
                wrapperStyle={{ paddingLeft: '0px', paddingTop: '20px' }}
                formatter={(value, entry) => <span className="text-secondary-text text-xs ml-1">{value}</span>}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="hsl(var(--chart-green))" fillOpacity={0.2} fill="hsl(var(--chart-green))" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }} activeDot={{ r: 6, fill: 'hsl(var(--chart-green))', stroke: 'hsl(var(--background))', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="hsl(var(--accent-red))" fillOpacity={0.2} fill="hsl(var(--accent-red))" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--background))' }} activeDot={{ r: 6, fill: 'hsl(var(--accent-red))', stroke: 'hsl(var(--background))', strokeWidth: 2 }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTracking;
