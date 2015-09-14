import React, { Component, PropTypes } from 'react';
import BlogEntry from './BlogEntry';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { blogs, actions } = this.props;

    return (
      <section className='main'>
        <ul>
          {blogs.map(blog =>
            <BlogEntry key={blog.id} blog={blog} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

MainSection.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
