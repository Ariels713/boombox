import { createMachine } from "xstate";
const boomBoxMachine = createMachine({
  id: "boomBoxMachine",
  initial: "loading",
  context: {
    tape: "",
  },
  states: {
    loading: {
      after: {
        2000: { target: "boomBox" },
      },
    },
    boomBox: {
      on: {
        PLAY_MUSIC: "play",
        REWIND_MUSIC: "rewind",
        STOP_MUSIC: "stop",
        TURN_OFF: "power",
        FAST_FORWARD: "forward",
      },
    },
    play: {
      on: {
        REWIND_MUSIC: "rewind",
        STOP_MUSIC: "stop",
        TURN_OFF: "power",
        FAST_FORWARD: "forward",
      },
    },
    stop: {
      on: {
        PLAY_MUSIC: "play",
        REWIND_MUSIC: "rewind",
        TURN_OFF: "power",
        FAST_FORWARD: "forward",
      },
    },

    rewind: {
      after: {
        5000: { target: "stop" },
      },
      // on: {
      //   PLAY_MUSIC: "play",
      //   STOP_MUSIC: "stop",
      //   TURN_OFF: "power",
      //   FAST_FORWARD: "forward"
      // }
    },
    forward: {
      after: {
        5000: { target: "stop" },
      },
      // on: {
      //   PLAY_MUSIC: "play",
      //   STOP_MUSIC: "stop",
      //   TURN_OFF: "power",
      //   REWIND_MUSIC: "rewind",
      // },
    },
    power: {
      on: {
        TURN_ON: "boomBox",
      },
    },
  },
});

export default boomBoxMachine;
