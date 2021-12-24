import { ANALYZESENTIMENT, EMBEDSENTENCE, VECTORIZEINPUT, UMAP } from "../constants/actionTypes";
import * as api from '../api';

export const vectorizeInput = (inputText) => async (dispatch) => {
    try {
        const {data} = await api.vectorizeInput(inputText);
        console.log('vector action123:' + data)
        dispatch({type: VECTORIZEINPUT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const analyzeSentiment = (inputText) => async (dispatch) => {
    try {
        const {data} = await api.analyzeSentiment(inputText);
        console.log('sentiment action123:' + data)
        dispatch({type: ANALYZESENTIMENT, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const embedSentence = (inputText) => async (dispatch) => {
    try {
        const {data} = await api.embedSentence(inputText);
        console.log('embedding action123:' + data)
        dispatch({type: EMBEDSENTENCE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const umap = (neighbors, distance) => async (dispatch) => {
    try {
        const {data} = await api.umap(neighbors, distance);
        console.log('umap action123:' + data)
        dispatch({type: UMAP, payload: data});
    } catch (error) {
        console.log(error);
    }
}