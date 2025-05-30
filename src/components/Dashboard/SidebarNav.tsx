import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  CircleUserRound,
  FileText,
  FileSpreadsheet,
  List,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  KanbanSquare, // Placeholder for Logo
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center px-4 py-2.5 text-sm font-medium rounded-md',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150',
        isActive
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground'
      )}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activeItem, setActiveItem] = React.useState<string>('Dashboard');

  const navItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Leads', icon: Users, label: 'Leads' },
    { id: 'Customers', icon: CircleUserRound, label: 'Customers' },
    { id: 'Proposals', icon: FileText, label: 'Proposals' },
    { id: 'Invoices', icon: FileSpreadsheet, label: 'Invoices' },
    { id: 'Items', icon: List, label: 'Items' },
    { id: 'Mail', icon: Mail, label: 'Mail' },
    { id: 'Shoebox', icon: Archive, label: 'Shoebox' },
    { id: 'Calendar', icon: CalendarDays, label: 'Calendar' },
  ];

  const bottomNavItems = [
    { id: 'Help', icon: HelpCircle, label: 'Help' },
    { id: 'Settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className={cn('flex flex-col h-full bg-sidebar p-4 space-y-2 fixed top-0 left-0 w-64', className)}>
      <div className="flex items-center h-[70px] px-2 mb-4 shrink-0">
        {/* Placeholder Logo */} 
        <KanbanSquare className="h-8 w-8 mr-2 text-primary" />
        <span className="text-xl font-semibold text-primary-text">Acme Inc.</span>
      </div>
      
      <div className="flex-grow space-y-1.5 overflow-y-auto pr-1">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-sidebar-border space-y-1.5">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id} // Optional: if bottom items can be active
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default SidebarNav;
