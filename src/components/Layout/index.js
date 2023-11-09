import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box, Toolbar } from '@mui/material'

const drawerWidth = 240

const Layout = ({ children }) => {
    return (
        <>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar />
                <Box p={4}>{children}</Box>
            </Box>
        </>
    )
}

export default Layout
