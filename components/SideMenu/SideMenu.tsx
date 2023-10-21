import * as React from 'react';
import Link from 'next/link';

import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import useRoutes from '@/hooks/useRoutes';

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];

function SideMenu() {

    const routes = useRoutes();

    const handleListItemButtonClick = (onClick) => {
        if (onClick && typeof onClick === 'function') {
            return onClick();
        }
    };

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
            {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                    <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>

            {routes.map(({ label, href, onClick, icon: Icon }) => (
                    <ListItem 
                        key={label} 
                        disablePadding 
                        sx={{
                            display: 'block', 
                            // textShadow: `0px 0px 3px ${theme.palette.mode === 'dark' ? '#000' : '#fff'} ` 
                        }}>
                        <Link  href={`${href}`}>
                            <ListItemButton
                                onClick={() => handleListItemButtonClick(onClick)}
                                title={label}
                                aria-label={label}
                                sx={{
                                    minHeight: 48,
                                    // justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        // mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Icon />

                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        // color: theme.palette.text.primary,
                                        // opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}

            {/* {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))} */}

            </List>
        </Drawer>
    )
}

export default SideMenu