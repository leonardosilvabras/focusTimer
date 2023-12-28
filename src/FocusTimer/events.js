import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    } else actions[action]();
  });
}

export function setSeconds() {
  console.log("sim");

  el.seconds.addEventListener("focus", () => {
    el.seconds.textContent = "";
  });

  el.seconds.onkeypress = (event) => /\d/.test(event.key);

  el.seconds.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;
    
    state.seconds = time;

    updateDisplay();
    el.seconds.removeAttribute("contenteditable");
  });
}

export function setMinutes() {
  console.log("nao");

  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
