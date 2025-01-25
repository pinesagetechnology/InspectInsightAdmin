// src/components/dashboard/Charts.tsx
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { groupBy } from 'lodash';
import { InspectionEntity } from '../../../entities/inspection';

interface ChartProps {
    inspections: InspectionEntity[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export const MonthlyInspectionChart: React.FC<ChartProps> = ({ inspections }) => {
    const monthlyData = React.useMemo(() => {
        const grouped = groupBy(inspections, (inspection) => {
            return new Date(inspection.inspectionDate).toLocaleString('default', { month: 'short' });
        });

        return Object.entries(grouped).map(([month, items]) => ({
            month,
            count: items.length,
        }));
    }, [inspections]);

    return (
        <Card className="h-96">
            <CardHeader>
                <Typography variant='h6'>Monthly Inspections</Typography>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export const InspectionStatusChart: React.FC<ChartProps> = ({ inspections }) => {
    const statusData = React.useMemo(() => {
        const grouped = groupBy(inspections, 'inspectionStatus');
        return Object.entries(grouped).map(([status, items]) => ({
            status,
            value: items.length,
        }));
    }, [inspections]);

    return (
        <Card className="h-96">
            <CardHeader>
                <Typography variant='h6'>Inspection Status</Typography>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={statusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {statusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};