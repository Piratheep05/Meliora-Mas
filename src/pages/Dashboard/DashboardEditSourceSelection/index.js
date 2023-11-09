import { React, useState } from 'react'
import { departmentsData, chartTypes } from '../../data'
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

const DashboardEditSourceSelection = () => {
    const [chartType, setChartType] = useState()

    const handleChartTypeChange = (event, chartType) => {
        setChartType(chartType)
    }

    const handelCancel = () => {}

    const handelFinish = () => {}

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
                            mt: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#111827',
                                fontWeight: 600,
                                mt: 2,
                                mb: 2,
                                fontSize: 20,
                            }}
                        >
                            The Chart Type
                        </Typography>

                        <FormControl fullWidth size="small">
                            <InputLabel id="chart-type-select-label">
                                Select The Chart Type
                            </InputLabel>
                            <Select
                                labelId="chart-type-select-label"
                                id="chart-type-select"
                                value={chartType}
                                label="Select The Chart Type"
                                onChange={handleChartTypeChange}
                            >
                                {chartTypes.map((chartType, index) => (
                                    <MenuItem key={index} value={chartType}>
                                        {chartType}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
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
                            onClick={handelFinish}
                        >
                            Update
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardEditSourceSelection
