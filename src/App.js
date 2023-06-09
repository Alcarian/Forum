import React, { useState } from "react";
import NewPost from "./components/NewPost";
import ReadPosts from "./components/ReadPosts";

export default function App() {
  const [userId, setUserId] = useState("");

  return (
    <div className="app-container">
      <h1>Le forum d'Alcarian</h1>
      <div className="login">
        <h3>Bonjour</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <NewPost userId={userId} />
      <ReadPosts userId={userId} />
    </div>
  );
}
