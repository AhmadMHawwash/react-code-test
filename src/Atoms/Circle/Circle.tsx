import React, { FC, CSSProperties } from "react";
import "./Styles.scss";

interface CircleProps {
  style?: CSSProperties;
  className?: string;
}

export const Circle: FC<CircleProps> = ({ style, className }) => {
  return (
    <div id="container">
      <div className="solid-dot"></div>
      <div className="fading-circle"></div>
      <div className="fading-circle" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};
