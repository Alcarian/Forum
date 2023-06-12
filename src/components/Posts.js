import axios from "axios";
import React, { useEffect, useState } from "react";
import DeletePost from "./DeletePosts";

export default function Posts({ post, userId }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    /* eslint-disable*/
    if (post.author === userId) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [userId]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put(
        `${process.env.REACT_APP_API_URL}/post/` + post._id,
        {
          message: newMessage,
        },
        {
          withCredentials: true,
        }
      );
    }
  };

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>posté le {dateFormater(post.createdDate)}</p>
      </div>
      {isEdit ? (
        <div className="edit-container">
          <textarea
            defaultValue={newMessage ? newMessage : post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              handleEdit();
              setIsEdit(false);
            }}
          >
            Valider édition
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )}
      <div className="icons-part">
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                handleEdit();
                setIsEdit(!isEdit);
              }}
            >
              &#10000;
            </span>
            <DeletePost postId={post._id} />
          </div>
        )}
      </div>
    </div>
  );
}
