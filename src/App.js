import React from "react";
import NewPost from "./components/NewPost";

export default function App() {
  return (
    <div>
      <h1>Le forum d'Alcarian</h1>
      <div>
        <h3>Qu'avez vous à dire ?</h3>
      </div>
      <NewPost />
    </div>
  );
}
