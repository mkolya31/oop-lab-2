import React, { cloneElement, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { axiosBackend } from '../../../utils/axios/config'
import { setPartTypeList } from '../../../utils/redux/actions'

export function PartTypeList(props) {

    const { children, setPartTypeListToStore, ...otherProps } = props

    const [partTypeList, setPartTypeList] = useState([])

    useEffect(() => {
        axiosBackend.get('part-type/list')
            .then(({ data }) => {
                setPartTypeListToStore(data)
                const preparedPartTypeList = [{ name: 'Все детали' }, ...data.map(el => ({
                        ...el,
                        name: el.partTypeName,
                    })
                )]
                setPartTypeList(preparedPartTypeList)
            })
    }, [])

    return (
        <>{ cloneElement(children, { elements: partTypeList, ...otherProps }) }</>
    )
}

PartTypeList.propTypes = {
    children: PropTypes.element.isRequired,
    setPartTypeListToStore: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setPartTypeListToStore: setPartTypeList
}, dispatch)

export default connect(null, mapDispatchToProps)(PartTypeList)
