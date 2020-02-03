export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS',
    payload: [
      {title: 'First post'}
    ]
  }
};

