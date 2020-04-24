import { createMachine } from "xstate";
import { configuration } from "./configuration";

export const machine = createMachine(configuration)