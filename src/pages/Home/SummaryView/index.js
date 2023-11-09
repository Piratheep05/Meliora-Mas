import React from 'react'
import {
    voltsAmpsData,
    currentLoadListA,
    currentLoadListB,
    powerQualityRowData,
    peakDemand,
    intervalDemand,
    energyDmnRowData,
} from '../../../data'
import { Grid, Box, Paper, Divider, Typography ,Button} from '@mui/material'
import { SummaryViewComponents } from '../../../components'
import { History } from '@mui/icons-material'
import { useLocation, useNavigate, useParams } from 'react-router'


const SummaryView = () => {
    const { meterName } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const title = decodeURIComponent(meterName)

    const powerQualityData = {
        title: 'Power Quality',
        percentageListA: {
            title: 'Current%Load',
            data: currentLoadListA,
        },
        percentageListB: {
            title: 'Current%Load',
            data: currentLoadListB,
        },
        tableData: {
            title: 'Power Quality',
            columns: ['Title', 'kW', 'kVA', 'kVAR'],
            rowData: powerQualityRowData,
            isTotal: true,
        },
    }

    const EnergyDmnData = {
        title: 'Energy & Dmn',
        percentageListA: {
            title: 'Peak Demand',
            data: peakDemand,
        },
        percentageListB: {
            title: 'Interval Demand',
            data: intervalDemand,
        },
        tableData: {
            title: 'Energy',
            columns: ['Title', 'kW', 'kVA', 'kVAR', 'kVAR'],
            rowData: energyDmnRowData,
            isTotal: false,
        },
    }

    return (
        <>
            <Grid container>
                <Grid
                    xs={12}
                    component={Paper}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        aspectRatio: '1 / 1',
                        borderRadius: 2,
                    }}
                >
                    <Box
                        sx={{
                            m: 4,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ color: '#111827', fontWeight: 600 }}
                        >
                            {title}
                        </Typography>
                        <Button
                            sx={{
                                bgcolor: '#4C70FF',
                                color: '#FFFFFF',
                                marginLeft: 'auto',
                            }}
                            variant="contained"
                            startIcon={<History />}
                            onClick={() =>
                                navigate(
                                    `${pathname}/history`
                                )
                            }
                        >
                            History
                        </Button>
                    </Box>
                    <Divider />
                    <Box sx={{ m: 4 }}>
                        <SummaryViewComponents.VoltsAmps
                            voltsAmpsData={voltsAmpsData}
                        />
                    </Box>
                    <Box sx={{ m: 4 }}>
                        <SummaryViewComponents.PowerEnergy
                            powerEnergyData={powerQualityData}
                        />
                    </Box>
                    <Box sx={{ m: 4 }}>
                        <SummaryViewComponents.PowerEnergy
                            powerEnergyData={EnergyDmnData}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SummaryView
