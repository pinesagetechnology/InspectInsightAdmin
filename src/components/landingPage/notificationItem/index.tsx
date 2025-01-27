import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
} from '@mui/material';

interface NotificationItemProps {
    route: string;
    time: string;
    location: string;
    title: string;
    description: string;
}

// Notification Item Component
const NotificationItem: React.FC<NotificationItemProps> = ({ route, time, location, title, description }) => (
    <Card sx={{ mb: 2 }}>
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle2" color="primary">
                    {route}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {time}
                </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                {location}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button variant="contained" size="small">
                    Review
                </Button>
            </Box>
        </CardContent>
    </Card>
);

export default NotificationItem;
