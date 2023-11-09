import React from 'react'
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    styled,
} from '@mui/material'
import { images } from '../../../constants'

const StyledTable = styled(Table)(({ theme }) => ({
    border: 'none',
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    border: 'none',
    padding: 5,
    verticalAlign: 'bottom',
}))

const TextBox = ({ colorType, label, value }) => {
    let bgcolor

    switch (colorType) {
        case 'blue':
            bgcolor = '#97BFFC'
            break
        case 'gray':
            bgcolor = '#DDDEE9'
            break
        case 'white':
            bgcolor = '#FFFFFF'
            break
        default:
            bgcolor = '#FFFFFF'
    }

    return (
        <>
            <Typography
                variant="subtitle2"
                component="div"
                sx={{
                    p: 0,
                    textAlign: 'center',
                }}
            >
                {label}
            </Typography>
            <Box
                sx={{
                    bgcolor: `${bgcolor}`,
                    borderRadius: 2,
                    p: 0.5,
                    textAlign: 'center',
                    border: 2,
                    borderColor: '#97BFFC',
                    mx: 'auto',
                    width: '75%',
                }}
            >
                {value} V bc
            </Box>
        </>
    )
}

const VoltsAmps = ({ voltsAmpsData }) => {
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
                    variant="h5"
                    sx={{
                        m: 2,
                        color: '#30312C',
                        fontWeight: 600,
                    }}
                >
                    Volts / Amps
                </Typography>
                <TableContainer
                    sx={{
                        backgroundImage: `url(${images.VoltsAmpsTableBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '70px 40px',
                        backgroundSize: '1050px 560px',
                        position: 'relative',
                        // Add responsive styles using media queries
                        '@media (max-width: 1720px)': {
                            backgroundPosition: '65px 40px',
                            backgroundSize: '1000px 575px',
                        },
                        '@media (max-width: 1200px)': {
                            backgroundPosition: '40px 50px',
                            backgroundSize: '610px 775px',
                        },
                        '@media (max-width: 1920px)': {
                            backgroundSize: '876px 575px',
                            backgroundPosition: '49px 42px',
                        },
                    }}
                >
                    <StyledTable
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                    >
                        <TableBody>
                            {/* va1 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va1a.label}
                                        value={voltsAmpsData.va1a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va1b.label}
                                        value={voltsAmpsData.va1b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va2 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va2a.label}
                                        value={voltsAmpsData.va2a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va3 */}
                            <TableRow>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va3a.label}
                                        value={voltsAmpsData.va3a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va3b.label}
                                        value={voltsAmpsData.va3b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va3c.label}
                                        value={voltsAmpsData.va3c.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va4 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va4a.label}
                                        value={voltsAmpsData.va4a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va4b.label}
                                        value={voltsAmpsData.va4b.value}
                                    />
                                </StyledTableCell>
                            </TableRow>
                            {/* va5 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va5a.label}
                                        value={voltsAmpsData.va5a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va5b.label}
                                        value={voltsAmpsData.va5b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va6 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va6a.label}
                                        value={voltsAmpsData.va6a.value}
                                    />
                                </StyledTableCell>
                            </TableRow>
                            {/* va7 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va7a.label}
                                        value={voltsAmpsData.va7a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va7b.label}
                                        value={voltsAmpsData.va7b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va7c.label}
                                        value={voltsAmpsData.va7c.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va8 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va8a.label}
                                        value={voltsAmpsData.va8a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va8b.label}
                                        value={voltsAmpsData.va8b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va8c.label}
                                        value={voltsAmpsData.va8c.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va8d.label}
                                        value={voltsAmpsData.va8d.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va8e.label}
                                        value={voltsAmpsData.va8e.value}
                                    />
                                </StyledTableCell>
                            </TableRow>
                            {/* va9 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="white"
                                        label={voltsAmpsData.va9a.label}
                                        value={voltsAmpsData.va9a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va9b.label}
                                        value={voltsAmpsData.va9b.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va10 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="gray"
                                        label={voltsAmpsData.va10a.label}
                                        value={voltsAmpsData.va10a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                            {/* va11 */}
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    <TextBox
                                        colorType="blue"
                                        label={voltsAmpsData.va11a.label}
                                        value={voltsAmpsData.va11a.value}
                                    />
                                </StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableBody>
                    </StyledTable>
                </TableContainer>
            </Box>
        </>
    )
}

export default VoltsAmps
