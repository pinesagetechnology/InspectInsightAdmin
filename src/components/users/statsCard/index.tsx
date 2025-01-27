import React from "react";
import { Box, Typography } from "@mui/material";

interface StatsCardProps {
    title: string; 
    value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="div" gutterBottom>
            {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {title}
        </Typography>
    </Box>
);

export default StatsCard;