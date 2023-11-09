import React, { useState } from 'react'
import {
    Box,
    Button,
    Divider,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import {
    SourceSelectionComponents,
    TimeZoneSelectAutocomplete,
} from '../../../components'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { useLocation, useNavigate } from 'react-router-dom'
import { departmentsData, meterTypes, syncMethods } from '../../../data'

function createData(name, value1, value2, value3, value4, value5, value6) {
    return { name, value1, value2, value3, value4, value5, value6 }
}

const rows = [
    createData('Normal ( Rs )', 11.0, 0.0, 0.0, 0.0, 0.0, 1000.0),
    createData('Peak ( Rs )', 22.0, 0.0, 0.0, 0.0, 0.0, 1000.0),
    createData('Off Peak ( Rs )', 7.0, 0.0, 0.0, 0.0, 0.0, 1000.0),
]

const CreateReport = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const isEdit = pathname.includes('edit')

    const [selectedMeterType, setSelectedMeterType] = useState('')
    const [selectedRange, setSelectedRange] = useState('')

    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)

    const handleTimeZoneChange = (newValue) => {
        setSelectedTimeZone(newValue)
    }

    const timeRanges = [
        {
            id: 1,
            name: 'Range 1',
        },
        {
            id: 2,
            name: 'Range 2',
        },
        {
            id: 3,
            name: 'Shift',
        },
    ]

    const energyParameters = [
        {
            id: 1,
            name: 'Current - Amperes of a'
        },
        {
            id: 2,
            name: 'Current - Amperes of b'
        },
        {
            id: 3,
            name: 'Current - Amperes of c'
        },
        {
            id: 4,
            name: 'Current - Current unbalance percentage'
        },
        {
            id: 5,
            name: 'Current - Average  current'
        },
        {
            id: 6,
            name: 'Current - Neutral current'
        },
    ]

    // console.log('time zone ',selectedTimeZone)
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
                        {`${isEdit ? 'Edit Report' : 'Create Report'}`}
                    </Typography>
                </Box>
                <Divider />
                <Box p={4}>
                    <Box
                        component={'form'}
                        sx={{
                            mb: 3,
                            width: '60ch',
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
                                id="reportType"
                                label="Report Type"
                            >
                                {[
                                    'Report Type 1',
                                    'Report Type 2',
                                    'Report Type 3',
                                    'Report Type 4',
                                ].map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="meterType"
                                label="Meter Type"
                                onChange={(e) =>
                                    setSelectedMeterType(e.target.value)
                                }
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
                                id="timeRange"
                                label="Time Range"
                                onChange={(e) =>
                                    setSelectedRange(e.target.value)
                                }
                            >
                                {timeRanges?.map((option, index) => (
                                    <MenuItem
                                        key={option?.id}
                                        value={option?.name}
                                    >
                                        {option?.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {selectedRange == 'Shift' && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: 3,
                                        ml: 'auto',
                                    }}
                                >
                                    <LocalizationProvider
                                        dateAdapter={AdapterMoment}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                columnGap: 2.5,
                                            }}
                                        >
                                            <Box flex={1}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={fromDate}
                                                    onChange={(newValue) =>
                                                        setFromDate(newValue)
                                                    }
                                                    slotProps={{
                                                        textField: {
                                                            size: 'small',
                                                            fullWidth: true,
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <Box flex={1}>
                                                <TimePicker
                                                    label="End Time"
                                                    value={toDate}
                                                    onChange={(newValue) =>
                                                        setToDate(newValue)
                                                    }
                                                    slotProps={{
                                                        textField: {
                                                            size: 'small',
                                                            fullWidth: true,
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </LocalizationProvider>
                                </Box>
                            )}
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="reportingPeriod"
                                label="Reporting Period"
                            >
                                {[
                                    'Parameter 1',
                                    'Parameter 2',
                                    'Parameter 3',
                                    'Parameter 4',
                                ].map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="rollUp"
                                label="Roll Up"
                            >
                                {[
                                    'Parameter 1',
                                    'Parameter 2',
                                    'Parameter 3',
                                    'Parameter 4',
                                ].map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Box>
                    {selectedMeterType === 'Energy Meter' && (
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
                    )}
                    <Box>
                        {selectedMeterType === 'Energy Meter' ? (
                            <>
                                <Typography
                                    variant="h6"
                                    fontWeight={500}
                                    mb={2}
                                >
                                    {`Tariff Selection`}
                                </Typography>
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    id="touSchedule"
                                    label="TOU Schedule"
                                    sx={{
                                        mb: 3,
                                        width: '60ch',
                                    }}
                                >
                                    {['Sri Lanka', 'India'].map(
                                        (option, index) => (
                                            <MenuItem
                                                key={index}
                                                value={option}
                                            >
                                                {option}
                                            </MenuItem>
                                        )
                                    )}
                                </TextField>
                                {/* tabel */}
                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        mb: 4,
                                    }}
                                >
                                    <Table
                                        // sx={{ minWidth: 650 }}
                                        aria-label="simple table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell align="right">
                                                    Kwh
                                                </TableCell>
                                                <TableCell align="right">
                                                    Kva
                                                </TableCell>
                                                <TableCell align="right">
                                                    KVAh
                                                </TableCell>
                                                <TableCell align="right">
                                                    KW
                                                </TableCell>
                                                <TableCell align="right">
                                                    KVAR
                                                </TableCell>
                                                <TableCell align="right">
                                                    KVA
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{
                                                        '&:last-child td, &:last-child th':
                                                            { border: 0 },
                                                    }}
                                                >
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value1}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value2}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value3}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value4}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value5}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.value6}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        ) : selectedMeterType === 'Water Meter' ? (
                            <>
                                <Typography
                                    variant="h6"
                                    fontWeight={500}
                                    mb={2}
                                >
                                    {`Tariff Selection`}
                                </Typography>
                                <Stack spacing={2.5} mb={4}>
                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        id="tariffType"
                                        label="Tariff Type"
                                        sx={{
                                            width: '60ch',
                                        }}
                                    >
                                        {['Sri Lanka', 'India'].map(
                                            (option, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={option}
                                                >
                                                    {option}
                                                </MenuItem>
                                            )
                                        )}
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        size="small"
                                        id="setRate"
                                        label="Set Rate"
                                        sx={{
                                            width: '60ch',
                                        }}
                                    />
                                </Stack>
                            </>
                        ) : null}
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

export default CreateReport
