import React, { FC, CSSProperties } from "react";
import cx from "classnames";

interface ListItemProps {
  titleRenderer: () => React.ReactNode;
  avatarRenderer: () => React.ReactNode;
  subTitleRenderer?: () => React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({
  titleRenderer,
  avatarRenderer,
  subTitleRenderer,
  style,
  className
}) => {
  return (
    <div style={style} className={className}>
      {avatarRenderer()}
      {titleRenderer()}
    </div>
  );
};
