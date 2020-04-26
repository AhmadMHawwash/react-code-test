import { MachineConfig, NullEvent } from "xstate";
import { LOADING_TIME } from "../../Constants/time";

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
        [LOADING_TIME]: "inactive",
      },
    },
  },
};
