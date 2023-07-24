import { ADD_LIST, APP_LIST, RESET } from "../type"


const initaiState = {
    list: [],
    listEl: []
}

export const reducer = (state = initaiState, action) => {

    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                list: [action.el, ...state.list],
                
            }
            case APP_LIST:
                return{
                    ...state,
                    listEl: [action.ele, ...state.listEl]
                }
            case RESET:
                return {
                   list: [],
                   listEl:[]
                }
        default:
            return state
    }
}

