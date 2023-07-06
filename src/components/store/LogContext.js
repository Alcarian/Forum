import { createContext, useEffect, useState } from "react";

const defaultValue = {
  pseudo: "",
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const LogContext = createContext(defaultValue);

// Le context provider
export const LogContextProvider = (props) => {
  // stockage du pseudo
  const [pseudo, setPseudo] = useState("");

  useEffect(() => {
    // Récupérer la valeur du pseudo depuis le local storage
    const storedPseudo = localStorage.getItem("pseudo");
    if (storedPseudo) {
      setPseudo(storedPseudo);
    }
  }, []);

  // Fonction pour mettre à jour le pseudo dans le state
  const loginHandler = (pseudo) => {
    setPseudo(pseudo);
  };

  // faire passer le pseudo a null pour se déconnecter
  const logOutHandler = () => {
    setPseudo(null);
    // supprimer la donnée du local storage
    localStorage.clear();
  };

  // Présence pseudo
  const userIsLoggedIn = !!pseudo;

  const contextValue = {
    pseudo: pseudo,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  return (
    <LogContext.Provider value={contextValue}>
      {props.children}
    </LogContext.Provider>
  );
};

export default LogContext;
