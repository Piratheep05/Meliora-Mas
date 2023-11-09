import React, { useEffect, useState } from 'react'
import { Box, CssBaseline, Grid, Paper } from '@mui/material'
import { images } from '../../constants'
import { LoginComponents } from '../../components'
import { loginCredential } from '../../data'

const Login = () => {
    const [validCredential, setValidCredential] = useState(false)
    const [sendOTP, setSendOTP] = useState(false)

    // console.log('validCredential', validCredential)
    // console.log('OTPSent', sendOTP)

    useEffect(() => {
        if (validCredential) {
            setSendOTP(true)
        } else {
            setSendOTP(false)
        }
    }, [validCredential])

    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${images.loginBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            py: 8,
                            px: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        {validCredential && sendOTP ? (
                            <LoginComponents.OTPForm
                                credentials={loginCredential.otpCode}
                            />
                        ) : (
                            <LoginComponents.LoginForm
                                credentials={loginCredential.emailPassword}
                                onSuccess={setValidCredential}
                            />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
