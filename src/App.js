import React, { useState } from "react";
import NewPost from "./components/NewPost";
import ReadPosts from "./components/ReadPosts";
import Register from "./components/userAccount/Register";
import Login from "./components/userAccount/Login";

export default function App() {
  const [userId, setUserId] = useState("");

  return (
    <div className="app-container">
      <h1>Le forum d'Alcarian</h1>
      <div className="authentification">
        <div className="register">
          <Register />
        </div>
        <div className="connexion">
          <Login />
        </div>
      </div>

      {/* <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div> */}
      <NewPost userId={userId} />
      <ReadPosts userId={userId} />
    </div>
  );
}
