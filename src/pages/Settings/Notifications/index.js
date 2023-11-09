import {
    Box,
    Button,
    Divider,
    IconButton,
    MenuItem,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DynamicMIcon } from '../../../components'

function createData(name, parameter, value, act) {
    return { name, parameter, value, act }
}

const rows = [
    createData('Notification 1', 'Parameter 1', 'Value 1', 'actions'),
    createData('Notification 2', 'Parameter 2', 'Value 2', 'actions'),
    createData('Notification 3', 'Parameter 3', 'Value 3', 'actions'),
]

const Notifications = () => {
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
                        columnGap: 5,
                    }}
                >
                    <Typography variant="h5" fontWeight={600}>
                        {`Notification Settings`}
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            mb: 4,
                            width: '60ch',
                        }}
                    >
                        <Stack spacing={2.5}>
                            <TextField
                                fullWidth
                                size="small"
                                id="name"
                                label="Name"
                            />
                            <TextField
                                select
                                fullWidth
                                size="small"
                                id="parameter"
                                label="Parameter"
                            >
                                {[
                                    'Parameter 1',
                                    'Parameter 2',
                                    'Parameter 3',
                                    'Parameter 4',
                                    'Parameter 5',
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
                                id="threshold"
                                label="Threshold"
                            >
                                {[
                                    'Value 1',
                                    'Value 2',
                                    'Value 3',
                                    'Value 4',
                                    'Value 5',
                                ].map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            mb: 4,
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
                            <Button variant="contained">{'Save'}</Button>
                        </Box>
                    </Box>
                    {/* tabel */}
                    <TableContainer component={Paper}>
                        <Table
                            // sx={{ minWidth: 650 }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">
                                        Parameter
                                    </TableCell>
                                    <TableCell align="right">Value</TableCell>
                                    <TableCell align="right"></TableCell>
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
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.parameter}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.value}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    columnGap: 2,
                                                }}
                                            >
                                                <IconButton aria-label="edit">
                                                    <DynamicMIcon
                                                        icon={'Edit'}
                                                    />
                                                </IconButton>
                                                <IconButton aria-label="delete">
                                                    <DynamicMIcon
                                                        icon={'Delete'}
                                                    />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </>
    )
}

export default Notifications
