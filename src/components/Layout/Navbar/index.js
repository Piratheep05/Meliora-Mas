import React, { useState } from 'react'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { notificationsData } from '../../../data'
import DynamicMIcon from '../../DynamicMIcon'

const settings = ['Profile', 'Logout']
const Notifications = ['Notification', 'Notification']

const Navbar = ({ drawerWidth }) => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [anchorElNotification, setAnchorElNotification] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleOpenNotificationMenu = (event) => {
        setAnchorElNotification(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const handleCloseNotificationMenu = () => {
        setAnchorElNotification(null)
    }

    return (
        <>
            <AppBar
                color="inherit"
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {/* notifications */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Notification">
                                <IconButton
                                    onClick={handleOpenNotificationMenu}
                                    size="large"
                                    aria-label={`show ${notificationsData.length} new notifications`}
                                    color="inherit"
                                >
                                    <Badge
                                        badgeContent={notificationsData.length}
                                        color="error"
                                    >
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{
                                    mt: '45px',
                                }}
                                id="menu-appbar"
                                anchorEl={anchorElNotification}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNotification)}
                                onClose={handleCloseNotificationMenu}
                            >
                                {notificationsData.map(
                                    (notification, index) => (
                                        <Box
                                            key={`notification_${index}`}
                                            onClick={
                                                handleCloseNotificationMenu
                                            }
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                columnGap: 1.5,
                                                width: '50ch',
                                                cursor: 'default',
                                                borderBottom: 1,
                                                borderColor: (theme) =>
                                                    theme.palette.divider,
                                                '&:last-child': { border: 0 },
                                            }}
                                        >
                                            <DynamicMIcon
                                                icon={notification?.icon}
                                                fontSize="small"
                                                s
                                            />
                                            <Box
                                                sx={{
                                                    pr: 2,
                                                    flex: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    fontWeight={600}
                                                >
                                                    {notification?.title}
                                                </Typography>
                                                <Typography>
                                                    {notification?.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    )
                                )}
                            </Menu>
                        </Box>

                        {/* account */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Account">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar alt="XO" src=""/>
                                </IconButton>
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
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
