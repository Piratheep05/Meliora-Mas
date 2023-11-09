import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { images } from '../../constants'
import EastIcon from '@mui/icons-material/East'

const MeterTypeCard = ({ title, imgURL, onClick }) => {
    return (
        <>
            <Box
                component={Paper}
                sx={{
                    p: 3.5,
                }}
            >
                <img
                    src={imgURL}
                    alt={title}
                    width={'100%'}
                    loading="lazy"
                    style={{
                        margin: '0 0 1.5rem',
                    }}
                />
                <Typography variant="h4" fontWeight={600} mb={4}>
                    {title}
                </Typography>
                <Button size="large" variant="contained" endIcon={<EastIcon />} onClick={onClick}>
                    Continue
                </Button>
            </Box>
        </>
    )
}

// Set default props to component
MeterTypeCard.defaultProps = {
    title: 'Title Here',
    imgURL: images.XdotOLogo,
}

export default MeterTypeCard
