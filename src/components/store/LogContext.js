import { createContext, useState, useEffect } from "react";

const defaultValue = {
  pseudoStorage: "",
  passwordStorage: null,
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const LogContext = createContext(defaultValue);

export const LogContextProvider = (props) => {
  const [pseudoStorage, setPseudoStorage] = useState("");
  const [passwordStorage, setPasswordStorage] = useState("");

  useEffect(() => {
    const storedPseudo = localStorage.getItem("pseudo");
    const storedPassword = localStorage.getItem("password");
    setPseudoStorage(storedPseudo);
    setPasswordStorage(storedPassword);
  }, []);

  console.log("***pseudostorage, passwordstorage****");
  console.log(pseudoStorage, passwordStorage);

  useEffect(() => {
    if (pseudoStorage && passwordStorage) {
      localStorage.setItem("pseudo", pseudoStorage);
      localStorage.setItem("password", passwordStorage);
    } else {
      localStorage.removeItem("pseudo");
      localStorage.removeItem("password");
    }
  }, [pseudoStorage, passwordStorage]);

  const loginHandler = (pseudo, password) => {
    setPseudoStorage(pseudo);
    setPasswordStorage(password);
  };

  const logOutHandler = () => {
    setPseudoStorage("");
    setPasswordStorage("");
  };

  const userIsLoggedIn = !!pseudoStorage && pseudoStorage !== "";

  const contextValue = {
    pseudoStorage: pseudoStorage,
    passwordStorage: passwordStorage,
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
