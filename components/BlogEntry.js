import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

class BlogEntry extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {blog} = this.props;

    return (
      <li className='blog-entry'>
        <div className='view'>
          <label for="">
            {blog.text}
          </label>
        </div>
      </li>
    );
  }
}

BlogEntry.propTypes = {
  blog: PropTypes.object.isRequired
};

export default BlogEntry;
