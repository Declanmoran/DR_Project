import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import football from './images/football.jpg';
import useStyles from './styles';

const App = () => {
    //Use styling form styles.js
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect (() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h3' align='center'>Favourite Player</Typography>
                <img className={classes.image} src={football} alt= "football" height= "60"/>

            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>

                    </Grid>
                </Container>

            </Grow>

        </Container>
    );
}

export default App;