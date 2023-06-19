import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { LogContextProvider } from "./components/store/LogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LogContextProvider>
      <App />
    </LogContextProvider>
  </React.StrictMode>
);
