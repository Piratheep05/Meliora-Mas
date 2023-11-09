import React, { useState } from 'react'
import {
    Box,
    Divider,
    Grid,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { MeterCard } from '../../../components'
import { useLocation, useNavigate, useParams } from 'react-router'
import { eMeters, wMeters } from '../../../data'

const meterCount = [1, 2, 3, 4, 5, 6]

const parameterPayload = [
    {
        name: 'Parameter 1',
        value: '',
    },
    {
        name: 'Parameter 2',
        value: '',
    },
    {
        name: 'Parameter 3',
        value: '',
    },
    {
        name: 'Parameter 4',
        value: '',
    },
    {
        name: 'Parameter 5',
        value: '',
    },
]

const ViewMeters = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { meterType } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
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
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        textTransform={'capitalize'}
                    >
                        {decodeURIComponent(meterType)}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 3,
                            ml: 'auto',
                        }}
                    >
                        <TextField
                            size="small"
                            id="search"
                            placeholder="Search"
                            type="search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Grid container spacing={4}>
                        {decodeURIComponent(meterType) === 'energy meters' ? (
                            eMeters
                                .filter((item) =>
                                    item.label
                                        .toLowerCase()
                                        .includes(searchTerm)
                                )
                                .map((meter, index) => (
                                    <Grid item md={4} key={index}>
                                        <MeterCard
                                            title={meter.label}
                                            parameters={meter.parameters}
                                            onClick={() =>
                                                navigate(
                                                    `${pathname}/${meter.id}/${meter.label}`
                                                )
                                            }
                                        />
                                    </Grid>
                                ))
                        ) : decodeURIComponent(meterType) === 'water meters' ? (
                            wMeters
                                .filter((item) =>
                                    item.label
                                        .toLowerCase()
                                        .includes(searchTerm)
                                )
                                .map((meter, index) => (
                                    <Grid item md={4} key={index}>
                                        <MeterCard
                                            title={meter.label}
                                            parameters={meter.parameters}
                                            // onClick={() =>
                                            //     navigate(
                                            //         `${pathname}/${meter.id}/${meter.label}`
                                            //     )
                                            // }
                                        />
                                    </Grid>
                                ))
                        ) : (
                            <Grid item xs={12}>
                                {/* This message will be shown when meterType is neither 'energy meters' nor 'water meters' */}
                                No results found.
                            </Grid>
                        )}
                        {((decodeURIComponent(meterType) === 'energy meters' &&
                            eMeters.filter((item) =>
                                item.label.toLowerCase().includes(searchTerm)
                            ).length === 0) ||
                            (decodeURIComponent(meterType) === 'water meters' &&
                                wMeters.filter((item) =>
                                    item.label
                                        .toLowerCase()
                                        .includes(searchTerm)
                                ).length === 0)) && (
                            <Grid item xs={12}>
                                {/* This message will be shown when there are no matching items for the search term */}
                                No results found for the search term.
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default ViewMeters
