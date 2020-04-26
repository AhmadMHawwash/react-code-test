import React, { FC } from "react";

interface FooterElementRendererProps {
  isLastPage: boolean;
}

export const FooterElementRenderer: FC<FooterElementRendererProps> = ({
  isLastPage,
}) => {
  return (
    <div style={{ padding: 30 }}>
      {isLastPage ? "Loading..." : "No more to show"}
    </div>
  );
};
