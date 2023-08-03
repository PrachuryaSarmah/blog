import React, { useState } from 'react';

const AddPost = ({ addNewPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    featuredImage: '',
    text: '',
    date: '',
    author: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...formData, id: Date.now(), likes: 0, comments: 0 };
    addNewPost(newPost);
    setFormData({
      title: '',
      topic: '',
      featuredImage: '',
      text: '',
      date: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      <label>Topic:</label>
      <input type="text" name="topic" value={formData.topic} onChange={handleChange} required />
      <label>Featured Image:</label>
      <input type="text" name="featuredImage" value={formData.featuredImage} onChange={handleChange} />
      <label>Text:</label>
      <textarea name="text" value={formData.text} onChange={handleChange} required />
      <label>Date:</label>
      <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
      <label>Author:</label>
      <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
