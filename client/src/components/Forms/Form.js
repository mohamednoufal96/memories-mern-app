import React from 'react';
import { Typography, TextField, Paper, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';

import useStyles from './style';
import { useState } from 'react';
import { createPost } from '../../actions/posts';

function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', seletedFile: '' });
  const dispatch = useDispatch();

  const clear = () => {
    setPostData({creator: '', title: '', message: '', tags: '', seletedFile: ''});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
  }


  return (
    <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={(event) => handleSubmit(event)}>
        <Typography variant='h6' align='center'>Create a Post</Typography>
        <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(event => setPostData({...postData, creator: event.target.value}))} />
        <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(event => setPostData({...postData, title: event.target.value}))} />
        <TextField name='message' variant='outlined' label="Message" fullWidth value={postData.message} onChange={(event => setPostData({...postData, message: event.target.value}))} />
        <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(event => setPostData({...postData, tags: event.target.value}))} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, seletedFile: base64})} />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' fullWidth type='submit'>Submit</Button>
        <Button className={classes.buttonSubmit} variant='contained' color='secondary' size='small' fullWidth type='submit' onClick={clear} >clear</Button>
      </form>
    </Paper>
  )
}

export default Form