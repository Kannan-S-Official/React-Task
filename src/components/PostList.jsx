import React from 'react';
import './list.css'

const PostList = ({ posts, onDeletePost }) => {
  return (
    <div >
      {posts.map((post, index) => (
        <div className='list' key={index}>
          <h3>post: {index + 1}</h3>
          <p>{post}</p>
         
        </div>
      ))}
    </div>
  );
};

export default PostList;
