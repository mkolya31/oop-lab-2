import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Panel from '../panel/Panel'
import PartTable from '../part-table/PartTable'

const useStyles = makeStyles({
    mainContainer: {
        'min-height': 'calc(100vh - 34px)',
        'min-width': '100vw',
        'background': '#f1f1f1'
    },
})

function Body() {

    const classes = useStyles()

    return (
        <div className={classes.mainContainer}>
            <Panel />
            <PartTable />
        </div>
    )
}

export default Body
