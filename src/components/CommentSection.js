import React, { useState } from 'react';

const CommentSection = ({ post, posts, setPosts, user }) => {
  const [comment, setComment] = useState('');

  const addComment = () => {
    if (!user) return alert('Please log in to comment!');
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, comments: [...p.comments, { user: user.email, comment }] } : p
    );
    setPosts(updatedPosts);
    setComment('');
  };

  return (
    <div>
      <h4>Comments</h4>
      {post.comments.map((c, index) => (
        <p key={index}><strong>{c.user}:</strong> {c.comment}</p>
      ))}
      {user && (
        <>
          <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={addComment}>Add Comment</button>
        </>
      )}
    </div>
  );
};

export default CommentSection;
