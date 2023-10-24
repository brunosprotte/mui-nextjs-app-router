"use client";
import * as React from 'react';
import Link from 'next/link';

import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import useRoutes from '@/hooks/useRoutes';
import { useClerk } from '@clerk/nextjs';


const DRAWER_WIDTH = 240;

const PLACEHOLDER_LINKS = [
    { text: 'Settings', icon: SettingsIcon },
    { text: 'Support', icon: SupportIcon },
  
];

function SideMenu() {

    const routes = useRoutes();    const { signOut } = useClerk();

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    top: ['48px', '56px', '64px'],
                    height: 'auto',
                    bottom: 0,
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Divider />
            <List>
                {routes.map(({ label, href, icon: Icon }) => (
                    <ListItem key={href} disablePadding >
                        <ListItemButton
                            component={Link}
                            href={href}
                            title={label}
                            aria-label={label}
                        >
                            <ListItemIcon >
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>

                {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem key='Logout' disablePadding>
                    <ListItemButton onClick={() => signOut()} >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>        
    );
}

export default SideMenu;