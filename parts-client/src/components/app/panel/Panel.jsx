import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Drawer, makeStyles } from '@material-ui/core'

import PartTypeList from '../../data/part-type-list/PartTypeList'
import List from '../../ui/list/List'
import { setSelectedPartTypeId } from '../../../utils/redux/actions'

const useStyles = makeStyles({
    root: {
        width: '240px',
        'margin-top': '32px'
    }
})

function Panel(props) {

    const { setSelectedPartTypeId } = props
    const classes = useStyles()

    return (
        <Drawer
            classes={{ root: classes.root, paper: classes.root }}
            anchor="left"
            open={true}
            variant="persistent"
        >
            <PartTypeList>
                <List handleElementOnClick={setSelectedPartTypeId} />
            </PartTypeList>
        </Drawer>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setSelectedPartTypeId
}, dispatch)

Panel.propTypes = {
    setSelectedPartTypeId: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Panel)

