import React, { useState, useEffect } from "react";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-light"
  );

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("theme-light", "theme-dark", "color-theme-black", "color-theme-white");
    body.classList.add(theme, theme === "theme-light" ? "color-theme-black" : "color-theme-white");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "theme-light") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  };

  return (
    <div className="theme-switcher">
      <div onClick={handleThemeChange}>
        {theme === "theme-light" ? (
          <WiMoonAltWaningCrescent2 />
        ) : (
          <WiMoonAltWaningCrescent2 className="dark-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
