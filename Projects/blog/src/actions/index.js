import jsonPlaceholder from '../apis';
export const fetchPosts = () => {
  return function () {
    const response = await jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: response
    };
  }
};

