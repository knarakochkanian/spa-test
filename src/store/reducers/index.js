import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer"
export default combineReducers({
    users: userReducer,
    posts: postsReducer,
    comment: commentReducer
})