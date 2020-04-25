import React, { FC } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import store from "./Store/configuration";
import { Users } from "./Components/Pages/Users";
import { useMachine } from "@xstate/react";
import getMachine from "./Machines/LoadingFor3Sec";
import Circle from "./Components/Atoms/Circle";

const App: FC = () => {
  const [isLoading] = useMachine(getMachine("default_main_loader"));

  return (
    <div className="App">
      <Provider store={store}>
        {isLoading.matches("active") ? (
          <Circle />
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Users />
          </div>
        )}
      </Provider>
    </div>
  );
};

export default App;
