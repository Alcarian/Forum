import React from "react";

export default function Register() {
  return (
    <div className="register-content">
      <h2>S'enregistrer</h2>
      <form>
        <input type="text" placeholder="Pseudo" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit" onClick={() => {}}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}
