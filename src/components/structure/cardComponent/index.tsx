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

interface StructureCardProps {
    structure: any
}

const StructureCardComponent: React.FC<StructureCardProps> = ({ structure }) => {
    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            {structure.date}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            S/N: {structure.serialNumber}
                        </Typography>
                    </Box>
                    <IconButton size="small" color="primary">
                        <ArrowForward />
                    </IconButton>
                </Box>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {structure.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={structure.inspector.image} alt={structure.inspector.name} />
                    <Box>
                        <Typography variant="body2">{structure.inspector.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {structure.inspector.role}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StructureCardComponent;