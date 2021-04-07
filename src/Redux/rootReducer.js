import profileReducer from "./profile/profileReducer";
import postsReducer from "./posts/postsReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({ 
    profile:profileReducer, 
    posts:postsReducer});

export default rootReducer;