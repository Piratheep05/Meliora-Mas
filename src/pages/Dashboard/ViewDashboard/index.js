import React from 'react'
import { Box, Divider, Paper, Typography } from '@mui/material'
import { dashboardCharts } from '../../../data'
import { Charts } from '../../../components'
import { useLocation, useNavigate, useParams } from 'react-router'

const ViewDashboard = () => {
    const { dashboardName } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const title = decodeURIComponent(dashboardName)

    return (
        <>
            <Paper>
                <Box
                    sx={{
                        p: 4,
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: 5,
                    }}
                >
                    <Typography variant="h5" fontWeight={600}>
                        {title}
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 4,
                    }}
                >
                    {dashboardCharts.map((item, index) => (
                        <Paper
                            key={`history_chart_${index}`}
                            variant="outlined"
                            sx={{
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: 4,
                                alignItems: 'center',
                                borderRadius: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.grey[50],
                            }}
                        >
                            <Charts.LineChart
                                title={item.name}
                                titleAlign={'center'}
                                titleSize={24}
                                chartHeight={400}
                                xAxisData={item.xAxisLabels}
                                seriesData={item.seriesData}
                            />
                        </Paper>
                    ))}
                </Box>
            </Paper>
        </>
    )
}

export default ViewDashboard
