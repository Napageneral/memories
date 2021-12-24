import { UMAP } from '../constants/actionTypes';

export default  (umap = {value:[]}, action) => {
    console.log(action)
    console.log('umap reducer action type:' + action.type)
    switch (action.type) {
        case UMAP:
            console.log('action.payload:' + action.payload)
            return {
                ...umap,
                ...action.payload
            }
        default:
            return umap;
    }
}