import { MachineConfig, NullEvent } from "xstate";

interface LoadingContext {}
interface LoadingSchema {
  states: {
    inactive: {};
    active: {};
  };
}
type LoadingEvent = NullEvent;

export const configuration: MachineConfig<
  LoadingContext,
  LoadingSchema,
  LoadingEvent
> = {
  id: "loading",
  initial: "active",
  states: {
    inactive: {},
    active: {
      after: {
        3000: "inactive",
      },
    },
  },
};
