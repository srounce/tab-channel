import { BroadcastChannel } from "./BroadcastChannel";

export const applyPolyfill = global => {
  return (global.BroadcastChannel =
    global.BroadcastChannel || BroadcastChannel);
};
