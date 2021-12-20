import { VECTORIZEINPUT } from "../constants/actionTypes";
import * as api from '../api';

export const vectorizeInput = (post) => async (dispatch) => {
    try {
        const {data} = await api.vectorizeInput(post);
        console.log('vector action123:' + data)
        dispatch({type: VECTORIZEINPUT, payload: data});
        console.log('log statement after reducer dispatch should be called')
    } catch (error) {
        console.log(error);
    }
}