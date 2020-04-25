import { useRequest } from "@umijs/hooks";
import { useMachine } from "@xstate/react";
import React, { FC } from "react";
import "./App.scss";
import Circle from "./Atoms/Circle";
import loadingMachine from "./Machines/Loading";
import ListItem from "./Molecules/ListItem";
import List from "./Organisms/List";
import { APIData, User } from "./Types";
import Avatar from "./Atoms/Avatar";

const App: FC = () => {
  const [isLoading] = useMachine(loadingMachine);
  const { data, error, loading } = useRequest<APIData>(
    "https://reqres.in/api/users"
  );

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

  return (
    <div className="App">
      {isLoading.matches("active") ? (
        <Circle />
      ) : (
        data && (
          <List<User>
            itemRenderer={itemRenderer}
            items={data.data}
            containerStyles={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            listStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flexStart",
            }}
          />
        )
      )}
    </div>
  );
};

export default App;
