import { CREATE_BLOG, EDIT_BLOG, DELETE_BLOG } from '../constants/BlogConstants';

const initialState = [
  {
    text: 'Stanley\'s blog',
    id: 0
  }
];

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return [{
        id: state.reduce((maxId, blog) => {
          Math.max(blog.id, maxId), -1
        }) + 1,
        text: action.text
      }, ...state];
    case DELETE_BLOG:
      return state.filter(blog => {
        blog.id !== action.id
      });
    case EDIT_BLOG:
      return state.map(blog => {
        blog.id === action.id ?
          Object.assign({}, blog, {text: action.text}) : blog
        });
    default:
      return state;
  }
}
