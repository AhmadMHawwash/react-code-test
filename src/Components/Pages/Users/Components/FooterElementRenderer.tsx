import React, { FunctionComponentElement, FunctionComponent } from "react";

interface FooterElementRendererProps {
  isLastPage: boolean;
}

export const FooterElementRenderer: FunctionComponent<FooterElementRendererProps> = ({
  isLastPage,
}) => {
  return (
    <div style={{ padding: 30 }}>
      {isLastPage ? "Loading..." : "No more to show"}
    </div>
  );
};
