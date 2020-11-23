import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { axiosBackend } from '../../../utils/axios/config'

import PartEditButton from '../../app/buttons/PartEditButton/PartEditButton'
import PartDeleteButton from '../../app/buttons/PartDeleteButton/PartDeleteButton'
import { getTableShouldUpdate } from '../../../utils/redux/selectors'
import { setTableShouldUpdate } from '../../../utils/redux/actions'

const URL = '/part/list'
const HEADERS = ['Артикул', 'Название детали', 'Тип детали']

const filterList = (list, filterFunc) => filterFunc ? list.filter(filterFunc) : list

const mapPartListToRows = (partList) => partList.map((part, i) =>
    [
        ..._.values(_.omit(part, 'partTypeId')),
        <PartEditButton key={i} part={part}/>,
        <PartDeleteButton key={i} part={part}/>
    ]
)

const getMaxCellsNumber = (partList) => partList.reduce((maxLength, part) => {
    const partPropsLength = _.values(part).length
    return partPropsLength > maxLength ? partPropsLength : maxLength
}, 0)

const mapToTableObj = (partList, filterFunc) => {

    const filteredList = filterList(partList, filterFunc)
    const rows = mapPartListToRows(filteredList)
    const maxCellsNumber = getMaxCellsNumber(rows)

    return ({
        headers: HEADERS,
        rows,
        maxCellsNumber
    })
}

function PartList(props) {

    const { children, filter, tableShouldUpdate, setTableShouldUpdate, ...otherProps } = props

    const [partList, setPartList] = useState([])

    useEffect(() => {
        if (tableShouldUpdate) {
            axiosBackend.get(URL)
                .then(({ data }) => {
                    setPartList(data)
                })
            setTableShouldUpdate(false)
        }
    }, [tableShouldUpdate])

    const partTableObj = mapToTableObj(partList, filter)
    console.log(partTableObj.rows.length)
    const component = partTableObj.rows.length ? React.cloneElement(children, { elements: partTableObj, ...otherProps }) : void 0

    return (
        <>{component}</>
    )
}

const mapStateToProps = state => ({
    tableShouldUpdate: getTableShouldUpdate(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setTableShouldUpdate
}, dispatch)

PartList.propTypes = {
    children: PropTypes.element.isRequired,
    filter: PropTypes.func,
    tableShouldUpdate: PropTypes.bool,
    setTableShouldUpdate: PropTypes.func
}

PartList.defaultProps = {
    filter: void 0
}

export default connect(mapStateToProps, mapDispatchToProps)(PartList)
