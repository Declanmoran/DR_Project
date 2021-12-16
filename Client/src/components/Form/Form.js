import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {
    //Create the object (postData) where the values of each component will be stored
    const [postData, setPostData] = useState ({creator:'',  playerName: '', team:'', position:''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    //Handler function
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        //Call clear function after update & create post
        clear();

    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator:'',  playerName: '', team:'', position:''});
    }

    return (
        
        <Paper className={classes.paper}>
           
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant='h5'>{currentId ? 'Editing ' : ''}Your Favourite Player </Typography>

                <TextField name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    //...postData allows you to change each individual property rather than only targeting the creator
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />

                <TextField name="playerName" 
                    variant="outlined" 
                    label="Player Name" 
                    fullWidth
                    value={postData.playerName}
                    //...postData allows you to change each individual property rather than only targeting the creator
                    onChange={(e) => setPostData({...postData, playerName: e.target.value})}
                />

                <TextField name="team" 
                    variant="outlined" 
                    label="Team" 
                    fullWidth
                    value={postData.team}
                    //...postData allows you to change each individual property rather than only targeting the creator
                    onChange={(e) => setPostData({...postData, team: e.target.value})}
                />

                <TextField name="position" 
                    variant="outlined" 
                    label="Position" 
                    fullWidth
                    value={postData.position}
                    //...postData allows you to change each individual property rather than only targeting the creator
                    onChange={(e) => setPostData({...postData, position: e.target.value})}
                />

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        
        </Paper>
    );
}

export default Form;