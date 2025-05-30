import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    // Root container for the entire application layout.
    // `min-h-screen` ensures it covers at least the full viewport height.
    // `bg-background` and `text-foreground` set the default page colors from theme.
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      {/* Sidebar component, which renders the fixed SidebarNav. */}
      <Sidebar />
      
      {/* Header component, which renders the fixed TopHeader. */}
      {/* Note: Header is rendered here but positions itself fixed, overlaying other content
          unless that content is offset. This is standard for fixed headers. */}
      <Header />
      
      {/* Main content area.
          This `main` element is specifically styled to fit into the space
          not occupied by the fixed Sidebar and Header.
      */}
      <main
        className={cn(
          "ml-64",                   // Offset from the left to account for Sidebar's width (w-64).
          "mt-[70px]",                // Offset from the top to account for Header's height (h-[70px]).
          "p-6",                      // Standard padding around the content within the main area.
          "min-w-0",                  // Essential for flex/grid children to prevent overflow issues.
                                      // Also helpful in ensuring the main area itself doesn't expand unexpectedly.
          "h-[calc(100vh-70px)]",     // Sets the height of the main scrollable area.
                                      // It's viewport height minus header height, ensuring it fits perfectly.
          "overflow-y-auto"           // Enables vertical scrolling if the content inside exceeds this calculated height.
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
