import { ADD_LIST, APP_LIST, RESET } from "../type"


export const addEl = (el) => {
    return {
        type:ADD_LIST, el
    }
}

export const appEl = (ele) => {
    return {
        type:APP_LIST, ele
    }
}
export const resetEl = () =>{
    return{
        type: RESET
    }
}