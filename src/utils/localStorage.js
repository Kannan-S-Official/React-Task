const POST_COUNT_KEY = 'postcount';
const POST_PREFIX = 'post';

export const getPostCount = () => {
  const postCount = localStorage.getItem(POST_COUNT_KEY);
  return postCount ? parseInt(postCount, 10) : 0;
};

export const setPostCount = (count) => {
  localStorage.setItem(POST_COUNT_KEY, count);
};

export const getPost = (index) => {
  const postKey = `${POST_PREFIX}${index}`;
  return localStorage.getItem(postKey);
};

export const setPost = (index, post) => {
  const postKey = `${POST_PREFIX}${index}`;
  localStorage.setItem(postKey, post);
};

export const deletePost = (index) => {
  const postKey = `${POST_PREFIX}${index}`;
  localStorage.removeItem(postKey);
};

export const deleteAllPosts = () => {
  localStorage.clear();
};
