import { HYDRATE } from "next-redux-wrapper"; 
import { combineReducers } from "redux";
import user from './user.js';
import post from './post.js';


const rootReducer = combineReducers({
  index: (state = {}, action) => {    //  HYDRATE 위해서 추가한 코드(index) - 서버 사이드 렌더링을 위해서 만들어놓는 곳
    switch(action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state, ...action.payload
        };
      default:
        return state;
    }
  },
  user,
  post,
})
    
export default rootReducer;