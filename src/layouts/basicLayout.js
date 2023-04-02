import React from "react";
import { HeaderTop, Footer ,TopMenu } from "../components";
import styled from "styled-components";

const Layout = styled.div`
      height: calc(100% - var(--f7-appbar-app-offset,0px));
`;

export const BasicLayout = (props) => {
  return (
    <Layout className="view view-main view-init safe-areas">
      <TopMenu  />
      <div className="page page-home page-current">
        <div className="page-content">
 
      {props.children}
      {/* {props.footer && <Footer />} */}
      <div id="fix-f7"></div>
        </div>
      </div>
    </Layout>
  );
};
