import React from 'react'
import {
    Autocomplete,
    Box,
    Button,
    Divider,
    IconButton,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { DynamicMIcon } from '../../../components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const emailList = [
    {
        id: 1,
        label: 'memugo@tustinro.nixxxx',
    },
    {
        id: 2,
        label: 'ina@supipok.tvxxxx',
    },
    {
        id: 3,
        label: 'jokmejmal@jihjir.inxxxx',
    },
    {
        id: 4,
        label: 'go@romogupij.kgxxxx',
    },
    {
        id: 5,
        label: 'funvudan@arudip.pkxxxx',
    },
    {
        id: 6,
        label: 'zuctiv@daguc.msxxxx',
    },
]

const addedEmails = [
    {
        id: 1,
        email: 'rohnurdo@giob.vuxxxx',
    },
    {
        id: 2,
        email: 'dej@pezin.hmxxxx',
    },
    {
        id: 3,
        email: 'ovzo@marnotacu.shxxxx',
    },
    {
        id: 4,
        email: 'telje@ku.frxxxx',
    },
]

const intervals = [
    {
        id: 1,
        label: '60s',
        value: 60000,
    },
    {
        id: 2,
        label: '5min',
        value: 350000,
    },
    {
        id: 3,
        label: '30min',
        value: 1800000,
    },
    {
        id: 4,
        label: '1h',
        value: 3600000,
    },
]

const Subscription = () => {
    const { reportId, reportName } = useParams()
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
                        {`${reportName} - Subscription Settings`}
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
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 1.5,
                        }}
                    >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={emailList}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search Email"
                                    size="small"
                                />
                            )}
                        />
                        <Button variant="contained">{'Add Email'}</Button>
                    </Box>
                    <Box
                        component={Paper}
                        variant="outlined"
                        elevation={0}
                        sx={{
                            p: 3,
                            mb: 4,
                            height: '40vh',
                            maxHeight: '40vh',
                            overflow: 'hidden',
                            overflowY: 'auto',
                        }}
                    >
                        <Stack spacing={2} mb={2}>
                            {addedEmails.map((email, index) => (
                                <Paper
                                    key={email?.id}
                                    sx={{
                                        py: 1,
                                        px: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: 2,
                                        }}
                                    >
                                        <DynamicMIcon icon="MailOutline" />
                                        <Typography variant="body1">
                                            {email?.email}
                                        </Typography>
                                    </Box>
                                    <IconButton
                                        size="small"
                                        sx={{
                                            ml: 'auto',
                                        }}
                                    >
                                        <DynamicMIcon
                                            icon={'Cancel'}
                                            fontSize="small"
                                        />
                                    </IconButton>
                                </Paper>
                            ))}
                        </Stack>
                    </Box>
                    <TextField
                        id=""
                        select
                        label="Notification Interval"
                        size="small"
                        sx={{
                            mb: 4,
                            width: '30ch',
                        }}
                    >
                        {intervals.map((interval) => (
                            <MenuItem
                                key={interval?.id}
                                value={interval?.value}
                            >
                                {interval?.label}
                            </MenuItem>
                        ))}
                    </TextField>
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
                </Box>
            </Paper>
        </>
    )
}

export default Subscription
