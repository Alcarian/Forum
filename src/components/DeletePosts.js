import React from "react";
import axios from "axios";

const DeletePost = ({ postId }) => {
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/post/` + postId, {
      withCredentials: true,
    });
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  );
};

export default DeletePost;
