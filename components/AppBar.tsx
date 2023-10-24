"use client";

import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import { UserButton } from "@clerk/nextjs";
import { useContext } from "react";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeContext from "@/context/ColorModeContext";

const Navbar = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (

        <AppBar 
            position="fixed"
            sx={{ 
                zIndex: 2000,
                backdropFilter: "blur(4px)",
                backgroundImage: 'none',
            }}
        >
            <Toolbar sx={{ backgroundColor: 'background.paper' }} >
                <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
                <Typography 
                    variant="h6"
                    mr={2}
                    noWrap 
                    color={'text.primary'}
                    fontFamily={"monospace"}
                    letterSpacing={'.3rem'}
                    fontWeight={'700'}
                >
                    front-end
                </Typography>

                <Box sx={{ display: 'flex', paddingRight: 5, marginLeft: 'auto',  justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        sx={{
                            bgcolor: 'background.default',
                            color: 'text.primary', 
                            paddingRight: 2
                        }}
                    >
                        <IconButton  onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>

                    <UserButton afterSignOutUrl="/" />
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;