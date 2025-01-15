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
import StatsCardComponent from '../../components/Model/statsCardComponent';
import ModelCardComponent from '../../components/Model/cardComponent';

const ModelManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tabValue, setTabValue] = useState(0);

  // Example data
  const stats = {
    allModels: 36,
    activeModels: 16,
    archivedModels: 9
  };

  const models = [
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
    // Add more models as needed
  ];


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Model Management
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 4 }}>
          <StatsCardComponent
            title="All Models"
            value={stats.allModels}
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

        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="All" />
          <Tab label="Assigned" />
          <Tab label="Not Assigned" />
          <Tab label="Completed" />
        </Tabs>
      </Box>

      {/* Models Grid */}
      <Grid2 container spacing={3}>
        {models.map((model, index) => (
          <Grid2 size={4} key={index}>
            <ModelCardComponent model={model} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );

};

export default ModelManagementPage;