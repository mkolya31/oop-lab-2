import React from 'react'
import PropTypes, { element } from 'prop-types'
import { Table as MaterialUiTable } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: '80%',
        margin: '30px 15px'
    },
    headerCell: {
        'font-weight': 'bold'
    }
})

export default function Table(props) {

    const { elements, withToolbar: toolbar } = props
    const { headers, rows, maxCellsNumber } = elements
    const classes = useStyles()

    const rowsCount = rows.length

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsCount)
    // console.log(rows.length)
    // console.log(rowsCount)
    // console.log(rowsPerPage)

    const handleChangePage = (event, newPage) => setPage(newPage)

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const createRowsPerPageOptionsWithAll = (options) => [
        { label: 'Все', value: rows.length },
        ...options.filter(option => option !== rows.length)
    ]

    return (
        <TableContainer className={classes.table} component={Paper}>
            {toolbar ? toolbar : void 0}
            <MaterialUiTable>
                <TableHead>
                    <TableRow>
                        {headers.map((headName, i) => {
                            return (
                                <TableCell
                                    key={`table-head-cell-${i}`}
                                    colSpan={i + 1 === headers.length ? maxCellsNumber - i : 0}
                                    className={classes.headerCell}
                                >
                                    {headName}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow hover={true} key={`table-row-${i}`}>
                            {row.map((cellValue, j) => (
                                    <TableCell
                                        key={`table-cell-${i}:${j}`}
                                        align={typeof cellValue === 'string' || typeof cellValue === 'number' ? 'left' : 'right'}
                                    >
                                        {cellValue}
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </MaterialUiTable>
            <TablePagination
                rowsPerPageOptions={createRowsPerPageOptionsWithAll([5, 10, 25])}
                labelRowsPerPage="Деталей на странице"
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}

Table.propTypes = {
    elements: PropTypes.shape({
        headers: PropTypes.arrayOf(PropTypes.string).isRequired,
        rows: PropTypes.arrayOf(
            PropTypes.array
        ).isRequired,
        maxCellsNumber: PropTypes.number.isRequired
    }).isRequired,
    withToolbar: PropTypes.element
}

Table.defaultProps = {
    elements: {
        headers: [],
        rows: [],
        maxCellsNumber: 0
    }
}
