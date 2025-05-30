import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav component from context already implements the fixed positioning,
  // width (w-64), full height (h-screen effectively due to fixed top-0 and h-full),
  // and specific sidebar styling (bg-sidebar, text colors, etc.).
  // This Sidebar component acts as a clean wrapper or organizational element.
  // The className prop is passed through to SidebarNav, allowing for potential
  // overrides or additional classes if needed from where Sidebar is used,
  // though SidebarNav is designed to be largely self-contained in its styling.
  return <SidebarNav className={className} />;
};

export default Sidebar;
