import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  Grid2,
} from '@mui/material';
import {
  GridView,
  History,
  CalendarToday,
  Search,
  Refresh
} from '@mui/icons-material';
import StatsCardComponent from '../../components/structure/statsCardComponent';
import StructureCardComponent from '../../components/structure/cardComponent';

const StructureManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tabValue, setTabValue] = useState(0);

  // Example data
  const stats = {
    allStructures: 36,
    activeStructures: 16,
    archivedStructures: 9
  };

  const structures = [
    {
      date: '22 April 2020',
      serialNumber: '201801090015',
      title: 'Lorem ipsum dolor sit amet, adipiscing elit',
      inspector: {
        name: 'Marry Johnson',
        role: 'HRD-Senior Inspector',
        image: '/api/placeholder/40/40'
      }
    },
    // Add more structure as needed
  ];


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Structure Management
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4 }}>
          <StatsCardComponent
            title="All Structures"
            value={stats.allStructures}
          />
        </Box>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            placeholder="Try search 'Name' or 'Inspector'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ maxWidth: 400 }}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
            }}
          />
          <Button variant="outlined" startIcon={<Refresh />}>
            View All
          </Button>
        </Box>


      </Box>

      {/* Structures Grid */}
      <Grid2 container spacing={3}>
        {structures.map((structure, index) => (
          <Grid2 size={4} key={index}>
            <StructureCardComponent structure={structure} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );

};

export default StructureManagementPage;