import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Chip,
    IconButton
} from '@mui/material';
import {
    ArrowForward,
} from '@mui/icons-material';

interface ModelCardProps {
    model: any
}

const ModelCardComponent: React.FC<ModelCardProps> = ({ model }) => {
    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            {model.date}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            S/N: {model.serialNumber}
                        </Typography>
                    </Box>
                    <IconButton size="small" color="primary">
                        <ArrowForward />
                    </IconButton>
                </Box>

                <Chip
                    label="Assigned"
                    size="small"
                    sx={{ mb: 2, bgcolor: 'success.light', color: 'success.dark' }}
                />

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {model.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={model.inspector.image} alt={model.inspector.name} />
                    <Box>
                        <Typography variant="body2">{model.inspector.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {model.inspector.role}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ModelCardComponent;