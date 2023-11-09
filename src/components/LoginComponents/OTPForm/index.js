import React, { useState } from 'react'
import { Box, Button, FormHelperText, Stack, Typography } from '@mui/material'
import { images } from '../../../constants'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MuiOtpInput } from 'mui-one-time-password-input'

const OTPForm = ({ credentials, onSuccess }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const [otp, setOtp] = useState('')

    const [validOTP, setValidOTP] = useState(false)
    const [invalidOTP, setInvalidOTP] = useState(false)

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (otp != credentials) {
            // console.log('OTP doesnt match')
            setInvalidOTP(true)
            setValidOTP(false)
        } else {
            // console.log('OTP match')
            setInvalidOTP(false)
            setValidOTP(true)
            setTimeout(() => {
                navigate(`/home`)
            }, 1000)
        }
    }

    const getBorderColor = (theme) => {
        if (invalidOTP) {
            return theme.palette.error.main
        } else if (validOTP) {
            return theme.palette.success.main
        } else {
            return null
        }
    }

    return (
        <>
            <Stack maxWidth={440} alignItems={'center'} spacing={3}>
                <Typography variant="h4" fontWeight={600}>
                    OTP Verification
                </Typography>
                <img
                    src={images.OTPHeader}
                    alt="OTP icon"
                    loading="lazy"
                    width={88}
                />
                <Typography
                    variant="body1"
                    component={'div'}
                    textAlign={'center'}
                >
                    Enter the verification code we sent to
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        color={'primary'}
                    >
                        Your Account
                    </Typography>
                </Typography>

                <>
                    <MuiOtpInput
                        value={otp}
                        length={5}
                        autoFocus
                        onChange={handleChange}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                width: '4rem',
                                height: '4rem',
                                borderRadius: 2,
                                '& fieldset': {
                                    borderColor: (theme) =>
                                        getBorderColor(theme),
                                },
                            },
                        }}
                    />
                    {invalidOTP && (
                        <Typography
                            color={'error'}
                            variant="body1"
                            fontWeight={500}
                        >
                            Invalid OTP. Please try again.
                        </Typography>
                    )}
                </>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Confirm
                </Button>

                <Typography variant="body1" fontWeight={500}>
                    Didn’t gate the code?&nbsp;
                    <Link to={'#'}>
                        <Typography
                            component={'span'}
                            variant="body1"
                            color={'primary'}
                            fontWeight={500}
                        >
                            Resend
                        </Typography>
                    </Link>
                </Typography>
            </Stack>
        </>
    )
}

export default OTPForm
