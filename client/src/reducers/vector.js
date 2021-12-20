import { VECTORIZEINPUT } from '../constants/actionTypes';

export default  (vector = {value: ''}, action) => {
    console.log(action)
    console.log('vector reducer action type:' + action.type)
    switch (action.type) {
        case VECTORIZEINPUT:
            console.log('action.payload:' + action.payload)
            return {
                ...vector,
                value: action.payload
            }
        default:
            return vector;
    }
}