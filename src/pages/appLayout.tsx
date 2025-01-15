import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Button
} from '@mui/material';
import {
  Home,
  LayoutGrid,
  Activity,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  Settings,
  Calendar,
  HelpCircleIcon,
  ChevronDown
} from 'lucide-react';
import { RoutesValueEnum } from '../enums';

// Sidebar width
const drawerWidth = 280;

// Navigation items
const mainNavItems = [
  { text: 'Dashboard', icon: <Home size={20} />, path: `/${RoutesValueEnum.dashboard}` },
  { text: 'Models Management', icon: <LayoutGrid size={20} />, path: '/models' },
  { text: 'Users Management', icon: <Users size={20} />, path: '/users' },
  { text: 'Reports', icon: <FileText size={20} />, path: '/reports' },
];

const accountNavItems = [
  { text: 'Messages', icon: <MessageSquare size={20} />, path: '/messages' },
];

// Logo Component
const Logo: React.FC = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2 }}>
    <div style={{ width: 32, height: 32 }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10.6V16L12 19L18 16V10.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <Typography variant="h6" noWrap component="div" sx={{ color: 'white', display: 'flex' }}>
      Inspection <span style={{ color: '#FFD700' }}>Insight</span>
    </Typography>
  </Box>
);

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        <Logo />
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
        
        {/* MENU Section */}
        <Typography variant="caption" sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.7)' }}>
          MENU
        </Typography>
        <List>
          {mainNavItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.15)',
                    },
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      fontSize: '0.9rem',
                      fontWeight: location.pathname === item.path ? 600 : 400
                    } 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* ACCOUNT Section */}
        <Typography variant="caption" sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.7)' }}>
          ACCOUNT
        </Typography>
        <List>
          {accountNavItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.15)',
                    },
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      fontSize: '0.9rem',
                      fontWeight: location.pathname === item.path ? 600 : 400
                    } 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
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
            <Button
              size="small"
              startIcon={<HelpCircleIcon size={20} />}
            >
              Help
            </Button>
            <Button
              size="small"
              startIcon={<Calendar size={20} />}
            >
              Stats
            </Button>
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
                  Diane Ward
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Admin Manager
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
              <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
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