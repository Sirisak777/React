import React from 'react';

const EditPost = ({
  post,
  editedTitle,
  setEditedTitle,
  editedContent,
  setEditedContent,
  onSave,
  onCancel,
}) => {
  return (
    <div>
      <h3>Edit Post</h3>
      {/* ฟิลด์แก้ไขหัวข้อโพสต์ */}
      <input
        type="text"
        placeholder="Edit title"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <br />
      {/* ฟิลด์แก้ไขเนื้อหาโพสต์ */}
      <textarea
        placeholder="Edit content"
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditPost;
