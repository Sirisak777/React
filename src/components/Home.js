import React from 'react';
import PostItem from './PostItem';

const Home = ({ posts, setPosts, user }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '4.5rem', color: '#333' }}>เว็บบอร์ด</h1>
      <p>เข้าสู่ระบบเพื่อโพสสิ่งที่ท่านต้องการ</p>

      {/* แสดงโพสต์ทั้งหมด */}
      <div>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            post={post}
            posts={posts}
            setPosts={setPosts}  // ส่งฟังก์ชัน setPosts ไปให้ PostItem
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
