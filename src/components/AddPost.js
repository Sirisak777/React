import React, { useState } from 'react';

const AddPost = ({ addPost, user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (!user) return alert('Please log in to add a post!');

    const newPost = {
      title: title,
      content: content,
      author: user.email, // เก็บ email หรือ id ของผู้ใช้ในโพสต์
      likes: 0,
      comments: [],
      likedBy: [], // อาร์เรย์ที่จะเก็บอีเมล์ของผู้ที่ไลค์
    };

    addPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h3>Add New Post</h3>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
