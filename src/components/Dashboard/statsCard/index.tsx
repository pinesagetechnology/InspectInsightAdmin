import React from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';

import { Eye } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    lastUpdate?: string;
    onClick?: () => void;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, lastUpdate, onClick }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
            {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {title}
        </Typography>
        {lastUpdate && (
            <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                Last update: {lastUpdate}
            </Typography>
        )}
        {onClick && (
            <Button
                size="small"
                startIcon={<Eye size={16} />}
                onClick={onClick}
                sx={{ mt: 1 }}
            >
                View All
            </Button>
        )}
    </Box>
);

export default StatsCard;
