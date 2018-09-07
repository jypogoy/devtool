import React, { Component } from 'react'

import PostList from '../components/PostList';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <PostList dataUrl="https://jsonplaceholder.typicode.com/posts" />
      </div>
    )
  }
}
