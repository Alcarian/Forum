import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LogContext from "../store/LogContext";

export default function Login({ onLogin }) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const logCtx = useContext(LogContext);
  const isLoggedIn = logCtx.isLoggedIn;
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/post/login`,
        {
          pseudo,
          password,
        }
      );

      if (response.status === 200) {
        setErrorMessage(response.data.message);
        setPseudo("");
        setPassword("");
        onLogin();
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Erreur d'authentification:", error);
      setErrorMessage(
        "Une erreur s'est produite lors de l'authentification. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div className="login-content">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
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
        {!isLoggedIn && <button type="submit">Se connecter</button>}
        {errorMessage && isVisible && (
          <p className="error-message">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
