import React from 'react';
import PostItem from './PostItem';
import AddPost from './AddPost';
import './PostList.css'; // เพิ่มการนำเข้า CSS

const PostList = ({ posts, setPosts, user }) => {
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="post-container">
      <h2>All Posts</h2>

      {/* ฟีเจอร์เพิ่มโพสต์ */}
      {user && (
        <div className="add-post-box">
          <AddPost addPost={addPost} user={user} />
        </div>
      )}

      {/* แสดงโพสต์ */}
      <div className="posts-list">
          {posts.map((post, index) => (
            <PostItem
              key={index}
              post={post}
              posts={posts}
              setPosts={setPosts}
              user={user}
            />
          ))}
      </div>
    </div>
  );
};

export default PostList;
