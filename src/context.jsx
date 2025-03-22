import React, { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [roth, setroth] = useState("");
  const church = useRef(window.location.pathname);
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  const handleTest = () => {
    if (location.pathname === "/") {
      setroth("");
    }
    if (location.pathname === "/amsterdam") {
      setroth("ams");
      setOpenMenu(false);
    }
    if (
      location.pathname === "/rotterdam" ||
      location.pathname === "/rotterdam/sundays"
    ) {
      setroth("roth");
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    handleTest();
  }, [location]);

  return (
    <AppContext.Provider
      value={{ roth, setroth, openMenu, setOpenMenu, church, handleTest }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
