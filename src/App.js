import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PostList from './components/PostList';

const App = () => {
  const [user, setUser] = useState(null); // เก็บสถานะของผู้ใช้
  const [posts, setPosts] = useState([  // ตัวอย่างข้อมูลโพสต์
  ]);

  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        {user ? (
          <>
            <Link to="/posts" style={{ margin: '0 10px' }}>Posts</Link>
            <button onClick={() => setUser(null)} style={{ margin: '0 10px' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
            <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
