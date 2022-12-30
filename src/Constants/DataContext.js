import React, {
    createContext,
    useContext,
    useState,
    useReducer,
    useEffect,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {postReducer} from '../reducer/DataReducer';
  import {userPostsReducer, userReducer} from '../reducer/UserReducer';
  
  import QueryString from 'query-string';
  import API_URL from '../Services/API';
  import AuthContext from './AuthContext';
  import axios from 'axios';
  
  const DataContext = createContext(null);
  
  export const DataProvider = ({children}) => {
    const {userToken} = useContext(AuthContext);
    const {userInfo} = useContext(AuthContext);
   
    const [postState, dispatch] = useReducer(postReducer, {
      posts: [],
      comments: [],
      isPostLoading: true,
      post: null,
    });
  
    const [userState, dispatchUser] = useReducer(userReducer, {
      user: null,
      isPostLoading: true,
    });
  
    const [userPostsState, dispatchUserPosts] = useReducer(userPostsReducer, {
      user_posts: [],
      isPostLoading: true,
    });
  
    const [showToast, setShowToast] = useState({
      type: null,
      message: '',
      show: false,
    });
  
    //Show modal
    const [showModalAddPost, setShowModalAddPost] = useState(false);
    const [showModalUpdatePost, setShowModalUpdatePost] = useState(false);
  
    //Call post
    const getPost = async () => {
      console.log("loading...");
      
      
      try {
        const response = await axios.get('https://apisocial-production.up.railway.app/api/posts', {
          headers: {Authorization: userToken},
        });
          
       
        if (response) {
          console.log("Load post thành công");
          dispatch({type: 'POST_LOADED_SUCCESS', payload: response.data.posts});
        }
      } catch (error) {
        console.log("Loix", error);
        dispatch({type: 'POST_LOADED_FAILED'});
      }
    };
  
    //ADD POST
    const addPost = async (images, content) => {
      try {
        const response = await axios.post(
          'https://apisocial-production.up.railway.app/api/posts',
          {
            content,
            images,
            user: userInfo._id,
          },
          {headers: {Authorization: userToken, 'Content-Type': 'application/json'}},
        );
       
        if (response) {
          console.log("Đã thêm post");
          dispatch({type: 'ADD_POST', payload: response.data.newPost});
        }
        return response.data;
      } catch (error) { 
        console.log("Lỗi thêm post", error);
  
        if (error.response) return error.response;
        else return {status: false, message: error.message};
      }
    };
  
    //Delete a post
    const deletePost = async postId => {
      try {
        const response = await axios.delete(`${API_URL}/post/${postId}`, {
          headers: {Authorization: userToken},
        });
        if (response) {
          dispatch({type: 'DELETE_POST', payload: postId});
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
  
    //Update Post
    const updatePost = async (updatePost,content, images) => {
      //console.log("updatePost", updatePost);
       // console.log("cmnr", updatedPostContent, updatedPostImages);
      try {
        const response = await axios.patch(`${API_URL}/post/${updatePost}`, {
          content, images
  
        }, {
          headers: {Authorization: userToken},
        });
        
        if (response.status) {
          dispatch({type: 'UPDATE_POST', payload: response.data.newPost});
          return response.data;
        }
      } catch (error) {
        console.log("updatePostail", error);
        if (error.response.data) return error.response.data;
        else return {status: false, message: error.message};
      }
    };
  
    //FIND POST
    const findPost = postId => {
      const post = postState.posts.find(post => post._id === postId);
  
      dispatch({type: 'FIND_POST', payload: post});
    };
  
    //Like post
    const likePost =async(_id, likes) => {
      try {
        const response = await axios.patch(`${API_URL}/post/${_id}/like`, {
          likes
        }, {
          headers: {Authorization: userToken},
        });
        
      } catch (error) {
        console.log("updatePostail", error);
        if (error.response.data) return error.response.data;
        else return {status: false, message: error.message};
      }
    }
  
    //UnLike post
    const unLikePost =async(_id, likes) => {
      try {
        const response = await axios.patch(`${API_URL}/post/${_id}/unlike`, {
          likes
        }, {
          headers: {Authorization: userToken},
        });
        console.log("unlike success");
        
      } catch (error) {
        console.log(error);
        if (error.response.data) return error.response.data;
        else return {status: false, message: error.message};
      }
    }
  
    //Comment Post
     //UnLike post
     const commentPost =async(content, postId, postUserId) => {
      console.log("commentPost", content, postId, postUserId);
      try {
        const response = await axios.post(`${API_URL}/comment`, { 
            content, postId, postUserId
          
        }, {
          headers: {Authorization: userToken},
        });
        if(response) {
          console.log("create comment success");
        }
        
        
      } catch (error) {
        console.log(error);
        if (error.response.data) return error.response.data;
        else return {status: false, message: error.message};
      }
    }
  
  
    //GET User
    const getUser = async () => {
      const id = userInfo._id
  
      try {
        const response = await axios.get(`${API_URL}/user/${id}`, {
          headers: {Authorization: userToken},
        });
        
       
        if (response) {
          dispatchUser({type: 'USER_LOADED_SUCCESS', payload: response.data.user});
        }
      } catch (error) {
        console.log("Loix");
        dispatchUser({type: 'USER_LOADED_FAILED'});
      }
    };
  
    //GET User
    const getUserPosts = async () => {
      const id = userInfo._id
     
      try {
        const response = await axios.get(`${API_URL}/user_posts/${id}`, {
          headers: {Authorization: userToken},
        });    
        
        if (response) {
          dispatchUserPosts({type: 'USER_POST_LOADED_SUCCESS', payload: response.data.posts});
        }
      } catch (error) {
        console.log("cmnr");
        dispatchUserPosts({type: 'USER_POST_LOADED_FAILED'});
      }
    };
  
    //Update User
    const updateUser = async (fullname, username, avatar) => {
      
      try {
        const response = await axios.patch(`${API_URL}/user`, 
        {
          fullname, username, avatar
        },
        {
          headers: {Authorization: userToken},
        });    
        
        if (response) {
      
         dispatchUser({type: 'USER_LOADED_SUCCESS', payload: response.data.user});
        }
      } catch (error) {
        console.log("cmnr");
        dispatchUserPosts({type: 'USER_POST_LOADED_FAILED'});
      }
  
    }
    console.log('Connected', userToken);
  
    return (
      <DataContext.Provider
        value={{
          getUser,
          getPost,
          updateUser,
          getUserPosts,
          userState,
          postState,
          userPostsState,
          deletePost,
          showModalAddPost,
          showToast,
          addPost,
          setShowModalAddPost,
          showModalUpdatePost,
          setShowModalUpdatePost,
          updatePost,
          findPost,
          likePost,
          unLikePost,
          commentPost
        }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataContext;
  