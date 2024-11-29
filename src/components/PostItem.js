import React, { useState, useEffect } from 'react';
import EditPost from './EditPost';
import CommentSection from './CommentSection';

const PostItem = ({ post, posts, setPosts, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  // ฟังก์ชันสำหรับการเพิ่มหรือลดไลค์
  const toggleLike = () => {
    if (!user) return alert('Please log in to like posts!');

    // ตรวจสอบว่า user นี้ไลค์โพสต์นี้แล้วหรือยัง
    const hasLiked = post.likedBy.includes(user.email);

    const updatedPosts = posts.map((p) =>
      p === post
        ? {
            ...p,
            likes: hasLiked ? p.likes - 1 : p.likes + 1,  // ลดไลค์หากเคยไลค์แล้ว
            likedBy: hasLiked
              ? p.likedBy.filter((email) => email !== user.email)  // ลบอีเมลจาก likedBy
              : [...p.likedBy, user.email],  // เพิ่มอีเมลไปที่ likedBy
          }
        : p
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

  const deletePost = () => {
    const updatedPosts = posts.filter((p) => p !== post); // ลบโพสต์ออกจากอาร์เรย์
    setPosts(updatedPosts);
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

          {/* ถ้า user login แล้ว สามารถเพิ่ม/ลดไลค์ได้ */}
          {user && (
            <button onClick={toggleLike}>
              {post.likedBy.includes(user.email) ? 'Unlike' : 'Like'}
            </button>
          )}

          {/* แสดงปุ่มแก้ไขและลบเฉพาะโพสต์ของผู้ใช้ที่ล็อกอิน */}
          {user && post.author === user.email && (
            <>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={deletePost}>Delete</button>
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
