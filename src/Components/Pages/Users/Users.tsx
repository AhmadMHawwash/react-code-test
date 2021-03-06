import { useDebounceFn } from "@umijs/hooks";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Ducks/users/api";
import {
  selectIsLastPage,
  selectPage,
  selectUsers,
} from "../../../Ducks/users/selectors";
import { User } from "../../../Types";
import List from "../../Organisms/List";
import { FooterElementRenderer } from "./Components/FooterElementRenderer";
import { HeaderRenderer } from "./Components/HeaderRenderer";
import { ItemRenderer } from "./Components/ItemRenderer";
import "./styles.scss";

interface UsersPageProps {}

export const Users: FC<UsersPageProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, []);

  const isLastPage = useSelector(selectIsLastPage);
  const page = useSelector(selectPage);
  const users = useSelector(selectUsers);

  const { run: debouncedFetchUsers } = useDebounceFn(
    () => dispatch(fetchUsers(page)),
    200
  );

  return (
    <List<User>
      onBottom={debouncedFetchUsers}
      bottomThreshold={0}
      itemRenderer={(item) => <ItemRenderer user={item} />}
      headerRenderer={() => <HeaderRenderer />}
      footerElementRenderer={() => (
        <FooterElementRenderer isLastPage={isLastPage} />
      )}
      items={users}
      containerClass="UsersPage--container"
      listClass="UsersPage--list"
    />
  );
};

export default Users;
