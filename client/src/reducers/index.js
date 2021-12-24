import { combineReducers } from "redux";

import posts from './posts';
import vector from "./vector";
import sentiment from "./sentiment";
import embedding from "./embedding";
import umap from "./umap";

export default combineReducers({
    posts,
    vector,
    sentiment,
    embedding,
    umap
})