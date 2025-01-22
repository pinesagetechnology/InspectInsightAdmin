import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';


const PendingTasksChart: React.FC = () => {
  const data = [
    { name: 'Cantir', value: 45 },
    { name: 'Sistema', value: 25 },
    { name: 'Target', value: 15 },
    { name: 'Cabecce', value: 15 }
  ];

  const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#0088FE'];

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          INSPECTIONS STATUS
        </Typography>
        <Typography variant="h4" gutterBottom>
          36
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