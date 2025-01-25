// src/pages/Dashboard.tsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Building2, Users, ClipboardList } from 'lucide-react';
import SummaryCard from '../../components/dashboard/summaryCard';
import { MonthlyInspectionChart, InspectionStatusChart } from '../../components/dashboard/dashboardCharts';
import AnalysisSection from '../../components/dashboard/analysisSection';
import { getAuthState } from '../../store/auth/selectors';
import ErrorAlert from '../../components/common/errorAlert';
import { LoadingState } from '../../components/common/loadingState';

const Dashboard: React.FC = () => {
  const authState = useSelector(getAuthState);

  if (authState.loading) {
    return (
      <div className="p-6">
        <LoadingState message="Loading dashboard data..." />
      </div>
    );
  }

  if (authState.error) {
    return (
      <div className="p-6">
        <ErrorAlert message={authState.error} />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          title="Total Structures"
          count={authState.structures.length}
          icon={<Building2 />}
          navigateTo="/structures"
        />
        <SummaryCard
          title="Total Users"
          count={authState.users.length}
          icon={<Users />}
          navigateTo="/users"
        />
        <SummaryCard
          title="Total Reports"
          count={authState.inspections.length}
          icon={<ClipboardList />}
          navigateTo="/inspections"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <MonthlyInspectionChart inspections={authState.inspections} />
        <InspectionStatusChart inspections={authState.inspections} />
      </div>

      {/* Analysis Section */}
      <AnalysisSection inspections={authState.inspections} />
    </div>
  );
};

export default Dashboard;