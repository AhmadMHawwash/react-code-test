import { MachineConfig } from "xstate";

interface LoadingContext {}
interface LoadingSchema {
  states: {
    inactive: {};
    active: {};
  };
}
type LoadingEvent = { type: "TOGGLE" };

export const configuration: MachineConfig<
  LoadingContext,
  LoadingSchema,
  LoadingEvent
> = {
  id: "loading",
  initial: "active",
  states: {
    inactive: {
      on: {
        TOGGLE: "active",
      },
    },
    active: {
      on: {
        TOGGLE: "inactive",
      },
    },
  },
};
