import { React, useState, useEffect } from 'react'
import { Box, Paper, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import DepartmentAccordion from './DepartmentAccordion'
import EquationArea from './EquationArea'

const SourceSelectionComponents = ({ departmentsData }) => {
    const [tabValue, setTabValue] = useState('Add')
    const [addChips, setAddChips] = useState(departmentsData)
    const [subtractChips, setSubtractChips] = useState(departmentsData)

    const handleTabValueChange = (event, tabValue) => {
        setTabValue(tabValue)
    }

    console.log('SourceSelectionComponents', addChips)

    return (
        <>
            <Box
                component={Paper}
                elevation={0}
                variant="outlined"
                sx={{
                    p: 2,
                    mb: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    maxHeight: '520px',
                    height: '520px',
                }}
            >
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleTabValueChange}
                            textColor="primary"
                            indicatorColor="primary"
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Add" value="Add" />
                            <Tab label="Subtract" value="Subtract" />
                        </TabList>
                    </Box>
                    <TabPanel value="Add">
                        <DepartmentAccordion
                            departmentsData={addChips}
                            setDepartmentData={setAddChips}
                        />
                    </TabPanel>
                    <TabPanel value="Subtract">
                        <DepartmentAccordion
                            departmentsData={subtractChips}
                            setDepartmentData={setSubtractChips}
                        />
                    </TabPanel>
                </TabContext>
            </Box>
            <EquationArea
                addChips={addChips}
                setAddChips={setAddChips}
                subtractChips={subtractChips}
                setSubtractChips={setSubtractChips}
            />
        </>
    )
}

export default SourceSelectionComponents
