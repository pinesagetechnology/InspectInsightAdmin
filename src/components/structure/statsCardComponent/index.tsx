import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';

interface StatsCardComponentProps {
    title: string;
    value: number | string;
    icon?: React.ReactNode;
}

const StatsCardComponent: React.FC<StatsCardComponentProps> = ({ title, value, icon }) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="div" gutterBottom>
                {value}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                {icon}
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatsCardComponent;