import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { InspectionEntity } from '../../../entities/inspection';

interface PendingTasksChartProps {
  inspections: InspectionEntity[];
}

const PendingTasksChart: React.FC<PendingTasksChartProps> = ({ inspections }) => {
  // Aggregate data by status
  const statusCounts = inspections.reduce((acc: any, { inspectionStatus }) => {
    acc[inspectionStatus] = (acc[inspectionStatus] || 0) + 1;
    return acc;
  }, {});

  // Convert to array format for recharts
  const data = Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status]
  }));

  const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#0088FE'];

  // Calculate total tasks
  const totalTasks = inspections.length;

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          PENDING TASKS
        </Typography>
        <Typography variant="h4" gutterBottom>
          {totalTasks}
        </Typography>
        <Box sx={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PendingTasksChart;
