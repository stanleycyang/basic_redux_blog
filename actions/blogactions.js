import * as BlogConstants from '../constants/BlogConstants';

export function createBlog(text) {
  return {
    type: BlogConstants.CREATE_BLOG,
    text
  };
}

export function editBlog(id, text) {
  return {
    type: BlogConstants.EDIT_BLOG,
    id,
    text
  };
}

export function deleteBlog(id) {
  return {
    type: BlogConstants.DELETE_BLOG,
    id
  };
}
