import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.png';
import logo_dark from '../assets/logo_dark.png';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { AppBar, Avatar, Box, Button, Container, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

const pages = [{name: 'Home', link: "#home"}, {name: 'About Me', link: "#about"}, {name: 'Projects', link: "#projects"},  {name: 'Skills', link: "#skills"}, {name: 'Contact Me', link: "#contact"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const CommonNavbar = ({ theme, toggleTheme }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleScrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            handleCloseNavMenu();
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <AppBar position="static" style={{
                borderRadius: "90px",
                width: "90%",
                backgroundColor: theme === "dark" ? "#0d1b2a" : "#F5FFFF",
                border: theme === dark ? "1px solid #0a254b" : "1px solid #00b8d8",
                marginTop: "20px"
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                height: { md: "35px", xs: "35px" }
                            }}
                        >
                            <img
                                src={theme === "dark" ? logo : logo_dark}
                                alt="Logo"
                                style={{ height: "35px" }}
                            />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: theme === 'light' ? 'rgb(10 37 75)' : 'white', display: 'block' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={() => handleScrollToSection(page.link)}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => handleScrollToSection(page.link)}
                                    sx={{ my: 2, color: theme === 'light' ? 'rgb(10 37 75)' : 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: "flex" }}>
                            <Box
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <img
                                    src={theme === "dark" ? logo : logo_dark}
                                    alt="Logo"
                                    style={{ height: "35px" }}
                                />
                            </Box>
                            <Tooltip title="Change Mode">
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography style={{ color: theme === 'dark' ? "white" : "rgb(10 37 75)" }} sx={{ display: { md: "block", xs: "none" } }}>
                            Light
                        </Typography>
                        <Switch
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            color="default"
                        />
                        <Typography style={{ color: theme === 'dark' ? "white" : "rgb(10 37 75)" }} sx={{ display: { md: "block", xs: "none" } }}>
                            Dark
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default CommonNavbar;
