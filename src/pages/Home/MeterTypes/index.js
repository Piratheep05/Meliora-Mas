import React from 'react'
import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { MeterTypeCard } from '../../../components'
import { images } from '../../../constants'
import { useLocation, useNavigate, useParams } from 'react-router'

const meterTypes = [
    {
        id: 1,
        type: 'energy meters',
        label: 'Energy Meters',
        imgURL: images.energyMeter,
    },
    {
        id: 2,
        type: 'water meters',
        label: 'Water Meters',
        imgURL: images.waterMete,
    },
]

const MeterTypes = () => {
    const location = useLocation()
    const { pathname } = location
    const navigate = useNavigate()

    return (
        <>
            <Paper>
                <Box
                    sx={{
                        p: 4,
                        display: 'flex',
                        alignItems: 'center',
                        // justifyContent: 'space-between',
                        columnGap: 5,
                    }}
                >
                    <Typography variant="h5" fontWeight={600}>
                        {'Mas Intimates'}
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Grid container spacing={4} justifyContent={'center'}>
                        {meterTypes.map((meter, index) => (
                            <Grid item md={4} key={index}>
                                <MeterTypeCard
                                    title={meter.label}
                                    imgURL={meter.imgURL}
                                    onClick={() =>
                                        navigate(
                                            `${pathname}/${meter.type}`
                                        )
                                    }
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default MeterTypes
