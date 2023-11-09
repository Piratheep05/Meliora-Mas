import React from 'react'
import { images } from '../../constants'
import { Box, Paper, Typography } from '@mui/material'

const DepartmentCard = ({ id, name, imageURL, onClick }) => {
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
                            width: 125,
                            display: 'grid',
                            borderRadius: 100,
                            overflow: 'hidden',
                            placeItems: 'center',
                            aspectRatio: '1 / 1',
                            border: '1px solid',
                            borderColor: '#D9D9D9',
                        }}
                    >
                        <img
                            src={imageURL}
                            alt={name}
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                    <Typography variant="h5" fontWeight={600}>
                        {name}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

// Set default props to component
DepartmentCard.defaultProps = {
    name: 'Title Here',
    imageURL: images.XdotOLogo,
}

export default DepartmentCard
