import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Avatar,
  IconButton,
  Paper,
  Divider,
  List,
} from '@mui/material';
import {
  Search,
  MoreVert,
} from '@mui/icons-material';
import UserListItem from '../../components/User/userListItem';
import { InspectionEntity } from '../../entities/inspection';
import InspectionListItem from './inspectionListItem';
import { mockInspectionData } from '../../mockData';

interface UserManagementPageProps {
  inspections: InspectionEntity[];
}
// Main Page Component
const UserManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Example data
  const users = [
    {
      id: 1,
      name: "Marry Johnson",
      title: "HRD-Senior Inspector",
      structureCount: "18 Structures",
      lastActive: "27 May 2020",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Patty O'Furniture",
      title: "Inspection level title",
      structureCount: "6 Structures",
      lastActive: "25 June 2020",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Olive Yew",
      title: "Inspection level title",
      structureCount: "2 Structures",
      lastActive: "12 May 2020",
      avatar: "/api/placeholder/40/40"
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

                  {/* Structures List */}
                  <Box>
                    <Paper variant="outlined">
                      {mockInspectionData.map((inspection, index) => (
                        <InspectionListItem key={index} inspection={inspection} />
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