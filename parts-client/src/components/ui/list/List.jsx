import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { List as MaterialUiList, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    listRoot: {
        'margin-top': ({ marginTop }) => marginTop
    },
})

export default function List(props) {
    const { elements, handleElementOnClick } = props
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
    const classes = useStyles(props)

    const handleOnClick = (element, index) => {
        setSelectedItemIndex(index)
        handleElementOnClick(element)
    }

    return (
        <MaterialUiList
            className={classes.listRoot}
            component="nav"
        >
            {elements.map((element, i) => (
                <ListItem
                    button
                    selected={i === selectedItemIndex}
                    onClick={() => handleOnClick(element, i)}
                    key={i}
                >
                    <ListItemText primary={ _.upperFirst(element.name)} />
                </ListItem>
                )
            )}
        </MaterialUiList>
    )
}

List.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
    })).isRequired,
    handleElementOnClick: PropTypes.func,
    marginTop: PropTypes.string
}

List.defaultProps = {
    marginTop: '32px',
    handleElementOnClick: () => void 0,
    elements: []
}

