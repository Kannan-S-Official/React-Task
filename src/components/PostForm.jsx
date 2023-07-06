import React from 'react';
import './Form.css'

const PostForm = ({ addPost, postText, onPostTextChange, onReset }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (postText.trim() === '') {
      return; // Don't post empty text
    }

    addPost(postText);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        className='box'
        value={postText}
        onChange={onPostTextChange}
        placeholder="Enter your post..."
        rows={4}
        cols={50}
      ></textarea>
      <div className='button'>
      <button className='btn-post'type="submit">Post</button>
      <button className='btn-reset' type="button" onClick={onReset}>Reset</button>
      </div>
    </form>
  );
};

export default PostForm;
