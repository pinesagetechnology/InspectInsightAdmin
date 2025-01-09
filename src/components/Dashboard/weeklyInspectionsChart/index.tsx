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


const WeeklyInspectionsChart: React.FC = () => {
  const data = [
    { day: '1', value: 100 },
    { day: '2', value: 150 },
    { day: '3', value: 250 },
    { day: '4', value: 170 },
    { day: '5', value: 220 },
    { day: '6', value: 230 },
    { day: '7', value: 400 }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          WEEKLY INSPECTIONS
        </Typography>
        <Typography variant="h4" gutterBottom>
          401
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
