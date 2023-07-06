import React, { useContext } from "react";
import LogContext from "../store/LogContext";

export default function Logout() {
  const logCtx = useContext(LogContext);

  const handleLogout = () => {
    logCtx.logout();
  };

  return (
    <div className="logout">
      <form onSubmit={handleLogout}>
        <button type="submit">Se déconnecter</button>
      </form>
    </div>
  );
}
