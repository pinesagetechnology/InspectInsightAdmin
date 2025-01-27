import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Avatar,
  Tabs,
  Tab,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Divider,
  List,
  Grid2
} from '@mui/material';
import {
  Search,
  MoreVert,
  ViewModule
} from '@mui/icons-material';
import UserListItem from '../../components/users/userListItem';


const ModelListItem = ({ model }: { model: any }) => {
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
        </Box>
      </Box>
    </Box>
  );
};

// Main Page Component
const UserManagementPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Example data
  const users = [
    {
      id: 1,
      name: "Marry Johnson",
      title: "HRD-Senior Inspector",
      modelCount: "18 Models",
      lastActive: "27 May 2020",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Patty O'Furniture",
      title: "Inspection level title",
      modelCount: "6 Models",
      lastActive: "25 June 2020",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Olive Yew",
      title: "Inspection level title",
      modelCount: "2 Models",
      lastActive: "12 May 2020",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const models = [
    {
      title: "Lorem ipsum dolor adipiscing elit",
      caseId: "201801090015",
      date: "22 April 2020",
      deadline: "22 April 2020",
      status: "InProgress"
    },
    {
      title: "Dolor sit amet, adipiscing elit",
      caseId: "201801090015",
      date: "22 April 2020",
      deadline: "22 April 2020",
      status: "InProgress"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Users Management
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoree.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 6 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4">36</Typography>
            <Typography color="text.secondary" variant="body2">Active Users</Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Left Column - User List */}
        <Box sx={{ width: 360 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ mb: 2 }}
          >
            + Add New user
          </Button>

          <TextField
            fullWidth
            size="small"
            placeholder="Try search 'Marry Jackson' or 'Inspector'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
            }}
            sx={{ mb: 2 }}
          />

          <Paper variant="outlined">
            <List disablePadding>
              {users.map((user, index) => (
                <React.Fragment key={user.id}>
                  {index > 0 && <Divider />}
                  <UserListItem
                    user={user}
                    onClick={() => setSelectedUser(user)}
                    selected={selectedUser?.id === user.id}
                  />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Right Column - User Details */}
        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              {selectedUser ? (
                <>
                  {/* User Header */}
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 4
                  }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Avatar
                        src={selectedUser.avatar}
                        sx={{ width: 64, height: 64 }}
                      />
                      <Box>
                        <Typography variant="h6">{selectedUser.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedUser.title} | ID: DJ2453
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Last Login: {selectedUser.lastActive}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Models List */}
                  <Box>
                    <Paper variant="outlined">
                      {models.map((model, index) => (
                        <ModelListItem key={index} model={model} />
                      ))}
                    </Paper>
                  </Box>
                </>
              ) : (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography color="text.secondary">
                    Select a user to view details
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default UserManagementPage;