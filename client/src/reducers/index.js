import { combineReducers } from "redux";

import posts from './posts';
import vector from "./vector";

export default combineReducers({
    posts,
    vector
})