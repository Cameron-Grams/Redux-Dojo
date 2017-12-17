import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
  
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => < a href={ post.url } target="_blank" ><li key={i}>{post.title}</li></a> ) }
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}