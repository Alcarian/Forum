import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Register() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorInput, setErrorInput] = useState("");
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

  const handleRegister = async (e) => {
    e.preventDefault();

    if (pseudo.trim().length === 0 || password.trim().length === 0) {
      setErrorInput({
        title: "Un ou plusieurs champs sont vide",
        message: "Merci de remplir tous les champs",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/post/register`,
        {
          pseudo,
          password,
        }
      );

      if ((response.status = 201)) {
        setErrorMessage(response.data.message);
        setPseudo("");
        setPassword("");
        setErrorInput("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Erreur d'enregistrement:", error);
      setErrorInput({
        title: "Le pseudo existe déjà !!",
        message: "Changez votre pseudo.",
      });
    }
  };

  return (
    <div className="register-content">
      <h2>S'enregistrer</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enregistrer</button>
        {errorMessage && isVisible && (
          <p className="error-message">{errorMessage}</p>
        )}
        {errorInput && (
          <div className="error-input-message">
            <p>{errorInput.title}</p>
            <p>{errorInput.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
