import React, { Component, PropTypes } from 'react';
// Bind actions with dispatcher
import { bindActionCreators } from 'redux';
// Connects our states / actions to our Smart components
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import Header from '../components/Header';
import * as BlogActions from '../actions/blogactions';

class App extends Component {
  render() {
    const { blogs, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);
    return (
      <div>
        <Header createBlog={actions.createBlog}/>
        <MainSection blogs={blogs} actions={actions}/>
      </div>
    );
  }
}

App.propTypes = {
  blogs: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    blogs: state.blogs
  };
}

export default connect(mapStateToProps)(App);
