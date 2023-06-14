import React from "react";
import axios from "axios";

const DeletePost = ({ postId, getData }) => {
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
      withCredentials: true,
    });
  };

  return (
    <span
      id="delete-btn"
      onClick={() => {
        handleDelete();
        getData();
      }}
    >
      &#10010;
    </span>
  );
};

export default DeletePost;
