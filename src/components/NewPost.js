import axios from "axios";
import React, { useEffect, useState } from "react";

export default function NewPost({ pseudo }) {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (errorMessage) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  const handleForm = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      setErrorMessage("Impossible d'envoyer un champ vide !");
      return;
    }

    axios.post(
      `${process.env.REACT_APP_API_URL}/post/`,
      {
        message,
        author: pseudo,
      },
      {
        withCredentials: true,
      }
    );
    setMessage("");
  };

  return (
    <div className="new-post">
      <form onSubmit={(e) => handleForm(e)} className="new-post-container">
        <textarea
          placeholder="Quoi de neuf ?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      {errorMessage && isVisible && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}
