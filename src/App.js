import React, { useContext, useState } from "react";
import NewPost from "./components/NewPost";
import ReadPosts from "./components/ReadPosts";
import Register from "./components/userAccount/Register";
import Login from "./components/userAccount/Login";
import Logout from "./components/userAccount/Logout";
import LogContext from "../src/components/store/LogContext";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const logCtx = useContext(LogContext);
  const isLoggedIn = logCtx.isLoggedIn;

  const handleLogin = (password) => {
    logCtx.login(password);
  };

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="app-container">
      <h1>Le forum d'Alcarian</h1>
      {isLoggedIn && <Logout />}
      <div className="authentification">
        <div className="register">
          {!isRegistered && !isLoggedIn && (
            <Register onRegisterSuccess={handleRegisterSuccess} />
          )}
        </div>
        <div className="connexion">
          {!isLoggedIn && (
            <Login onLogin={(password) => handleLogin(password)} />
          )}
        </div>
      </div>
      {isLoggedIn && <p className="connected">Vous êtes connecté !</p>}
      {!isLoggedIn && <p className="disconnected">Vous êtes déconnecté !</p>}
      {isLoggedIn && (
        <div className="login">
          <h3>Bonjour </h3>
          <h2>{logCtx.pseudo}</h2>
        </div>
      )}
      {isLoggedIn && <NewPost pseudo={logCtx.pseudo} />}
      <ReadPosts pseudo={logCtx.pseudo} />
    </div>
  );
}
