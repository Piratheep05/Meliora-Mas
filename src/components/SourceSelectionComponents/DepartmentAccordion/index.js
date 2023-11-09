import { React, useState, useEffect } from 'react'
import {
    Box,
    Typography,
    Button,
    Divider,
    InputAdornment,
    TextField,
    Checkbox,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FactoryIcon from '@mui/icons-material/Factory'

const DepartmentAccordion = ({ departmentsData, setDepartmentData }) => {
    const [parentAccordionExpanded, setParentAccordionExpanded] = useState()
    const [childAccordionExpanded, setChildAccordionExpanded] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [departmentsDataToAccordions, setDepartmentsDataToAccordions] =
        useState(departmentsData)

    const handleParentAccordionExpanded = (panel) => (event, isExpanded) => {
        setParentAccordionExpanded(isExpanded ? panel : false)
    }

    const handleChildAccordionExpanded = (panel) => (event, isExpanded) => {
        setChildAccordionExpanded(isExpanded ? panel : false)
    }

    const filteredDepartments = departmentsDataToAccordions.filter(
        (department) =>
            department.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleDepartmentChange = (departmentId, event) => {
        const isChecked = event.target.checked

        setDepartmentsDataToAccordions((prevData) =>
            prevData.map((department) =>
                department.id === departmentId
                    ? {
                          ...department,
                          check: isChecked,
                          sites: department.sites.map((site) => ({
                              ...site,
                              check: isChecked,
                              device: site.device.map((device) => ({
                                  ...device,
                                  check: isChecked,
                              })),
                          })),
                      }
                    : department
            )
        )
    }

    const handleSiteChange = (departmentId, siteId, event) => {
        const isChecked = event.target.checked

        setDepartmentsDataToAccordions((prevData) =>
            prevData.map((department) =>
                department.id === departmentId
                    ? {
                          ...department,
                          sites: department.sites.map((site) =>
                              site.id === siteId
                                  ? {
                                        ...site,
                                        device: site.device.map((device) => ({
                                            ...device,
                                            check: isChecked,
                                        })),
                                        check: isChecked,
                                    }
                                  : site
                          ),
                          check: isChecked
                              ? department.sites.every((site) => site.check)
                              : false,
                      }
                    : department
            )
        )
    }

    const handleDeviceChange = (departmentId, siteId, deviceId, event) => {
        const isChecked = event.target.checked

        setDepartmentsDataToAccordions((prevData) =>
            prevData.map((department) =>
                department.id === departmentId
                    ? {
                          ...department,
                          sites: department.sites.map((site) =>
                              site.id === siteId
                                  ? {
                                        ...site,
                                        device: site.device.map((device) =>
                                            device.id === deviceId
                                                ? {
                                                      ...device,
                                                      check: isChecked,
                                                  }
                                                : device
                                        ),
                                        check: isChecked
                                            ? site.device.every(
                                                  (device) => device.check
                                              )
                                            : false,
                                    }
                                  : site
                          ),
                          check: isChecked
                              ? department.sites.every((site) => site.check)
                              : false,
                      }
                    : department
            )
        )
    }

    const handelAddEquation = () => {
        setDepartmentData(departmentsDataToAccordions)
    }

    useEffect(() => {
       setDepartmentsDataToAccordions(departmentsData)
    }, departmentsData)

    return (
        <>
            <TextField
                size="small"
                id="search"
                placeholder="Search"
                type="search"
                sx={{
                    width: '50%',
                    mb: 2,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Box sx={{ height: '350px', overflowY: 'auto' }}>
                {filteredDepartments.map((department) => (
                    <Accordion
                        elevation={0}
                        key={department.id}
                        expanded={parentAccordionExpanded === department.id}
                        onChange={handleParentAccordionExpanded(department.id)}
                        sx={{
                            mb: 1,
                            border: 1,
                            borderRadius: 1,
                            borderColor: 'grey.400',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: 1,
                                    gap: 2,
                                    color: '#4D4848',
                                }}
                            >
                                <FactoryIcon />
                                <Typography fontWeight={600}>
                                    {department.name}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{ p: 0, height: '350px', overflowY: 'auto' }}
                        >
                            <Divider />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    m: 2,
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={department.check}
                                            onChange={(event) =>
                                                handleDepartmentChange(
                                                    department.id,
                                                    event
                                                )
                                            }
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.primary.main,
                                                '&.Mui-checked': {
                                                    color: (theme) =>
                                                        theme.palette.primary
                                                            .main,
                                                },
                                            }}
                                        />
                                    }
                                    label="Select All"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.main,
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handelAddEquation}
                                >
                                    Add Equation
                                </Button>
                            </Box>
                            {department.sites.map((site) => (
                                <Accordion
                                    key={site.id}
                                    expanded={
                                        childAccordionExpanded === site.id
                                    }
                                    onChange={handleChildAccordionExpanded(
                                        site.id
                                    )}
                                    sx={{ m: 0 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flex: 1,
                                                gap: 2,
                                                color: '#4D4848',
                                            }}
                                        >
                                            <FactoryIcon />
                                            <Typography fontWeight={600}>
                                                {site.name}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider />
                                    <AccordionDetails>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={site.check}
                                                    onChange={(event) =>
                                                        handleSiteChange(
                                                            department.id,
                                                            site.id,
                                                            event
                                                        )
                                                    }
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette
                                                                .primary.main,
                                                        '&.Mui-checked': {
                                                            color: (theme) =>
                                                                theme.palette
                                                                    .primary
                                                                    .main,
                                                        },
                                                    }}
                                                />
                                            }
                                            label="Select All"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.primary.main,
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                ml: 20,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            {site.device.map((device) => (
                                                <FormControlLabel
                                                    key={device.id}
                                                    control={
                                                        <Checkbox
                                                            checked={
                                                                device.check
                                                            }
                                                            onChange={(event) =>
                                                                handleDeviceChange(
                                                                    department.id,
                                                                    site.id,
                                                                    device.id,
                                                                    event
                                                                )
                                                            }
                                                        />
                                                    }
                                                    label={device.name}
                                                />
                                            ))}
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </>
    )
}

export default DepartmentAccordion
