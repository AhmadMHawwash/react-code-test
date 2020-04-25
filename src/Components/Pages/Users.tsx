import { useDebounceFn } from "@umijs/hooks";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Ducks/users/api";
import { selectIsLastPage, selectPage, selectUsers } from "../../Ducks/users/selectors";
import { User } from "../../Types";
import Avatar from "../Atoms/Avatar";
import ListItem from "../Molecules/ListItem";
import List from "../Organisms/List";

const itemRenderer = (user: User) => {
  const { first_name: fn, last_name: ln, avatar: avatarSrc, id } = user;
  const fullname = `${fn} ${ln}`;
  return (
    <ListItem
      key={id}
      style={{
        display: "flex",
        alignItems: "center",
        margin: 10,
      }}
      titleRenderer={() => fullname}
      avatarRenderer={() => (
        <Avatar
          src={avatarSrc}
          style={{ marginRight: 5 }}
          name={fullname}
          background="red"
        />
      )}
    />
  );
};

const footerElementRenderer = (isLastPage: boolean) => {
  return <div>{isLastPage ? "Loading..." : "No more to show"}</div>;
};
const headerRenderer = () => {
  return <div>Users</div>;
};

interface Users {}

export const Users: FC<Users> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, []);

  const isLastPage = useSelector(selectIsLastPage);
  const page = useSelector(selectPage);
  const users = useSelector(selectUsers);
  const { run: debouncedFetchUsers } = useDebounceFn(() => dispatch(fetchUsers(page)), 200);

  return (
    <>
      <List<User>
        onBottom={debouncedFetchUsers}
        bottomThreshold={0}
        itemRenderer={itemRenderer}
        headerRenderer={headerRenderer}
        footerElementRenderer={() => footerElementRenderer(isLastPage)}
        items={users}
        containerStyles={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          flex: 1,
        }}
        listStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flexStart",
          height: 200,
          overflow: "auto",
        }}
      />
    </>
  );
};

export default Users;
