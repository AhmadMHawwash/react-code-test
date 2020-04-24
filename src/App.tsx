import React, { FC, useState, useEffect } from "react";
import "./App.scss";
import Circle from "./Atoms/Circle";
import { LOADING_TIME } from "./Constants/time";

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_TIME);
    return () => clearTimeout(timer);
  }, []);

  return <div className="App">{isLoading && <Circle />}</div>;
};

export default App;
