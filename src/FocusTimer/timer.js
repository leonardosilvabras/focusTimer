import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

export function countdown() {
  if (!state.isRunning) return;
  else {
    let minutes = Number(el.minutes.textContent),
      seconds = Number(el.seconds.textContent);

    if (seconds > 0) seconds--;
    else {
      seconds = 59;
      if (minutes > 0) minutes--;
      else {
        reset();
        return;
      }
    }

    updateDisplay(minutes, seconds);
    setTimeout(() => countdown(), 1000);
  }
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
