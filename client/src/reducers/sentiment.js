import { ANALYZESENTIMENT } from '../constants/actionTypes';

export default  (sentiment = {label: '', score: 0}, action) => {
    console.log(action)
    console.log('sentiment reducer action type:' + action.type)
    switch (action.type) {
        case ANALYZESENTIMENT:
            console.log('action.payload:' + action.payload)
            return {
                ...sentiment,
                ...action.payload
            }
        default:
            return sentiment;
    }
}