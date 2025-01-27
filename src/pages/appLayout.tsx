import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { ChevronDown } from 'lucide-react';
import LeftMenu from '../components/landingPage/leftMenu';
import LogoComponent from '../components/logoComponent';
import { useSelector } from 'react-redux';
import { loggedInUser } from '../store/base/selectors';

// Sidebar width
const drawerWidth = 280;

const AdminLayout: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const loggedinUser = useSelector(loggedInUser);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#4338ca', // Indigo color
            color: 'white',
          },
        }}
      >
        <LogoComponent />
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* MENU Section */}
        <LeftMenu />

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />

      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end', gap: 2 }}>
            <Box
              onClick={handleProfileMenuOpen}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                ml: 2
              }}
            >
              <Avatar src="/api/placeholder/32/32" />
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="subtitle2">
                  {loggedinUser?.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {loggedinUser?.roles}
                </Typography>
              </Box>
              <ChevronDown size={20} />
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 0 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;