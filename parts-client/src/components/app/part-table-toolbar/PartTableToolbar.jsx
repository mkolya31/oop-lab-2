import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Toolbar, Tooltip, Typography, makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import PartAddButton from '../buttons/PartAddButton/PartAddButton'

const useStyles = makeStyles((theme) => ({
    addPartIcon: {
        color: 'green',
        fontSize: 30
    }
}))

export function PartTableToolbar() {

    const classes = useStyles()

    return (
        <Toolbar>
            <Typography variant="h6">
                Детали
            </Typography>
            <Tooltip title="Добавить деталь">
                <PartAddButton />
            </Tooltip>
        </Toolbar>
    )
}
