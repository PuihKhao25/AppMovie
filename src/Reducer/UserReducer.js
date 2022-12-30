export const userReducer = (state, action) => {
    const {type, payload} = action;
  
    switch (type) {
      case 'USER_LOADED_SUCCESS':
        return {
          ...state,
          user: payload,
          isPostLoading: false,
        };
        
      case 'USER_LOADED_FAILED':
        return {
          ...state,
          user: null,
          isPostLoading: false,
        };
  
      // case 'UPDATE_POST':
      //   const newPost = state.posts.map(post =>
      //     post._id === payload._id ? payload : post,
      //   );
      //   return {
      //     ...state,
      //     posts: newPost,
      //   };
  
      
      default:
        return state;
    }
  };
  
  export const userPostsReducer = (state, action) => {
    const {type, payload} = action;
  
    switch (type) {
      case 'USER_POST_LOADED_SUCCESS':
        return {
          ...state,
          user_posts: payload,
          isPostLoading: false,
        };
        
      case 'USER_POST_LOADED_FAILED':
        return {
          ...state,
          user_posts: null,
          isPostLoading: false,
        };
  
      // case 'UPDATE_POST':
      //   const newPost = state.posts.map(post =>
      //     post._id === payload._id ? payload : post,
      //   );
      //   return {
      //     ...state,
      //     posts: newPost,
      //   };
  
      
      default:
        return state;
    }
  };
  
  