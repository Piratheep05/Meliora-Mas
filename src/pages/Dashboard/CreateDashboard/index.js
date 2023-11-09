import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Divider,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { SourceSelectionComponents } from '../../../components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
    departmentsData,
    meterTypes,
    timeCriterias,
    syncMethods,
} from '../../../data'

const CreateDashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const [selectedValue, setSelectedValue] = useState({
        timeCriterial: null,
        rangeSelection: null,
        aggregation: null,
    })

    const dropdownChange = (e) => {
        setSelectedValue((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    // console.log('dropdowns', selectedValue)

    const isEdit = pathname.includes('edit')

    const chartDropdownLogic = () => {
        if (
            selectedValue?.timeCriterial == 'Time range' &&
            selectedValue?.aggregation
        ) {
            return [
                {
                    id: 1,
                    name: 'Column chart',
                },
                {
                    id: 2,
                    name: 'Stacked column chart',
                },
            ]
        } else if (
            selectedValue?.timeCriterial == 'Time range' &&
            !selectedValue?.aggregation
        ) {
            return [
                {
                    id: 1,
                    name: 'Column chart',
                },
                {
                    id: 2,
                    name: 'Line chart',
                },
                {
                    id: 3,
                    name: 'Stacked column chart',
                },
                {
                    id: 4,
                    name: 'Pie chart',
                },
            ]
        } else if (
            selectedValue?.timeCriterial == 'Period over period' &&
            selectedValue?.aggregation
        ) {
            return [
                {
                    id: 1,
                    name: 'Column chart',
                },
                {
                    id: 2,
                    name: 'Stacked column chart',
                },
            ]
        } else if (
            selectedValue?.timeCriterial == 'Period over period' &&
            !selectedValue?.aggregation
        ) {
            return [
                {
                    id: 1,
                    name: 'Line chart',
                },
                {
                    id: 2,
                    name: 'Column chart',
                },
            ]
        }
        // default
        return []
    }

    const energyParameters = [
        {
            id: 1,
            name: 'Current - Amperes of a',
        },
        {
            id: 2,
            name: 'Current - Amperes of b',
        },
        {
            id: 3,
            name: 'Current - Amperes of c',
        },
        {
            id: 4,
            name: 'Current - Current unbalance percentage',
        },
        {
            id: 5,
            name: 'Current - Average  current',
        },
        {
            id: 6,
            name: 'Current - Neutral current',
        },
    ]

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
                        {`${isEdit ? 'Edit Dashboard' : 'Create Dashboard'}`}
                    </Typography>
                </Box>
                <Divider />
                <Box p={4}>
                    <Box
                        component={'form'}
                        sx={{
                            width: '60ch',
                            mb: 3,
                        }}
                    >
                        <Stack spacing={2.5}>
                            <TextField
                                fullWidth
                                size="small"
                                id="title"
                                label="Title"
                            />
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="meterType"
                                label="Meter Type"
                            >
                                {meterTypes.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="parameter"
                                label="Parameter"
                            >
                                {energyParameters?.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="timeSyncMethod"
                                label="Time Sync Method"
                            >
                                {syncMethods.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="timeCriterial"
                                name="timeCriterial"
                                label="Time Criterial Selection"
                                value={selectedValue?.timeCriterial || null}
                                onChange={(e) => {
                                    setSelectedValue({
                                        rangeSelection: null,
                                        aggregation: null,
                                        timeCriterial: e.target.value,
                                    })
                                }}
                            >
                                {timeCriterias.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="rangeSelection"
                                name="rangeSelection"
                                label="Range Selection"
                                onChange={(e) => {
                                    setSelectedValue((prev) => {
                                        return {
                                            ...prev,
                                            aggregation: null,
                                            rangeSelection: e.target.value,
                                        }
                                    })
                                }}
                                value={selectedValue?.rangeSelection || null}
                            >
                                {timeCriterias
                                    ?.find(
                                        (d) =>
                                            d?.name ==
                                            selectedValue?.timeCriterial
                                    )
                                    ?.children?.map((option, index) => (
                                        <MenuItem
                                            key={option?.id}
                                            value={option?.name}
                                        >
                                            {option?.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="aggregation"
                                name="aggregation"
                                label="Select Aggregation"
                                onChange={(e) => dropdownChange(e)}
                                value={selectedValue?.aggregation || null}
                            >
                                {timeCriterias
                                    ?.find(
                                        (d) =>
                                            d?.name ==
                                            selectedValue?.timeCriterial
                                    )
                                    ?.children?.find(
                                        (f) =>
                                            f?.name ==
                                            selectedValue?.rangeSelection
                                    )
                                    ?.children?.map((option, index) => (
                                        <MenuItem
                                            key={option?.id}
                                            value={option?.name}
                                        >
                                            {option?.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="chartType"
                                label="Chart Type"
                            >
                                {chartDropdownLogic()?.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            mb: 3,
                        }}
                    >
                        <Typography variant="h6" fontWeight={500} mb={2}>
                            {`Select Source`}
                        </Typography>
                        <SourceSelectionComponents
                            departmentsData={departmentsData}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                ml: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: 2,
                            }}
                        >
                            <Button variant="outlined" color="error">
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color={`${isEdit ? 'success' : 'primary'}`}
                            >
                                {`${isEdit ? 'Update' : 'Save'}`}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default CreateDashboard
