import React from 'react';
import {
    Box,
    Typography,
    IconButton,
} from '@mui/material';
import { ChevronRight } from 'lucide-react';

interface TaskItemProps {
    time: string;
    title: string;
    subtitle: string;
    description: string;
    inspector: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ time, title, subtitle, description, inspector }) => (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Box sx={{
            width: 2,
            bgcolor: 'primary.main',
            borderRadius: 4,
            position: 'relative'
        }}>
            <Box sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                position: 'absolute',
                top: -6,
                left: -5
            }} />
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="caption" color="text.secondary">
                {time}
            </Typography>
            <Typography variant="subtitle2">
                {title}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
                {subtitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Inspected by {inspector}
            </Typography>
        </Box>
        <IconButton size="small">
            <ChevronRight />
        </IconButton>
    </Box>
);

export default TaskItem;
