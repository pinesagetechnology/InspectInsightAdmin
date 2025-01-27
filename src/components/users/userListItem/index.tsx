import React, { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
    ListItem,
} from '@mui/material';

interface UserListItemProps {
    user: any; 
    onClick: () => void;
    selected?: boolean;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, selected, onClick }) => (
    <ListItem
    sx={{
      p: 2,
      cursor: 'pointer',
      bgcolor: selected ? 'action.selected' : 'transparent',
      '&:hover': { bgcolor: 'action.hover' }
    }}
    onClick={onClick}
  >
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
      <Avatar src={user.avatar} alt={user.name} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.title}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="body2">{user.modelCount}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.lastActive}
        </Typography>
      </Box>
    </Box>
  </ListItem>
);

export default UserListItem;