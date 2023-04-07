import React ,{ useState }from "react";
import PullToRefresh from "./pulltoRefresh";

import { HeaderTop, Footer ,TopMenu } from "../components";
import styled from "styled-components";

const Layout = styled.div`
      height: calc(100% - var(--f7-appbar-app-offset,0px));
`;

export const BasicLayout = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    fetchData().then(() => {
      setIsLoading(false);
    });
  };

  return (
    <Layout className="view view-main view-init safe-areas">
      <PullToRefresh onRefresh={handleRefresh} isLoading={isLoading}></PullToRefresh>
      <TopMenu />
      <div className="page page-home page-current">
        <div className="page-content">
          
            {props.children}
          <div id="fix-f7"></div>
        </div>
      </div>
    </Layout>
  );
};
