import React, { useState } from 'react'
import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { images } from '../../../constants'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { Link } from 'react-router-dom'

const LoginForm = ({ credentials, onSuccess }) => {
    const [showPassword, setShowPassword] = useState(false)

    const [emailError, setemailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setemailError(false)
        setpasswordError(false)

        const data = new FormData(event.currentTarget)
        const userEmail = data.get('email')
        const userPassword = data.get('password')
        
        // console.log({
        //     userEmail,
        //     userPassword,
        // })

        if (
            userEmail === credentials.email &&
            userPassword === credentials.password
        ) {
            onSuccess(true)
        } else if (userEmail !== credentials.email) {
            setemailError((inValidMail) => !inValidMail)
        } else if (userPassword !== credentials.password) {
            setpasswordError((inValidPass) => !inValidPass)
        }
    }

    return (
        <>
            <Box maxWidth={440}>
                <img
                    src={images.customerLogo}
                    alt="customer logo"
                    loading="lazy"
                    width={200}
                    style={{
                        margin: '0 0 2rem',
                    }}
                />
                <Stack spacing={1.5} mb={4}>
                    <Typography variant="h4" fontWeight={600}>
                        Sign in
                    </Typography>
                    <Typography variant="body1">
                        Please login to access your account.
                    </Typography>
                </Stack>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        error={emailError}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        autoFocus
                        helperText={emailError ? 'invalid E-mail' : null}
                    />
                    <TextField
                        error={passwordError}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        helperText={passwordError ? 'Invalid Password' : null}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOffOutlinedIcon />
                                        ) : (
                                            <VisibilityOutlinedIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link to={'#'}>
                                <Typography
                                    color="primary"
                                    variant="body1"
                                    fontWeight={500}
                                >
                                    Forgot password?
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default LoginForm
