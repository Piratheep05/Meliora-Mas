import React from 'react'
import * as muiIcons from '@mui/icons-material'

const DynamicMIcon = ({ icon, ...rest }) => {
    const IconComponent = muiIcons[icon]

    if (!IconComponent) {
        console.error(`Icon ${icon} does not exist`)
        return null
    }

    return <IconComponent {...rest} />
}

export default DynamicMIcon
