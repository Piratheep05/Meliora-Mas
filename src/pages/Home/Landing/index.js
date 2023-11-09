import React from 'react'
import { Grid } from '@mui/material'
import { departments } from '../../../data'
import { DepartmentCard } from '../../../components'
import { useLocation, useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    return (
        <>
            <Grid container spacing={4}>
                {departments.map((department, index) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        xl={3}
                        // xl={2.4}
                        key={`department_${index}`}
                    >
                        <DepartmentCard
                            id={department.id}
                            name={department.name}
                            imageURL={department.imageURL}
                            onClick={() =>
                                navigate(
                                    `/home/${department?.id}/${department?.name}`
                                )
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Landing
