import React, { FC, CSSProperties } from "react";

interface ListItemProps {
  titleRenderer: () => React.ReactNode;
  avatarRenderer: () => React.ReactNode;
  subTitleRenderer?: () => React.ReactNode;
  style?: CSSProperties;
}

export const ListItem: FC<ListItemProps> = ({
  titleRenderer,
  avatarRenderer,
  subTitleRenderer,
  style,
}) => {
  return (
    <div style={style} className="list-item">
      {avatarRenderer()}
      {titleRenderer()}
    </div>
  );
};
