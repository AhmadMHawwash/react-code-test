import { createMachine } from "xstate";
import { configuration } from "./configuration";

const machine = createMachine(configuration);

const machines: Record<string, typeof machine> = {};
export const getMachine: (key: string) => typeof machine = (key: string) => {
  machines[key] = machines[key] || createMachine(configuration);
  return machines[key];
};
