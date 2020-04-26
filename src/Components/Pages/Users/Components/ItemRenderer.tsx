import React, { FC } from "react";
import { User } from "../../../../Types";
import ListItem from "../../../Molecules/ListItem";
import Avatar from "../../../Atoms/Avatar";
import "../styles.scss"
interface ItemRendererProps {
  user: User;
}

export const ItemRenderer: FC<ItemRendererProps> = ({ user }) => {
  const { first_name: fn, last_name: ln, avatar: avatarSrc, id } = user;
  const fullname = `${fn} ${ln}`;
  return (
    <ListItem
      key={id}
      className="UsersPage--list-item"
      titleRenderer={() => <span style={{ fontWeight: 600 }}>{fullname}</span>}
      avatarRenderer={() => (
        <Avatar
          src={avatarSrc}
          style={{ marginRight: 25 }}
          name={fullname}
          background="red"
          size="70px"
        />
      )}
    />
  );
};
