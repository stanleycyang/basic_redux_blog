import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

export default class BlogEntry extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {blog, deleteBlog} = this.props;

    return (
      <li className='blog-entry'>
        <div className='view'>
          <label>
            {blog.text}
          </label>
          <button className='destroy' onClick={() => deleteBlog(blog.id)}>X</button>
        </div>
      </li>
    );
  }
}

BlogEntry.propTypes = {
  blog: PropTypes.object.isRequired
};
