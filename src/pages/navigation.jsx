import React from 'react';
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";

function Navigation() {
  return (
    <BasicLayout>
      <HeaderTop />
    <div className="newsman-block no-border">
      <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">Navigation</div>
          <div className="newsman-opacity block-title no-margin newsman-block-subtitle">Site Map</div>
        </div>
      </div>
      <div className="">
        <div className="list">
          <ul>
            <li>
              <a href="/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                <div className="item-inner">
                  <div className="item-title">Startseite</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/homethird/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <div className="item-inner">
                  <div className="item-title">Themen</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/notfound/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
                <div className="item-inner">
                  <div className="item-title">Wortschatz</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/single/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
                <div className="item-inner">
                  <div className="item-title">Kontakt</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="block-title">List Of Element</div>
        <div className="list">
          <ul>
            <li>
              <a href="/element1/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                <div className="item-inner">
                  <div className="item-title">Elemen Full BG</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/element2/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                <div className="item-inner">
                  <div className="item-title">Element List reverse</div>
                </div>
              </a>
            </li>
            <li>
              <a href="/element3/" className="item-link item-content">
                <div className="item-media"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <div className="item-inner">
                  <div className="item-title">Element Full BG 2</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </BasicLayout>
  );
}

export default Navigation;