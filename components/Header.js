import React, { Component, PropTypes } from 'react';
import TextInput from './TextInput';

export default class Header extends Component {
  handleSave(text) {
    if(text.length !== 0) {
      let input = text.trim();
      this.props.createBlog(input);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>Blog posts</h1>
        <TextInput newBlog
                   onSave={this.handleSave.bind(this)}
                   placeholder='Start new blog entry' />
      </header>
    );
  }
}

Header.propTypes = {
  createBlog: PropTypes.func.isRequired
};
