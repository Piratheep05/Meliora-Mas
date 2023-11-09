import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Box, Button, Grid } from '@mui/material'
import { DashboardCard } from '../../../components'
import { useLocation, useNavigate } from 'react-router'

const dashboards = [
    {
        id: 1,
        name: 'Dashboard 1',
        icon: 'ElectricMeter',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 2,
        name: 'Dashboard 2',
        icon: 'GasMeter',
        iconColor: (theme) => theme.palette.primary.main,
    },
    {
        id: 3,
        name: 'Dashboard 3',
        icon: 'ElectricMeter',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 4,
        name: 'Dashboard 4',
        icon: 'GasMeter',
        iconColor: (theme) => theme.palette.primary.main,
    },
    {
        id: 5,
        name: 'Dashboard 5',
        icon: 'ElectricMeter',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 6,
        name: 'Dashboard 6',
        icon: 'GasMeter',
        iconColor: (theme) => theme.palette.primary.main,
    },
    {
        id: 7,
        name: 'Dashboard 7',
        icon: 'ElectricMeter',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 8,
        name: 'Dashboard 8',
        icon: 'GasMeter',
        iconColor: (theme) => theme.palette.primary.main,
    },
    {
        id: 9,
        name: 'Dashboard 9',
        icon: 'ElectricMeter',
        iconColor: (theme) => theme.palette.error.main,
    },
]

const DashboardHome = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    return (
        <>
            <Box
                sx={{
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<DashboardIcon />}
                    sx={{
                        ml: 'auto',
                    }}
                    onClick={() => navigate(`${pathname}/create`)}
                >
                    Create Dashboard
                </Button>
            </Box>
            <Grid container spacing={3.5}>
                {dashboards?.map((dashboard, index) => (
                    <Grid item lg={3} key={`dashboard_${index}`}>
                        <DashboardCard
                            id={dashboard?.id}
                            title={dashboard?.name}
                            icon={dashboard?.icon}
                            iconColor={dashboard?.iconColor}
                            onClick={() =>
                                navigate(
                                    `${pathname}/${dashboard.id}/${dashboard.name}`
                                )
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default DashboardHome
