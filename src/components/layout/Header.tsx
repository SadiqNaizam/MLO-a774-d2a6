import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeader component from context already implements the fixed positioning,
  // height (h-[70px]), offsets (left-64, right-0), z-index, and specific header styling
  // (bg-surface, text colors, border).
  // This Header component serves as a straightforward wrapper.
  // The className prop is passed to TopHeader for any specific contextual styling needs,
  // similar to the Sidebar component.
  return <TopHeader className={className} />;
};

export default Header;
