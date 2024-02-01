import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isclicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  // const [cartCencel, setCartCencel] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const handleClose = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  // const handleNavbar = (active) => {
  //   setCartCencel(active);
  //   console.log("active: ", active);
  // };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isclicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        currentMode,
        setCurrentMode,
        // cartCencel,
        // setCartCencel: handleNavbar,
        handleClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
