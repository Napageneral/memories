import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { analyzeSentiment } from '../../actions/vectors';

const SentimentForm = () => {
    const [inputData, setInputData] = useState({message: ''})
    const classes = useStyles();
    const dispatch = useDispatch();
    const sentiment = useSelector((state) => state.sentiment)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('selected sentiment label:' + sentiment.label)
        console.log('selected sentiment score:' + sentiment.score)
        dispatch(analyzeSentiment(inputData))
    }

    const clearInput = () => {
        setInputData({ message: ''})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant = "h6">Sentiment Test</Typography>
                <TextField name="message" variant="outlined" label="Input Text" fullWidth value={inputData.message} onChange={(e) => setInputData({ ...inputData, message: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearInput} fullWidth>Clear</Button>
            </form>
            <Typography variant = "h6">Output Sentiment: {sentiment.label}</Typography>
            <Typography variant = "h6">Sentiment Strength: {sentiment.score}</Typography>
        </Paper>
    );
}

export default SentimentForm;