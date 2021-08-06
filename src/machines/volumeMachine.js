import { createMachine } from "xstate";

export const volumeMachine = createMachine({
  id: "volumeMachine",
  initial: "min",

  states: {
    min: {
      on: {
        TURN_UP: "two",
      },
    },
    two: {
      on: {
        TURN_UP: "three",
        TURN_DOWN: "min",
      },
    },
    three: {
      on: {
        TURN_UP: "four",
        TURN_DOWN: "two",
      },
    },
    four: {
      on: {
        TURN_UP: "max",
        TURN_DOWN: "three",
      },
    },
    max: {
      on: {
        TURN_DOWN: "four",
      },
    },
  },
});
