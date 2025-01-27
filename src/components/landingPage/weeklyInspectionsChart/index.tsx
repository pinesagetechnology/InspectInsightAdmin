import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format, subDays } from 'date-fns';
import { InspectionEntity } from '../../../entities/inspection';

interface WeeklyInspectionsChartProps {
  inspections: InspectionEntity[];
}

const WeeklyInspectionsChart: React.FC<WeeklyInspectionsChartProps> = ({ inspections }) => {
  const last7Days = [...Array(7)].map((_, i) => {
    const date = subDays(new Date(), i);
    return format(date, 'yyyy-MM-dd');
  }).reverse();

  const data = last7Days.map(day => ({
    day,
    value: inspections.filter(inspection =>
      format(new Date(inspection.inspectionDate), 'yyyy-MM-dd') === day
    ).length
  }));

  const totalInspections = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          WEEKLY INSPECTIONS
        </Typography>
        <Typography variant="h4" gutterBottom>
          {totalInspections}
        </Typography>
        <Box sx={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeeklyInspectionsChart;
