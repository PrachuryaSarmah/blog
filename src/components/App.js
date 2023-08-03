import React, { useState } from 'react';
import PostList from './PostList';
import AddPost from './AddPost';
import '../App.css';

function App() {
  const [posts, setPosts] = useState([]);
  
  // Function to add a new post
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Function to delete a post
  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Function to update a post
  const updatePost = (postId, updatedPost) => {
    setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)));
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <AddPost addNewPost={addNewPost} />
      <PostList
        posts={posts}
        deletePost={deletePost}
        updatePost={updatePost}
      />
    </div>
  );
}

export default App;
