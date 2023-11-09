import React, { useState } from 'react'
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
import DynamicMIcon from '../DynamicMIcon'
import { useLocation, useNavigate } from 'react-router-dom'

const DashboardCard = ({
    id,
    title,
    description,
    showDescription,
    icon,
    iconColor,
    onClick,
}) => {
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
                    {showDescription && (
                        <Typography variant="body2" textAlign={'center'}>
                            {description}
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
                <MenuItem
                    onClick={() => navigate(`${pathname}/${id}/${title}/edit`)}
                >
                    <ListItemIcon>
                        <DynamicMIcon icon={'Edit'} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit Dashboard</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DynamicMIcon icon={'Delete'} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete Dashboard</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}

// set default prop values
DashboardCard.defaultProps = {
    title: 'Dashboard Title',
    description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nihil consequuntur voluptatum iste quasi cum.',
    showDescription: false,
    icon: 'Dashboard',
    iconColor: (theme) => theme.palette.primary.main,
}

export default DashboardCard
