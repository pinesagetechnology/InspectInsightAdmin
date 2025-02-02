import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid2,
} from '@mui/material';
import {
  Refresh
} from '@mui/icons-material';
import StatsCardComponent from '../../components/structures/statsCardComponent';
import ModelCardComponent from '../../components/structures/cardComponent';
import CustomizedSearchInput from '../../components/searchTextBox';
import { useSelector } from 'react-redux';
import { getStructures, getTotalStructures } from '../../store/base/selectors';

const StructureManagementPage: React.FC = () => {
  const totalStrcutures = useSelector(getTotalStructures);
  const allStructures = useSelector(getStructures);
  const [searchQuery, setSearchQuery] = useState('');
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Structures Management
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4 }}>
          <StatsCardComponent
            title="All Models"
            value={totalStrcutures}
          />
        </Box>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <CustomizedSearchInput setSearchQuery={setSearchQuery} />

          <Button variant="outlined" startIcon={<Refresh />}>
            View All
          </Button>
        </Box>
      </Box>

      {/* Models Grid */}
      <Grid2 container spacing={3}>
        {allStructures.map((strucutre, index) => (
          <Grid2 size={4} key={index}>
            <ModelCardComponent structure={strucutre} />
          </Grid2>
        ))}
        
      </Grid2>
    </Box>
  );

};

export default StructureManagementPage;