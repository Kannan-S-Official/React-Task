import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, setPost, deletePost } from '../utils/localStorage';

const PostPage = () => {
  const { postId } = useParams();
  const history = useHistory();
  const [postText, setPostText] = useState('');

  useEffect(() => {
    const post = getPost(postId);

    if (post) {
      setPostText(post);
    } else {
      // Post not found, redirect to home page
      history.push('/');
    }
  }, [postId, history]);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleUpdatePost = () => {
    if (postText.trim() === '') {
      return; // Don't update with empty text
    }

    setPost(postId, postText);
  };

  const handleDeletePost = () => {
    deletePost(postId);
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <textarea
        value={postText}
        onChange={handlePostTextChange}
        placeholder="Enter your post..."
        rows={4}
        cols={50}
      ></textarea>
      <button onClick={handleUpdatePost}>Update</button>
      <button onClick={handleDeletePost}>Delete</button>
    </div>
  );
};

export default PostPage;
