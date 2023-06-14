import React from "react";

export default function Login() {
  return (
    <div className="login-content">
      <h2>Se connecter</h2>
      <form>
        <input type="text" placeholder="Pseudo" />
        <input type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
      </form>
    </div>
  );
}
