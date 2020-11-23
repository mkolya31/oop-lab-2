import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DeleteForever } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { axiosBackend } from '../../../../utils/axios/config'
import withTableUpdate from '../../../../hocs/withTableUpdate'

const URL = 'part/delete'

const useStyles = makeStyles({
    dialog: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        'margin-left': '240px'
    },
})

function PartDeleteButton(props) {

    const { part, setTableShouldUpdate } = props
    const [dialogOpen, setDialogOpen] = useState(false)
    const classes = useStyles()

    const handleDeleteButtonOnClick = (e) => {
        setDialogOpen(true)
    }

    const handleDialogOnClose = (isDeleteConfirmed) => async () => {
        setDialogOpen(false)

        if (!isDeleteConfirmed) {
            return void 0
        }

        await axiosBackend.post(URL, { ...part })
        setTableShouldUpdate(true)
    }

    return (
        <>
            <IconButton color="secondary" onClick={handleDeleteButtonOnClick}>
                <DeleteForever/>
            </IconButton>
            <Dialog
                className={classes.dialog}
                open={dialogOpen}
                onClose={handleDialogOnClose}
            >
                <DialogTitle>Удалить деталь</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы уверены что хотите удалить деталь с названием &quot;{part.partName}&quot;
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleDialogOnClose(true)}>Удалить</Button>
                    <Button onClick={handleDialogOnClose(false)}>Отмена</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

PartDeleteButton.propTypes = {
    part: PropTypes.shape({
        partId: PropTypes.number,
        partName: PropTypes.string
    }),
    setTableShouldUpdate: PropTypes.func
}

export default withTableUpdate(PartDeleteButton)
