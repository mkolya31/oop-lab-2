import React from 'react'
import PropTypes from 'prop-types'
import {AppBar, Typography} from '@material-ui/core'

const Header = (props) => {

    const { title } = props

    return (
        <AppBar>
            <Typography variant="h6">
                { title }
            </Typography>
        </AppBar>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: ''
}

export default Header
