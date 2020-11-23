import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import PartFormModal from '../../part-form-modal/PartFormModal'
import { axiosBackend } from '../../../../utils/axios/config'
import withTableUpdate from '../../../../hocs/withTableUpdate'

const useStyles = makeStyles((theme) => ({
    addPartIcon: {
        color: 'green',
        fontSize: 30
    }
}))

const URL = '/part/add'

const addPart = (part) => axiosBackend.post(URL, { ...part })

function PartAddButton(props) {

    const { setTableShouldUpdate } = props
    const classes = useStyles()
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleEditButtonOnClick = () => {
        setModalIsOpen(true)
    }

    const handleModalOnClose = (e) => {

        if (submitting) {
            return
        }

        return setModalIsOpen(false)
    }

    const handleSubmit = async (values) => {
        setSubmitting(true)
        await addPart(values)
        setTableShouldUpdate(true)
        setSubmitting(false)
        handleModalOnClose()
    }

    return (
        <>
            <IconButton color="primary" onClick={handleEditButtonOnClick}>
                <Add className={classes.addPartIcon} />
            </IconButton>
            <PartFormModal
                open={isModalOpen}
                onClose={handleModalOnClose}
                onSubmit={handleSubmit}
            />
        </>
    )
}

PartAddButton.propTypes = {
    setTableShouldUpdate: PropTypes.func
}

export default withTableUpdate(PartAddButton)
