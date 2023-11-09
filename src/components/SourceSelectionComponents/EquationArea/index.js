import { React, useState } from 'react'
import { Box, Typography, Button, Chip } from '@mui/material'
import { Cancel as CancelIcon } from '@mui/icons-material'

const EquationArea = ({
    addChips,
    setAddChips,
    subtractChips,
    setSubtractChips,
}) => {
    console.log('EquationArea', addChips)

    const handleDeleteAddChip = (id, level, parentId) => {
        let updatedData
        if (level === 'department') {
            updatedData = addChips.map((department) =>
                department.id === id
                    ? {
                          ...department,
                          check: false,
                          sites: department.sites.map((site) => ({
                              ...site,
                              check: false,
                              device: site.device.map((device) => ({
                                  ...device,
                                  check: false,
                              })),
                          })),
                      }
                    : department
            )
        } else if (level === 'site') {
            updatedData = addChips.map((department) => {
                if (department.id === parentId) {
                    return {
                        ...department,
                        sites: department.sites.map((site) =>
                            site.id === id
                                ? {
                                      ...site,
                                      check: false,
                                      device: site.device.map((device) => ({
                                          ...device,
                                          check: false,
                                      })),
                                  }
                                : site
                        ),
                    }
                }
                return department
            })
        } else if (level === 'device') {
            updatedData = addChips.map((department) => {
                return {
                    ...department,
                    sites: department.sites.map((site) => {
                        if (site.id === parentId) {
                            return {
                                ...site,
                                device: site.device.map((device) =>
                                    device.id === id
                                        ? { ...device, check: false }
                                        : device
                                ),
                            }
                        }
                        return site
                    }),
                }
            })
        }
        setAddChips(updatedData)
    }

    const handleDeleteSubtractChip = (id, level, parentId) => {
        let updatedData
        if (level === 'department') {
            updatedData = subtractChips.map((department) =>
                department.id === id
                    ? {
                          ...department,
                          check: false,
                          sites: department.sites.map((site) => ({
                              ...site,
                              check: false,
                              device: site.device.map((device) => ({
                                  ...device,
                                  check: false,
                              })),
                          })),
                      }
                    : department
            )
        } else if (level === 'site') {
            updatedData = subtractChips.map((department) => {
                if (department.id === parentId) {
                    return {
                        ...department,
                        sites: department.sites.map((site) =>
                            site.id === id
                                ? {
                                      ...site,
                                      check: false,
                                      device: site.device.map((device) => ({
                                          ...device,
                                          check: false,
                                      })),
                                  }
                                : site
                        ),
                    }
                }
                return department
            })
        } else if (level === 'device') {
            updatedData = subtractChips.map((department) => {
                return {
                    ...department,
                    sites: department.sites.map((site) => {
                        if (site.id === parentId) {
                            return {
                                ...site,
                                device: site.device.map((device) =>
                                    device.id === id
                                        ? { ...device, check: false }
                                        : device
                                ),
                            }
                        }
                        return site
                    }),
                }
            })
        }
        setSubtractChips(updatedData)
    }

    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Typography variant="h6" fontWeight={500}>
                        Equations
                    </Typography>
                    <Button
                        variant="contained"
                        // onClick={handleEquationCreate}
                    >
                        Create Equation
                    </Button>
                </Box>
                <Box>
                    {/* <Typography
                        sx={{
                            color: '#111827',
                            fontWeight: 500,
                            fontSize: 16,
                        }}
                    >
                        Equation 1
                    </Typography> */}
                    <Box
                        sx={{
                            border: 1,
                            borderRadius: 1,
                            borderColor: 'grey.400',
                            p: 2,
                            minHeight: 65,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        {addChips.map((department) =>
                            department.check ? (
                                <Chip
                                    key={department.id}
                                    label={department.name}
                                    onDelete={() =>
                                        handleDeleteAddChip(
                                            department.id,
                                            'department'
                                        )
                                    }
                                    sx={{
                                        bgcolor: (theme) =>
                                            theme.palette.info.light,
                                        borderRadius: 1,
                                    }}
                                />
                            ) : (
                                department.sites.map((site) =>
                                    site.check ? (
                                        <Chip
                                            key={site.id}
                                            label={`${department.name} (${site.name})`}
                                            onDelete={() =>
                                                handleDeleteAddChip(
                                                    site.id,
                                                    'site',
                                                    department.id
                                                )
                                            }
                                            sx={{
                                                bgcolor: (theme) =>
                                                    theme.palette.info.light,
                                                borderRadius: 1,
                                            }}
                                        />
                                    ) : (
                                        site.device.map((device) =>
                                            device.check ? (
                                                <Chip
                                                    key={device.id}
                                                    label={`${department.name} (${site.name} (${device.name}))`}
                                                    onDelete={() =>
                                                        handleDeleteAddChip(
                                                            device.id,
                                                            'device',
                                                            site.id
                                                        )
                                                    }
                                                    sx={{
                                                        bgcolor: (theme) =>
                                                            theme.palette.info
                                                                .light,
                                                        borderRadius: 1,
                                                    }}
                                                />
                                            ) : null
                                        )
                                    )
                                )
                            )
                        )}

                        {subtractChips.map((department) =>
                            department.check ? (
                                <Chip
                                    key={department.id}
                                    label={department.name}
                                    onDelete={() =>
                                        handleDeleteSubtractChip(
                                            department.id,
                                            'department'
                                        )
                                    }
                                    sx={{
                                        bgcolor: (theme) =>
                                            theme.palette.error.light,
                                        borderRadius: 1,
                                    }}
                                />
                            ) : (
                                department.sites.map((site) =>
                                    site.check ? (
                                        <Chip
                                            key={site.id}
                                            label={`${department.name} (${site.name})`}
                                            onDelete={() =>
                                                handleDeleteSubtractChip(
                                                    site.id,
                                                    'site',
                                                    department.id
                                                )
                                            }
                                            sx={{
                                                bgcolor: (theme) =>
                                                    theme.palette.error.light,
                                                borderRadius: 1,
                                            }}
                                        />
                                    ) : (
                                        site.device.map((device) =>
                                            device.check ? (
                                                <Chip
                                                    key={device.id}
                                                    label={`${department.name} (${site.name} (${device.name}))`}
                                                    onDelete={() =>
                                                        handleDeleteSubtractChip(
                                                            device.id,
                                                            'device',
                                                            site.id
                                                        )
                                                    }
                                                    sx={{
                                                        bgcolor: (theme) =>
                                                            theme.palette.error
                                                                .light,
                                                        borderRadius: 1,
                                                    }}
                                                />
                                            ) : null
                                        )
                                    )
                                )
                            )
                        )}

                        {/* <CancelIcon
                            color="error"
                            sx={{
                                marginLeft: 'auto',
                                alignSelf: 'center',
                                cursor: 'pointer',
                            }}
                        /> */}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default EquationArea
