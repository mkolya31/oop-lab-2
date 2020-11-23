const initialState = {
    selectedPartType: void 0,
    tableShouldUpdate: true
}

export const partsReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_SELECTED_PART_TYPE':
            return {
                ...state,
                selectedPartType: action.payload.id
            }
        case 'SET_PART_TYPE_LIST':
            return {
                ...state,
                partTypeList: action.payload
            }
        case 'SET_TABLE_SHOULD_UPDATE':
            return {
                ...state,
                tableShouldUpdate: action.payload
            }
        default: return state
    }
}
