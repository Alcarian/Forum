import React, { useContext } from "react";
import LogContext from "../store/LogContext";

export default function Logout() {
  const logCtx = useContext(LogContext);

  const handleLogout = () => {
    logCtx.logout();
  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}
