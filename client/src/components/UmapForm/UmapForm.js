import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { UMAP } from '../../constants/actionTypes';
import { umap } from '../../actions/vectors';

const UmapForm = () => {
    const [neighbors, setNeighbors] = useState({value: 10})
    const [distance, setDistance] = useState({value: 0.3})
    const classes = useStyles();
    const dispatch = useDispatch();
    const umap_embedding = useSelector((state) => state.umap)

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('selected umap:' + umap_embedding.value)
        dispatch(umap(neighbors, distance))
    }

    const clearInput = () => {
        setNeighbors({ value: 10})
        setDistance({ value: 0.3})
        umap_embedding.value = []
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant = "h6">Umap Test</Typography>
                <TextField name="message" variant="outlined" label="N Neighbors" fullWidth value={neighbors.value} onChange={(e) => setNeighbors({ ...neighbors, value: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Min Distance" fullWidth value={distance.value} onChange={(e) => setDistance({ ...distance, value: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearInput} fullWidth>Clear</Button>
            </form>
            <Typography variant = "h6">Umap Output: {umap_embedding.value}</Typography>
        </Paper>
    );
}

export default UmapForm;