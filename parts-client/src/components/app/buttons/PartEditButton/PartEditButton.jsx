import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'

import PartFormModal from '../../part-form-modal/PartFormModal'
import { axiosBackend } from '../../../../utils/axios/config'
import withTableUpdate from '../../../../hocs/withTableUpdate'

export function PartEditButton(props) {

    const { part, setTableShouldUpdate } = props
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
        await axiosBackend.post('/part/update', {
            ...part,
            ...values
        })
        setTableShouldUpdate(true)
        setSubmitting(false)
        handleModalOnClose()
    }

    return (
        <>
            <IconButton color="primary" onClick={handleEditButtonOnClick}>
                <Edit/>
            </IconButton>
            <PartFormModal
                open={isModalOpen}
                onClose={handleModalOnClose}
                part={part}
                onSubmit={handleSubmit}
            />
        </>
    )
}

PartEditButton.propTypes = {
    part: PropTypes.object,
    setTableShouldUpdate: PropTypes.func
}

export default withTableUpdate(PartEditButton)
