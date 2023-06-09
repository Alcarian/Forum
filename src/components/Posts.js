import axios from "axios";
import React, { useEffect, useState } from "react";
import DeletePost from "./DeletePosts";

export default function Posts({ post, pseudo, getData }) {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    /* eslint-disable*/
    if (post.author === pseudo) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [pseudo]);

  const handleEdit = () => {
    if (newMessage) {
      axios.put(
        `${process.env.REACT_APP_API_URL}/post/` + post.id,
        {
          message: newMessage,
          pseudo,
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

  function handleClickButton() {
    setIsDelete(true);
  }

  useEffect(() => {
    if (isDelete) {
      setIsDelete(false);
      getData();
    }
  }, [isDelete, getData]);

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
              handleClickButton();
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
            <DeletePost postId={post.id} getData={getData} />
          </div>
        )}
      </div>
    </div>
  );
}
