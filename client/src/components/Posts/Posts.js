import React from 'react';
import Post from './Post/Post'
import { useSelector } from 'react-redux';

import useStyles from "./styles.js";

function Posts() {
    const classes = useStyles(); 
    const posts = useSelector(state => state.posts);

    console.log("posts: ", posts)
    return (
        <>
            <h2>Posts</h2>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts