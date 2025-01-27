import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { mainNavItems } from '../../../constants';
import { useLocation } from 'react-router-dom';
import { useNavigationManager } from '../../../navigation';

const LeftMenu: React.FC = () => {
    const { goTo } = useNavigationManager();
    const location = useLocation();

    return (
        <div>
            <Typography variant="caption" sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.7)' }}>
                MENU
            </Typography>
            <List>
                {mainNavItems.map((item: any) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            onClick={() => goTo(item.path)}
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
        </div>
    )
}

export default LeftMenu;
