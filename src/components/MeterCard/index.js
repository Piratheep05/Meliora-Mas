import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const MeterCard = ({ title, parameters, onClick }) => {
    return (
        <>
            <Box
                component={Paper}
                variant="outlined"
                sx={{
                    p: 3.5,
                    backgroundColor: (theme) => theme.palette.grey[50],
                    borderRadius: 2,
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                <Typography variant="h5" fontWeight={600} mb={2}>
                    {title}
                </Typography>
                {parameters !== null ? (
                    <Stack spacing={1}>
                        {parameters?.map((parameter, index) => (
                            <Typography variant="body1" key={index}>
                                {`${parameter?.label} : ${parameter?.value}`}
                            </Typography>
                        ))}
                    </Stack>
                ) : (
                    'No Data to Show'
                )}
            </Box>
        </>
    )
}

// Set default props to component
MeterCard.defaultProps = {
    title: 'Title Here',
    parameters: null,
}

export default MeterCard
