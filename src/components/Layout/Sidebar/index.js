import React, { useState } from 'react'
import {
    Box,
    Collapse,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    styled,
} from '@mui/material'
import { images } from '../../../constants'
import DynamicMIcon from '../../DynamicMIcon'
import { sidebarLinks } from '../../../data'
import { useLocation, useNavigate } from 'react-router-dom'

import { routes } from '../../../routes'

const DarkThemeDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
}))

const DarkThemeListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: '#FFFFFF',
    borderRadius: '.5rem',
    '&:hover': {
        color: theme.palette.secondary.main,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-selected': {
        color: theme.palette.secondary.main,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    '&.Mui-selected:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    transition: 'all',
    transitionDuration: '300ms',
}))

const BoxScroll = styled(Box)(({ theme, value }) => ({
    padding: '1rem 1rem 0',
    maxHeight: `calc(100% - ${value}px)`,
    overflow: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    // backgroundColor: theme.palette.primary.light,
}))

// Drawer header area heigh
const sidebarHeaderHeight = 125

const Sidebar = ({ drawerWidth }) => {
    const [open, setOpen] = useState(false)

    const location = useLocation()
    const { pathname } = location

    const navigate = useNavigate()

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box
                    sx={{
                        p: 4,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={images.customerLogo}
                        alt="customer logo"
                        loading="lazy"
                        width={160}
                    />
                </Box>
                <DarkThemeDivider />
                <BoxScroll value={sidebarHeaderHeight}>
                    <List>
                        {routes.map((item, index) => {
                            if (item?.hideFromSidebar) {
                                return null
                            } else {
                                if (
                                    item?.dropDown &&
                                    item?.children.length > 0
                                ) {
                                    return (
                                        <React.Fragment
                                            key={`${item?.id}-${item?.label}`}
                                        >
                                            <DarkThemeListItemButton
                                                onClick={handleClick}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        color: 'currentColor',
                                                    }}
                                                >
                                                    <DynamicMIcon
                                                        icon={item?.icon}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <Typography
                                                        fontWeight={'600'}
                                                    >
                                                        {item?.label}
                                                    </Typography>
                                                </ListItemText>
                                                {open ? (
                                                    <DynamicMIcon
                                                        icon={'ExpandLess'}
                                                    />
                                                ) : (
                                                    <DynamicMIcon
                                                        icon={'ExpandMore'}
                                                    />
                                                )}
                                            </DarkThemeListItemButton>
                                            <Collapse
                                                in={open}
                                                timeout="auto"
                                                unmountOnExit
                                            >
                                                <List
                                                    component="div"
                                                    disablePadding
                                                >
                                                    {item.children.map(
                                                        (child, childIndex) => (
                                                            <DarkThemeListItemButton
                                                                key={`${item?.id}-${item?.label}-child-${childIndex}`}
                                                                sx={{ pl: 4 }}
                                                                onClick={() =>
                                                                    navigate(
                                                                        item?.path +
                                                                            child?.path
                                                                    )
                                                                }
                                                                selected={pathname.startsWith(
                                                                    item?.path +
                                                                        child?.path
                                                                )}
                                                            >
                                                                <ListItemText>
                                                                    <Typography
                                                                        variant="body2"
                                                                        fontWeight={
                                                                            600
                                                                        }
                                                                    >
                                                                        {
                                                                            child?.label
                                                                        }
                                                                    </Typography>
                                                                </ListItemText>
                                                            </DarkThemeListItemButton>
                                                        )
                                                    )}
                                                </List>
                                            </Collapse>
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <ListItem
                                            key={`${item?.id}-${item?.label}}`}
                                            disablePadding
                                            sx={{
                                                mb: 2,
                                            }}
                                        >
                                            <DarkThemeListItemButton
                                                onClick={() =>
                                                    navigate(item?.path)
                                                }
                                                selected={pathname.startsWith(
                                                    item?.path
                                                )}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        color: 'currentColor',
                                                    }}
                                                >
                                                    <DynamicMIcon
                                                        icon={item?.icon}
                                                    />
                                                </ListItemIcon>
                                                {/* <ListItemText primary={item.name}/> */}
                                                <Typography fontWeight={'600'}>
                                                    {item?.label}
                                                </Typography>
                                            </DarkThemeListItemButton>
                                        </ListItem>
                                    )
                                }
                            }
                            // if (item?.dropDown && item?.children.length > 0) {
                            //     return (
                            //         <React.Fragment
                            //             key={`${item?.id}-${item?.label}`}
                            //         >
                            //             <DarkThemeListItemButton
                            //                 onClick={handleClick}
                            //             >
                            //                 <ListItemIcon
                            //                     sx={{
                            //                         color: 'currentColor',
                            //                     }}
                            //                 >
                            //                     <DynamicMIcon
                            //                         icon={item?.icon}
                            //                     />
                            //                 </ListItemIcon>
                            //                 <ListItemText>
                            //                     <Typography fontWeight={'600'}>
                            //                         {item?.label}
                            //                     </Typography>
                            //                 </ListItemText>
                            //                 {open ? (
                            //                     <DynamicMIcon
                            //                         icon={'ExpandLess'}
                            //                     />
                            //                 ) : (
                            //                     <DynamicMIcon
                            //                         icon={'ExpandMore'}
                            //                     />
                            //                 )}
                            //             </DarkThemeListItemButton>
                            //             <Collapse
                            //                 in={open}
                            //                 timeout="auto"
                            //                 unmountOnExit
                            //             >
                            //                 <List
                            //                     component="div"
                            //                     disablePadding
                            //                 >
                            //                     {item.children.map(
                            //                         (child, childIndex) => (
                            //                             <DarkThemeListItemButton
                            //                                 key={`${item?.id}-${item?.label}-child-${childIndex}`}
                            //                                 sx={{ pl: 4 }}
                            //                                 onClick={() =>
                            //                                     navigate(
                            //                                         item?.path +
                            //                                             child?.path
                            //                                     )
                            //                                 }
                            //                                 selected={pathname.startsWith(
                            //                                     item?.path +
                            //                                         child?.path
                            //                                 )}
                            //                             >
                            //                                 <ListItemText>
                            //                                     <Typography
                            //                                         variant="body2"
                            //                                         fontWeight={
                            //                                             600
                            //                                         }
                            //                                     >
                            //                                         {
                            //                                             child?.label
                            //                                         }
                            //                                     </Typography>
                            //                                 </ListItemText>
                            //                             </DarkThemeListItemButton>
                            //                         )
                            //                     )}
                            //                 </List>
                            //             </Collapse>
                            //         </React.Fragment>
                            //     )
                            // } else {
                            //     return (
                            //         <ListItem
                            //             key={`${item?.id}-${item?.label}}`}
                            //             disablePadding
                            //             sx={{
                            //                 mb: 2,
                            //             }}
                            //         >
                            //             <DarkThemeListItemButton
                            //                 onClick={() => navigate(item?.path)}
                            //                 selected={pathname.startsWith(
                            //                     item?.path
                            //                 )}
                            //             >
                            //                 <ListItemIcon
                            //                     sx={{
                            //                         color: 'currentColor',
                            //                     }}
                            //                 >
                            //                     <DynamicMIcon
                            //                         icon={item?.icon}
                            //                     />
                            //                 </ListItemIcon>
                            //                 {/* <ListItemText primary={item.name}/> */}
                            //                 <Typography fontWeight={'600'}>
                            //                     {item?.label}
                            //                 </Typography>
                            //             </DarkThemeListItemButton>
                            //         </ListItem>
                            //     )
                            // }
                        })}
                    </List>
                </BoxScroll>
            </Drawer>
        </>
    )
}

export default Sidebar
