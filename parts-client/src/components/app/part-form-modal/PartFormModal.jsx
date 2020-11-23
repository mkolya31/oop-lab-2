import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Backdrop, makeStyles } from '@material-ui/core'

import PartForm from '../part-form/PartForm'

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        'margin-left': '240px'
    },
})

export function PartFormModal(props) {

    const { open, onClose, part, onSubmit } = props
    const classes = useStyles()

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <PartForm
                part={part}
                onSubmit={onSubmit}
            />
        </Modal>
    )
}

PartFormModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    part: PropTypes.object,
    onSubmit: PropTypes.func
}

PartFormModal.defaultProps = {
    part: {}
}

export default PartFormModal
