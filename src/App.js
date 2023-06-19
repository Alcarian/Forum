import React, { useContext, useState } from "react";
import NewPost from "./components/NewPost";
import ReadPosts from "./components/ReadPosts";
import Register from "./components/userAccount/Register";
import Login from "./components/userAccount/Login";
import Logout from "./components/userAccount/Logout";
import LogContext from "../src/components/store/LogContext";

export default function App() {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const logCtx = useContext(LogContext);
  const pseudo = logCtx.pseudoStorage;

  const handleLogin = (password) => {
    setIsLoggedIn(true);
    logCtx.login(userId, password);
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
          {!isRegistered && (
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
          <h3>{"Bonjour " + {}}</h3>
        </div>
      )}
      <NewPost userId={userId} />
      <ReadPosts userId={userId} />
    </div>
  );
}
