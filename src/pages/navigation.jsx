import React from "react";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../components/elements/ThemeSwitcher";

function Navigation() {
  return (
    <BasicLayout>
      <HeaderTop />
      <div className="b2-block no-border">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              übersicht
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Site Map
            </div>
          </div>
        </div>
        <div className="">
          <div className="list">
            <ul>
              <li>
                <Link to="/" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"
                      ></path>
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Startseite</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/kategorie-liste" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Themen</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/wortschatz-liste" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l4 16l4 -14l4 14l4 -16" />
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Wortschatz</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/uebungen" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.6.58 1.73.01 2.57-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66zm-.56 3.79c0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04 0 .58-.44 1.05-1.04 1.05-.58 0-1.05-.47-1.05-1.05z"></path>
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Übungen</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/saved" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path>
                      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path>
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Gespeichert</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="block-title">Links</div>
          <div className="list">
            <ul>
              <li>
                <Link to="/kontakt" className="item-link item-content">
                  <div className="item-media">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                    </svg>
                  </div>
                  <div className="item-inner">
                    <div className="item-title">Kontakt</div>
                  </div>
                </Link>
              </li>
              
             
            </ul>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export default Navigation;
