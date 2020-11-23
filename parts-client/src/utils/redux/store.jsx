import React from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { partsReducers } from './reducers'

export const store = createStore(partsReducers)

export default function PartsAppProvider(props) {
    const { children } = props

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

PartsAppProvider.propTypes = {
    children: PropTypes.element
}
