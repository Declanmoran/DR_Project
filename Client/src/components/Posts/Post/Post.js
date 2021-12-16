import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

//Creating cards for previously created posts
const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}  title={post.playerName}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} 
                size='small' 
                onClick={() => setCurrentId(post._id)}>
                </Button>
                <MoreHorizIcon fontSize='medium' />
            </div>

            <CardContent>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.playerName}</Typography>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.team}</Typography>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.position}</Typography>
            </CardContent>

            <CardActions>
                <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
};

export default Post;