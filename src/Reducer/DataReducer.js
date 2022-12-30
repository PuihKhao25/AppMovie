export const postReducer = (state, action) => {
    const {type, payload} = action;
  
    switch (type) {
      case 'POST_LOADED_SUCCESS':
        const newCmt = payload.map(post =>
          post.comments,
        );
        return {
          ...state,
          posts: payload,
          comments: newCmt,
          isPostLoading: false,
        };
      case 'POST_LOADED_FAILED':
        return {
          ...state,
          posts: [],
          isPostLoading: false,
        };
  
      case 'ADD_POST':
        console.log("ADD_POST", [...state.posts, payload]);
        return {
          ...state,
          posts: [...state.posts, payload],
        };
  
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== payload),
        };
  
      case 'UPDATE_POST':
        const newPost = state.posts.map(post =>
          post._id === payload._id ? payload : post,
        );
        return {
          ...state,
          posts: newPost,
        };
  
      case 'FIND_POST':
        return {
          ...state,
          post: payload,
        };
      default:
        return state;
    }
  };
  