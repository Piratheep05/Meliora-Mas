import React, { useState } from 'react'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import DownloadIcon from '@mui/icons-material/Download'
import { Charts } from '../../../components'
import { historyCharts } from '../../../data'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const History = () => {
    const { meterName } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)

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
                        {meterName}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 3,
                            ml: 'auto',
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: 1,
                                }}
                            >
                                <DatePicker
                                    label="Start Date"
                                    value={fromDate}
                                    onChange={(newValue) =>
                                        setFromDate(newValue)
                                    }
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                                {'-'}
                                <DatePicker
                                    label="End Date"
                                    value={toDate}
                                    onChange={(newValue) => setToDate(newValue)}
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                            </Box>
                        </LocalizationProvider>
                        <Button
                            color="success"
                            variant="contained"
                            startIcon={<DownloadIcon />}
                        >
                            Download CSV
                        </Button>
                    </Box>
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
                    {historyCharts.map((item, index) => (
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

export default History
