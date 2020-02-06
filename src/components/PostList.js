import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log(this.props);
  }

  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
