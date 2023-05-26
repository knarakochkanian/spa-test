import {GET_COMMENT} from '../types'

const initialState = {
    comment:[],
    loading:true,
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_COMMENT:
            return {
                ...state,
                comment:action.payload,
                loading:false

            }
        default: return state
    }
}