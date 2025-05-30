import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface ReasonItem {
  id: string;
  percentage: string;
  description: string;
}

const reasonsForLoss: ReasonItem[] = [
  { id: 'r1', percentage: '40%', description: 'The proposal is unclear' },
  { id: 'r2', percentage: '20%', description: 'However venture pursuit' },
  { id: 'r3', percentage: '10%', description: 'Other' },
  { id: 'r4', percentage: '30%', description: 'The proposal is unclear' }, // Note: Duplicate text from image
];

interface OtherDataItem {
  id: string;
  value: string;
  label: string;
  hasInfoIcon?: boolean;
}

const otherDataItems: OtherDataItem[] = [
  { id: 'od1', value: '900', label: 'total leads count' },
  { id: 'od2', value: '12', label: 'days in average to convert lead' },
  { id: 'od3', value: '30', label: 'inactive leads', hasInfoIcon: true },
];

interface ReasonSectionProps {
  className?: string;
}

const ReasonSection: React.FC<ReasonSectionProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {reasonsForLoss.map((reason) => (
            <div key={reason.id}>
              <p className="text-3xl font-bold text-primary-text">{reason.percentage}</p>
              <p className="text-sm text-secondary-text mt-1">{reason.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherDataItems.map((item) => (
            <div key={item.id} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-primary-text">{item.value}</p>
              <div className="flex items-center justify-center sm:justify-start mt-1">
                <p className="text-sm text-secondary-text">{item.label}</p>
                {item.hasInfoIcon && <Info className="w-3.5 h-3.5 ml-1.5 text-secondary-text" />}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonSection;
