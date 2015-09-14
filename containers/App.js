import React, { Component, PropTypes } from 'react';
// Bind actions with dispatcher
import { bindActionCreators } from 'redux';
// Connects our states / actions to our Smart components
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as BlogActions from '../actions/blogactions';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my blog</h1>
      </div>
    );
  }
}

App.propTypes = {
  blogactions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    blogactions: state.blogactions
  };
}

export default connect(mapStateToProps)(App);
