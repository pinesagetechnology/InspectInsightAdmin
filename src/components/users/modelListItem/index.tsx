import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Chip,
    Menu,
    MenuItem,
    Grid2,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

interface ModelListItemProps {
    model: any;
}
const ModelListItem: React.FC<ModelListItemProps> = ({ model }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'assigned':
                return 'primary';
            case 'in progress':
                return 'warning';
            case 'delayed':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1">{model.title}</Typography>
                    <Grid2 container spacing={2} sx={{ mt: 0.5 }}>
                        <Grid2>
                            <Typography variant="caption" color="text.secondary">
                                Case ID: {model.caseId}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography variant="caption" color="text.secondary">
                                Date of assign: {model.date}
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography variant="caption" color="text.secondary">
                                Deadline: {model.deadline}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                        label={model.status}
                        size="small"
                        color={getStatusColor(model.status)}
                        variant="outlined"
                    />
                    <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
                        <MoreVert />
                    </IconButton>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => setAnchorEl(null)}>View Report</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Assign</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Reassign</MenuItem>
            </Menu>
        </Box>
    );
};

export default ModelListItem;