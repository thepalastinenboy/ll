import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./logo";
import { CenterdMenu } from "../menus/CenterdMenu";
import { ThemeSwitcher1 } from "./themeSwitcher1";
import { MenuButton } from "./menuButton";
import { TopMenu } from "./topMenu";

export const HeaderTop = (props) => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [isScrolled, setScrollingUp] = useState("false");

  useEffect(() => {
    setScrollingUp(!isScrolled);
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      console.log(isActive);
      if (
        currentScroll > 100 &&
        isActive === true &&
        currentScroll - lastScroll > 0
      ) {
        setScrollingUp(isScrolled);
      } else {
        setScrollingUp(!isScrolled);
      }
      lastScroll = currentScroll;
    });
  }, []);
  return (
    <>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <Link className="link icon-only" to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
