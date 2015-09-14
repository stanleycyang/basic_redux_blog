import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

export default class BlogEntry extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({editing: true});
  }

  handleSave(id, text) {
    if(text.length === 0) {
      this.props.deleteBlog(id);
    } else {
      this.props.editBlog(id, text);
    }
    this.setState({editing: false});
  }

  render() {
    const {blog, deleteBlog} = this.props;

    let element;

    if(this.state.editing) {
      element = (
        <TextInput text={blog.text} editing={this.state.editing} onSave={(text) => this.handleSave(blog.id, text)} />
      );
    } else {
      element = (
        <div className='view'>
          <label onDoubleClick={this.handleDoubleClick}>
            {blog.text}
          </label>
          <button className='destroy' onClick={() => deleteBlog(blog.id)}>X</button>
        </div>
      );
    }

    return (
      <li className='blog-entry'>
        {element}
      </li>
    );
  }
}

BlogEntry.propTypes = {
  blog: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  editBlog: PropTypes.func.isRequired
};
