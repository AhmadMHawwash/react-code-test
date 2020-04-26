import React, { FunctionComponent } from "react";

interface HeaderRendererProps {

}

export const HeaderRenderer: FunctionComponent<HeaderRendererProps> = () => {
  return (
    <div
      style={{
        height: 75,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(241 241 241)",
        fontWeight: 600,
      }}
    >
      Users
    </div>
  );
};
