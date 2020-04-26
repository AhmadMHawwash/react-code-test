import React, { FC } from "react";
import "../styles.scss";

interface HeaderRendererProps {}

export const HeaderRenderer: FC<HeaderRendererProps> = () => {
  return <div className="UsersPage--Header">Users</div>;
};
