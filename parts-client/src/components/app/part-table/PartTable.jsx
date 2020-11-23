import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import PartList from '../../data/part-list/PartList'
import Table from '../../ui/table/Table'
import { PartTableToolbar } from '../part-table-toolbar/PartTableToolbar'
import { getSelectedPartTypeId } from '../../../utils/redux/selectors'

const useStyles = makeStyles({
    tableContainer: {
        'margin': '0 0 0 240px',
        'display': 'flex',
        'justify-content': 'center'
    }
})

function PartTable(props) {

    const { selectedPartTypeId, tableShouldUpdate, setTableShouldUpdate } = props
    const classes = useStyles()

    if (tableShouldUpdate) {
        setTableShouldUpdate(false)
    }

    const filterByType = (part) => {
        if (selectedPartTypeId) {
            return part.partTypeId === selectedPartTypeId
        }

        return true
    }

    return (
        <div className={classes.tableContainer}>
            <PartList
                filter={filterByType}
                tableShouldUpdate={tableShouldUpdate}
            >
                <Table withToolbar={<PartTableToolbar />} />
            </PartList>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedPartTypeId: getSelectedPartTypeId(state),
})

PartTable.propTypes = {
    selectedPartTypeId: PropTypes.number,
    tableShouldUpdate: PropTypes.bool,
    setTableShouldUpdate: PropTypes.func
}

export default connect(mapStateToProps)(PartTable)
