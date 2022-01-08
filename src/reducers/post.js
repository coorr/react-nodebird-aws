import shortid from "shortid";

export const initialState = {
  mainPosts: [{
    id:1,
    User: {
      id:1,
      nickname: '김진성'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src:  'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }, {
      src : 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    },{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른 사고싶어요'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
})

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
})

const dummyPost = (data) =>  ({
  id:shortid.generate(),
  content: data,
  User: {
    id:1,
    nickname:'김진성'
  },
  Images: [{
    src: null
  }],
  Comments: [],
}) 

const dummyComment = (data) => ({
  id:shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname:'김진성'
  },
})

const reducer = (state = initialState,action) => {
  switch(action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading:true,
        addPostDone:false,
        addPostError:null,
      };
    case ADD_POST_SUCCESS:
        return {
          ...state,
          mainPosts: [dummyPost(action.data), ...state.mainPosts],
          addPostLoading:false,
          addPostDone:true,
          addPostError:null,
        }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading:false,
        addPostError:action.error
      }

    case ADD_COMMENT_REQUEST:
        return {
          ...state,
          addCommentLoading:true,
          addCommentDone:false,
        };
    case ADD_COMMENT_SUCCESS: {
      console.log(action.data);
      state.mainPosts.findIndex((a)=> console.log(a.id))
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      console.log(postIndex);
      const post = {...state.mainPosts[postIndex]};
      console.log(post);
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      console.log(mainPosts);
      mainPosts[postIndex] = post;
      console.log(mainPosts);
      return {
        ...state,
        mainPosts,
        addCommentLoading:false,
        addCommentDone:true,
        addCommentError:null,
      }
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading:false,
        addCommentError:action.error
      }
    default:
      return state;
  }
}

export default reducer;