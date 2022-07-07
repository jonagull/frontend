import React from "react";
import styledComponents from "styled-components";

const SidebarWrapper = styledComponents.div`
    background-color: white;
    border: 1px solid black;
`;

export const Sidebar = () => {
  return (
    <React.Fragment>
      <SidebarWrapper>
        <div>
          <h1>kek</h1>
        </div>
      </SidebarWrapper>
    </React.Fragment>
  );
};
