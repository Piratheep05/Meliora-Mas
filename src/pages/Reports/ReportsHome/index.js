import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { ReportCard } from '../../../components'
import { useLocation, useNavigate } from 'react-router-dom'

const reports = [
    {
        id: 1,
        name: 'Report 1',
        subscribed: true,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 2,
        name: 'Report 2',
        subscribed: false,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 3,
        name: 'Report 3',
        subscribed: true,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 4,
        name: 'Report 4',
        subscribed: false,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 5,
        name: 'Report 5',
        subscribed: false,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 6,
        name: 'Report 6',
        subscribed: true,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 7,
        name: 'Report 7',
        subscribed: false,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 8,
        name: 'Report 8',
        subscribed: true,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
    {
        id: 9,
        name: 'Report 9',
        subscribed: true,
        icon: 'Assignment',
        iconColor: (theme) => theme.palette.error.main,
    },
]

const ReportsHome = () => {
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
                    startIcon={<AssignmentIcon />}
                    sx={{
                        ml: 'auto',
                    }}
                    onClick={() => navigate(`${pathname}/create`)}
                >
                    Create Report
                </Button>
            </Box>
            <Grid container spacing={3.5}>
                {reports?.map((report, index) => (
                    <Grid item lg={3}>
                        <ReportCard
                            id={report?.id}
                            title={report?.name}
                            subscribed={report?.subscribed}
                            iconColor={report?.iconColor}
                            onClick={() =>
                                navigate(
                                    `${pathname}/${report.id}/${report.name}`
                                )
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ReportsHome
