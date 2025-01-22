import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  Grid2,
  Button
} from '@mui/material';
import {
  MoreVert,
} from '@mui/icons-material';
import { InspectionEntity } from '../../entities/inspection';
import { InspectionStatusEnum } from '../../enums';

interface InspectionListItemProps {
  inspection: InspectionEntity;
}

const InspectionListItem: React.FC<InspectionListItemProps> = ({ inspection }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case InspectionStatusEnum.Completed:
        return 'success';
      case InspectionStatusEnum.InProgress:
        return 'primary';
      case InspectionStatusEnum.ToDo:
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1">{inspection.inspectorName}</Typography>
          <Grid2 container spacing={2} sx={{ mt: 0.5 }}>
            <Grid2>
              <Typography variant="caption" color="text.secondary">
                Inspection Type: {inspection.inspectionType}
              </Typography>
            </Grid2>
            <Grid2>
              <Typography variant="caption" color="text.secondary">
                Date of assign: {inspection.inspectionDate}
              </Typography>
            </Grid2>
            <Grid2>
              <Typography variant="caption" color="text.secondary">
                Date of Next Inspection: {inspection.nextInspectionProposedDate}
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            label={inspection.inspectionStatus}
            size="small"
            color={getStatusColor(inspection.inspectionStatus)}
            variant="outlined"
          />

          <Button variant="text">View Report</Button>
        </Box>
      </Box>

    </Box>
  );
};

export default InspectionListItem;