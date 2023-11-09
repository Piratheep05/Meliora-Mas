import {
    Box,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DynamicMIcon from '../DynamicMIcon'
import { useLocation, useNavigate } from 'react-router-dom'

const ReportCard = ({ id, title, subscribed, icon, iconColor, onClick }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Box
                component={Paper}
                sx={{
                    p: 3,
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                    }}
                >
                    <IconButton
                        id="options-button"
                        aria-label="options"
                        aria-controls={open ? 'options-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        size="small"
                    >
                        <DynamicMIcon icon={'MoreVert'} fontSize="small" />
                    </IconButton>
                </Box>

                <Stack
                    spacing={2.5}
                    onClick={onClick}
                    sx={{
                        cursor: 'pointer',
                    }}
                >
                    <DynamicMIcon
                        icon={icon}
                        sx={{
                            mx: 'auto',
                            fontSize: '45px',
                            color: iconColor,
                        }}
                    />
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        textAlign={'center'}
                    >
                        {title}
                    </Typography>
                    {subscribed && (
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            Subscribed
                        </Typography>
                    )}
                </Stack>
            </Box>
            <Menu
                id="options-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'options-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DynamicMIcon icon={'Download'} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Download Report</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={() => navigate(`${pathname}/${id}/${title}/edit`)}
                >
                    <ListItemIcon>
                        <DynamicMIcon icon={'Edit'} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit Report</ListItemText>
                </MenuItem>
                {subscribed ? (
                    <MenuItem
                        onClick={() =>
                            navigate(`${pathname}/${id}/${title}/subscription`)
                        }
                    >
                        <ListItemIcon>
                            <DynamicMIcon
                                icon={'EditNotifications'}
                                fontSize="small"
                            />
                        </ListItemIcon>
                        <ListItemText>Edit Subscription</ListItemText>
                    </MenuItem>
                ) : (
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DynamicMIcon
                                icon={'NotificationAdd'}
                                fontSize="small"
                            />
                        </ListItemIcon>
                        <ListItemText>Add Subscription</ListItemText>
                    </MenuItem>
                )}

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DynamicMIcon icon={'Delete'} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete Report</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}

// set default prop values
ReportCard.defaultProps = {
    title: 'Report Title',
    subscribed: false,
    icon: 'Assignment',
    iconColor: (theme) => theme.palette.primary.main,
}

export default ReportCard
