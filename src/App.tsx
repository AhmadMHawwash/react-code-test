import { useMachine } from '@xstate/react';
import React, { FC } from "react";
import "./App.scss";
import Circle from "./Atoms/Circle";
import loadingMachine from "./Machines/Loading";

const App: FC = () => {
  const [isLoading] = useMachine(loadingMachine);

  return <div className="App">{isLoading.matches("active") && <Circle />}</div>;
};

export default App;
