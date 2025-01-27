import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';
import StatsCard from '../../components/landingPage/statsCard';
import NotificationItem from '../../components/landingPage/notificationItem';
import TaskItem from '../../components/landingPage/taskItem';
import WeeklyInspectionsChart from '../../components/landingPage/weeklyInspectionsChart';
import PendingTasksChart from '../../components/landingPage/pendingTasksChart';
import { getInspections, getTotalInspections, getTotalStructures, getTotalUsers, getInspectionsByStatus } from '../../store/base/selectors';
import { InspectionStatusEnum } from '../../enums';
import { TaskItemModel } from '../../models/taskItemModel';

const DashboardPage: React.FC = () => {

  const totalUsers = useSelector(getTotalUsers);
  const totalStructures = useSelector(getTotalStructures);
  const totalInspections = useSelector(getTotalInspections);
  const allInspections = useSelector(getInspections);
  const upcomingInspections: TaskItemModel[] = useSelector(getInspectionsByStatus(InspectionStatusEnum.InProgress));
  const submittedInspections: TaskItemModel[] = useSelector(getInspectionsByStatus(InspectionStatusEnum.Submitted));


  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography color="text.secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad.
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Grid2 container spacing={4} sx={{ mb: 4 }}>
        <Grid2 size={4}>
          <StatsCard
            title="Total Structures"
            value={totalStructures}
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all models')}
          />
        </Grid2>
        <Grid2 size={4}>
          <StatsCard
            title="Total Users"
            value={totalUsers}
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all users')}
          />
        </Grid2>
        <Grid2 size={4}>
          <StatsCard
            title="Total Reports"
            value={totalInspections}
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all reports')}
          />
        </Grid2>
      </Grid2>

      {/* Charts */}
      <Grid2 container spacing={4} sx={{ mb: 4 }}>
        <Grid2 size={6}>
          <WeeklyInspectionsChart inspections={allInspections} />
        </Grid2>
        <Grid2 size={6}>
          <PendingTasksChart inspections={allInspections} />
        </Grid2>
      </Grid2>

      {/* Tasks and Notifications */}
      <Grid2 container spacing={4}>
        <Grid2 size={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Up Coming Tasks</Typography>
              </Box>
              {upcomingInspections.map((inspection) => (
                <TaskItem
                  key={inspection.id}
                  time={inspection.inspectionDate}
                  title={inspection.structureName}
                  subtitle={inspection.location}
                  description={inspection.comment || ""}
                  inspector={inspection.inspectorName}
                />
              ))}
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Reports
              </Typography>

              {
                submittedInspections.map((inspection) => (
                  <NotificationItem
                    key={inspection.id}
                    route={inspection.structureName}
                    time={inspection.inspectionDate}
                    location={inspection.location}
                    title={inspection.inspectorName}
                    description={inspection.comment || ""}
                  />
                ))}

            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DashboardPage;