import { React, useState } from 'react'
import { departmentsData } from '../../data'
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import { SourceSelectionComponents } from '../../components'

const ReportSourceSelection = () => {

    const handelCancel = () => {}

    const handelNext = () => {}

    return (
        <>
            <Grid container>
                <Grid
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ color: '#111827', fontWeight: 600, mb: 2 }}
                    >
                        Select Source
                    </Typography>

                    <SourceSelectionComponents
                        departmentsData={departmentsData}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: 2,
                            width: '100%',
                            mt: 4,
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                backgroundColor: '#D9D9D9',
                                color: 'black',
                                borderColor: '#D9D9D9',
                                height: '60px',
                                width: '150px',
                            }}
                            onClick={handelCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                height: '60px',
                                width: '150px',
                            }}
                            onClick={handelNext}
                        >
                            Next
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ReportSourceSelection
