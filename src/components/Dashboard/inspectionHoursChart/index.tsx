import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const InspectionHoursChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<'monthly' | 'weekly'>('monthly');
  
  const data = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    hours: Math.floor(Math.random() * 1000) + 500
  }));

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              INSPECTION HOURS
            </Typography>
            <Typography variant="h4">
              64318 h
            </Typography>
          </Box>
          <ButtonGroup size="small">
            <Button
              variant={viewMode === 'monthly' ? 'contained' : 'outlined'}
              onClick={() => setViewMode('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={viewMode === 'weekly' ? 'contained' : 'outlined'}
              onClick={() => setViewMode('weekly')}
            >
              Weekly
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InspectionHoursChart;