import React from 'react';
import { useSelector } from 'react-redux';
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
import { Structure } from '../../../entities/structure';
import { InspectionEntity } from 'entities/inspection';
import { getLastInspection } from '../../../store/base/selectors';

interface ModelCardProps {
    structure: Structure;
}

const ModelCardComponent: React.FC<ModelCardProps> = ({ structure }) => {

    const lastInspection = useSelector(getLastInspection(structure.id));

    return (
        <Card>
            <CardContent>


                <Typography variant="body1" sx={{ mb: 2 }}>
                    {structure.name}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Box>
                        <Typography variant="body2">{structure.code}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {structure.overalLength} x {structure.overalWidth}
                        </Typography>
                    </Box>
                    {(lastInspection && lastInspection?.inspectionStatus) &&
                        (<Chip
                            label={lastInspection?.inspectionStatus}
                            size="small"
                            sx={{ mb: 2, bgcolor: 'success.light', color: 'success.dark' }}
                        />)
                    }
                    {
                        lastInspection &&
                        (
                            <Box sx={{ display: 'flex', mb: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {structure.lastInspectionDate}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        structure Name: {structure.name}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    }
                    <IconButton size="small" color="primary">
                        <ArrowForward />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ModelCardComponent;