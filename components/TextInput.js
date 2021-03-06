import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if ( e.which === 13) {
      this.props.onSave(text);
      if(this.props.newBlog) {
        this.setState({text: ''});
      }
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleBlur = (e) => {
    if(!this.props.newBlog) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className='enter-blog'
             type='text'
             placeholder={this.props.placeholder}
             autoFocus="true"
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit} />
    );
  }

}

TextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  newBlog: PropTypes.bool
};
