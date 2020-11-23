const createAction = type => payload => ({ type, payload })

export const setSelectedPartTypeId = createAction('SET_SELECTED_PART_TYPE')
export const setPartTypeList = createAction('SET_PART_TYPE_LIST')
export const setTableShouldUpdate = createAction('SET_TABLE_SHOULD_UPDATE')

