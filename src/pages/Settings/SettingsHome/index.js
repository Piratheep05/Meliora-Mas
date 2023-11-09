import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { DynamicMIcon } from '../../../components'
import { setting } from '../../../data'
import { useLocation, useNavigate } from 'react-router-dom'

const SettingsHome = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    return (
        <>
            <Stack spacing={2.5}>
                {setting.map((item, index) => (
                    <Box
                        key={`setting_${item?.id}`}
                        component={Paper}
                        elevation={0}
                        variant="outlined"
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate(`${pathname}/${item?.Path}`)}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: 1.5,
                            }}
                        >
                            <DynamicMIcon icon={item?.icon} />
                            <Typography variant="h6">{item?.label}</Typography>
                        </Box>
                        <Box mr={2}>
                            <DynamicMIcon icon={'ArrowForwardIos'} />
                        </Box>
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default SettingsHome
