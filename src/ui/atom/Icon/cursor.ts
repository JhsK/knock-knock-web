export type CursorType =
  | "default"
  | "auto"
  | "help"
  | "wait"
  | "crosshair"
  | "not-allowed"
  | "zoom-in"
  | "grab"
  | "none"
  | "context-menu"
  | "pointer"
  | "progress"
  | "text";

export const cursorStyles = {
  default: "cursor-default",
  auto: "cursor-auto",
  help: "cursor-help",
  wait: "cursor-wait",
  crosshair: "cursor-crosshair",
  "not-allowed": "cursor-not-allowed",
  "zoom-in": "cursor-zoom-in",
  grab: "cursor-grab",
  none: "cursor-none",
  "context-menu": "cursor-context-menu",
  pointer: "cursor-pointer",
  progress: "cursor-progress",
  text: "cursor-text",
};
