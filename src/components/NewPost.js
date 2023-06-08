import axios from "axios";
import React, { useState } from "react";

export default function NewPost(userId) {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API_URL}/post/`, {
      message,
      author: userId,
    });
    setMessage("");
  };

  return (
    <form onSubmit={(e) => handleForm(e)} className="new-post-container">
      <textarea
        placeholder="Quoi de neuf ?"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
