export const GOALMESSAGES = {
      0 : "The goal has yet to be processed by the action server!",
      1 : "The goal is currently being processed by the action server!",
      2 : "The goal received a cancel request after it started executing and has since completed its execution!",
      3 : "The goal was achieved successfully by the action server!",
      4 : "The goal was aborted during execution by the action server due to some failure!",
      5 : "The goal was rejected by the action server without being processed, because the goal was unattainable or invalid!",
      6 : "The goal received a cancel request after it started executing and has not yet completed execution!",
      7 : "The goal received a cancel request before it starte_viewerd executing, but the action server has not yet confirmed that the goal is canceled!",
      8 : "The goal received a cancel request before it started executing and was successfully cancelled!",
      9 : "An action client can determine that a goal is LOST. This should not be sent over the wire by an action server!"
}
