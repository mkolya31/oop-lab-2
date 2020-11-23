import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form } from 'react-final-form'
import { Paper, MenuItem, Button, Typography, makeStyles, LinearProgress } from '@material-ui/core'
import { TextField, Select } from 'mui-rff'

import { getPartTypeList } from '../../../utils/redux/selectors'

const REQUIRED_ERROR = 'Поле обязательно к заполнению'

const useStyles = makeStyles({
    formContainer: {
        width: '50%',
        'max-width': '650px'
    },
    paper: {
        width: '100%',
        padding: '30px'
    },
    button: {
        margin: '10px 20px 0 0'
    },
    field: {
        margin: '30px 0'
    },
    progress: {
        marginBottom: '15px'
    }
})

export function PartForm(props) {

    const { part, partTypeList, onSubmit, onSubmitButtonName } = props
    const classes = useStyles()

    const validate = (values) => {
        const errors = {}

        if (!values.partName) {
            errors.partName = REQUIRED_ERROR
        }
        if (!values.partTypeId) {
            errors.partTypeId = REQUIRED_ERROR
        }

        return errors
    }

    return (
        <div className={classes.formContainer}>
            <Paper className={classes.paper}>
                <Typography variant="h6" >Редактирование данных детали</Typography>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={part}
                    render={({ handleSubmit, form, submitting, pristine }) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                className={classes.field}
                                name="partName"
                                label="Название детали"
                                disabled={submitting}
                                required
                            />
                            <Select
                                className={classes.field}
                                name="partTypeId"
                                label="Выберите категорию"
                                disabled={submitting}
                                required
                            >
                                {partTypeList.map((partType, i) => (
                                    <MenuItem key={`part-type-menu-item-${i}`} value={partType.id}>{partType.partTypeName}</MenuItem>
                                ))}
                            </Select>
                            {submitting && <LinearProgress className={classes.progress} />}
                            <Button
                                className={classes.button}
                                variant="contained"
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Сбросить
                            </Button>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={submitting}
                            >
                                Сохранить
                            </Button>
                        </form>
                    )}
                />
            </Paper>
        </div>
    )
}

PartForm.propTypes = {
    part: PropTypes.object,
    partTypeList: PropTypes.array,
    onSubmit: PropTypes.func,
    onSubmitButtonName: PropTypes.string
}

PartForm.defaultProps = {
    part: {},
    partTypeList: [],
    onSubmit: () => void 0,
    onSubmitButtonName: 'Сохранить'
}

const mapStateToProps = state => ({
    partTypeList: getPartTypeList(state),
})

export default connect(mapStateToProps)(PartForm)
