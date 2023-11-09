import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const PercentageCard = ({ PercentageCardData }) => {
    return (
        <>
            <Box
                component={Paper}
                sx={{
                    bgcolor: '#D9D9D9',
                    p: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 150,
                }}
            >
                <Typography
                    align="center"
                    sx={{ color: '#526477', fontSize: 16, fontWeight: 600 }}
                >
                    {PercentageCardData.label}
                </Typography>
                <Typography
                    align="center"
                    sx={{ color: '#092C4C', fontSize: 22, fontWeight: 600 }}
                >
                    {PercentageCardData.value}%
                </Typography>
            </Box>
        </>
    )
}

const PercentageList = ({ percentageList }) => {
    return (
        <>
            <Box
                sx={{
                    mb: 4,
                }}
            >
                <Typography
                    sx={{
                        fontSize: 20,
                        color: '#6E7191',
                        mb: 2,
                        fontWeight: 600,
                    }}
                >
                    {percentageList.title}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    {percentageList.data.map((data, index) => (
                        <PercentageCard
                            key={index}
                            PercentageCardData={data}
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}


const PowerEnergyTable = ({ tableData }) => {

    // Function to calculate the total for each column
    const calculateTotal = (columnName) => {
        let total = 0
        tableData.rowData.forEach((row) => {
            total += row[columnName] || 0
        })
        return total
    }

    return (
        <>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography
                    sx={{ fontSize: 24, color: '#30312C',fontWeight:600, }}
                >
                    {tableData.title}
                </Typography>

                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ background: '#DBEFF8' }}>
                                {tableData.columns.map((column, index) => (
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                        key={index}
                                    >
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.rowData.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {tableData.columns.map(
                                        (column, colIndex) => (
                                            <TableCell key={colIndex}>
                                                {row[column]}
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            ))}
                            {tableData.isTotal && (
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Total
                                    </TableCell>
                                    {tableData.columns
                                        .slice(1)
                                        .map((column, colIndex) => (
                                            <TableCell
                                                sx={{
                                                    fontWeight: 'bold',
                                                }}
                                                key={colIndex}
                                            >
                                                {calculateTotal(column)}
                                            </TableCell>
                                        ))}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

const PowerEnergy = ({
    powerEnergyData,
}) => {
    return (
        <>
            <Box
                component={Paper}
                sx={{
                    bgcolor: (theme) => theme.palette.grey[50],
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                }}
            >
                <Typography
                    sx={{
                        mt: 2,
                        ml: 2,
                        fontSize: 24,
                        color: '#30312C',
                        fontWeight: 600,
                    }}
                >
                    {powerEnergyData.title}
                </Typography>

                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <PercentageList
                        percentageList={powerEnergyData.percentageListA}
                    />
                    <PercentageList
                        percentageList={powerEnergyData.percentageListB}
                    />
                </Box>
                <PowerEnergyTable tableData={powerEnergyData.tableData} />
            </Box>
        </>
    )
}

export default PowerEnergy
