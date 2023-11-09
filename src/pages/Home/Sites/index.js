import React from 'react'
import { Grid } from '@mui/material'
import { sites } from '../../../data'
import { SiteCard } from '../../../components'
import { useLocation, useNavigate, useParams } from 'react-router'

const Sites = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    
    return (
        <>
           <Grid container spacing={4}>
                {sites.map((site, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                        key={`department_${index}`}
                    >
                        <SiteCard
                            id={site.id}
                            name={site.name}
                            icon={site.icon}
                            onClick={() =>
                                navigate(
                                    `${pathname}/${site.id}/${site.name}`
                                )
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Sites
