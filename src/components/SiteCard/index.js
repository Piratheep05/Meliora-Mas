import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const SiteCard = ({ id, name, icon, onClick }) => {
    const handleClick = () => {
        console.log('You clicked on ', name)
    }

    return (
        <>
            <Box
                onClick={onClick}
                component={Paper}
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // maxWidth: 200,
                    aspectRatio: '1 / 1',
                    cursor: 'pointer',
                }}
            >
                <Box
                    sx={{
                        gap: 2,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            p: 1,
                            width: 48,
                            display: 'grid',
                            borderRadius: 100,
                            overflow: 'hidden',
                            placeItems: 'center',
                            aspectRatio: '1 / 1',
                            // border: '1px solid',
                            // borderColor: '#D9D9D9',
                            backgroundColor: 'rgba(192,191,248, .55)',
                        }}
                    >
                        <LanguageIcon />
                    </Box>
                    <Typography variant="h5" fontWeight={600} align="center">
                        {name}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

// Set default props to component
SiteCard.defaultProps = {
    name: 'Title Here',
}

export default SiteCard
