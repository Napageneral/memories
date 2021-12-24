import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { embedSentence } from '../../actions/vectors';

const EmbeddingForm = () => {
    const [inputData, setInputData] = useState({message: ''})
    const classes = useStyles();
    const dispatch = useDispatch();
    const embedding = useSelector((state) => state.embedding)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('selected embedding:' + embedding.value)
        dispatch(embedSentence(inputData))
    }

    const clearInput = () => {
        setInputData({ message: ''})
        embedding.value = ""
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant = "h6">Embedding Test</Typography>
                <TextField name="message" variant="outlined" label="Input Text" fullWidth value={inputData.message} onChange={(e) => setInputData({ ...inputData, message: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearInput} fullWidth>Clear</Button>
            </form>
            <Typography variant = "h6">Output Embedding: {embedding.value}</Typography>
        </Paper>
    );
}

export default EmbeddingForm;