import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'

import { setTableShouldUpdate } from '../utils/redux/actions'

const withTableUpdate = (Component) => (props) => {

    const { setTableShouldUpdate, ...componentProps } = props

    return (
        <Component
            {...componentProps}
            setTableShouldUpdate={setTableShouldUpdate}
        />
    )
}

withTableUpdate.propTypes = {
    setTableShouldUpdate: PropTypes.func
}

withTableUpdate.displayName = 'withTableUpdate'

const mapDispatchToProps = dispatch => bindActionCreators({
    setTableShouldUpdate
}, dispatch)

export default compose(connect(null, mapDispatchToProps), withTableUpdate)
