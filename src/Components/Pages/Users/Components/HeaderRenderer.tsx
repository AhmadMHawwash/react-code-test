import React, { FunctionComponent } from "react";
import "../styles.scss";

interface HeaderRendererProps {}

export const HeaderRenderer: FunctionComponent<HeaderRendererProps> = () => {
  return <div className="UsersPage--Header">Users</div>;
};
