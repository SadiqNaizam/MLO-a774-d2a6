import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsSection from '../components/Dashboard/StatsSection';
import LeadsTracking from '../components/Dashboard/LeadsTracking';
import ReasonSection from '../components/Dashboard/ReasonSection';

/**
 * IndexPage serves as the main view for the Leads Overview dashboard.
 * It utilizes the MainAppLayout to provide the standard sidebar and header,
 * and arranges the core dashboard sections: StatsSection, LeadsTracking, and ReasonSection.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Wrapper div for the main content sections within the layout */}
      {/* Provides vertical stacking and spacing between dashboard components */}
      <div className="flex flex-col space-y-6">
        <StatsSection />
        <LeadsTracking />
        <ReasonSection />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
