import { EMBEDSENTENCE } from '../constants/actionTypes';

export default (embedding = {value:""}, action) => {
    console.log(action)
    console.log('embedding reducer action type:' + action.type)
    switch (action.type) {
        case EMBEDSENTENCE:
            console.log('action.payload:' + action.payload)
            return {
                ...embedding,
                ...action.payload
            }
        default:
            return embedding;
    }
}