import React, { useState } from 'react';
import EditPost from './EditPost';
import CommentSection from './CommentSection';

const PostItem = ({ post, posts, setPosts, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  const likePost = () => {
    if (!user) return alert('Please log in to like posts!');
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, likes: p.likes + 1 } : p
    );
    setPosts(updatedPosts);
  };

  const saveEdit = () => {
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, title: editedTitle, content: editedContent } : p
    );
    setPosts(updatedPosts);
    setIsEditing(false); // กลับสู่โหมดแสดงปกติ
  };

  return (
    <div>
      {isEditing ? (
        <EditPost
          post={post}
          editedTitle={editedTitle}
          setEditedTitle={setEditedTitle}
          editedContent={editedContent}
          setEditedContent={setEditedContent}
          onSave={saveEdit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>

          {/* ถ้า user login แล้ว สามารถเพิ่มไลค์ได้ */}
          {user && (
            <button onClick={likePost}>Like</button>
          )}

          {/* แสดงปุ่มแก้ไขและลบเฉพาะโพสต์ของผู้ใช้ที่ล็อกอิน */}
          {user && post.author === user.email && (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              {/* ลบโพสต์ */}
            </>
          )}
        </>
      )}

      {/* คอมเมนต์ */}
      <CommentSection post={post} posts={posts} setPosts={setPosts} user={user} />
    </div>
  );
};

export default PostItem;
