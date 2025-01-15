import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid2,
  IconButton,
} from '@mui/material';
import { Calendar } from 'lucide-react';
import StatsCard from '../../components/Dashboard/statsCard';
import NotificationItem from '../../components/Dashboard/notificationItem';
import TaskItem from '../../components/Dashboard/taskItem';
import WeeklyInspectionsChart from '../../components/Dashboard/weeklyInspectionsChart';
import PendingTasksChart from '../../components/Dashboard/pendingTasksChart';

const DashboardPage: React.FC = () => {
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
            title="Total Models"
            value="36"
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all models')}
          />
        </Grid2>
        <Grid2 size={4}>
          <StatsCard
            title="Total Users"
            value="156"
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all users')}
          />
        </Grid2>
        <Grid2 size={4}>
          <StatsCard
            title="Total Reports"
            value="2518"
            lastUpdate="22 May 2020"
            onClick={() => console.log('View all reports')}
          />
        </Grid2>
      </Grid2>

      {/* Charts */}
      <Grid2 container spacing={4} sx={{ mb: 4 }}>
        <Grid2 size={6}>
          <WeeklyInspectionsChart />
        </Grid2>
        <Grid2 size={6}>
          <PendingTasksChart />
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
              <TaskItem
                time="10:00 AM - 12:00 PM"
                title="Lorem Ipsum Dolor"
                subtitle="Location of this switch"
                description="Lorem ipsum dolor sit amet, consectetuer adipisicing elit, sed do eiusmod tempor incididunt ut labore et"
                inspector="Lion Monesh"
              />
              <TaskItem
                time="10:00 AM - 12:00 PM"
                title="Excepteur sint occaecat cupidatat"
                subtitle="Location of this switch"
                description="Lorem ipsum dolor sit amet, consectetuer adipisicing elit, sed do eiusmod tempor incididunt ut labore et"
                inspector="Hilda Hamilton"
              />
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Reports
              </Typography>
              <NotificationItem
                route="Route North"
                time="05 May 2019, 2pm - 3pm"
                location="Location of this switch"
                title="Lorem Ipsum Dolor Sit Amet Consectetur"
                description="Discussion topics"
              />
              <NotificationItem
                route="Route South-West"
                time="05 May 2019, 2pm - 3pm"
                location="Location of this switch"
                title="consectetuer adipisicing elit"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et"
              />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DashboardPage;