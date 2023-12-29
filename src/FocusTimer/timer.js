import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";


export function countdown() {
  clearTimeout(state.countDownId)

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
        kitchenTimer.play()
        return;
      }
    }

    updateDisplay(minutes, seconds);
    state.countDownId = setTimeout(() => countdown(), 1000);
  }
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
