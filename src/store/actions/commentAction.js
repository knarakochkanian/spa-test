import {GET_COMMENT, COMMENT_ERROR} from '../types'
import axios from 'axios'

export const getComment = () => async dispatch => {

    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        dispatch( {
            type: GET_COMMENT,
            payload: res.data,
        })
    }
    catch(e){
        dispatch( {
            type: COMMENT_ERROR,
            payload: console.log(e),
        })
    }

}
