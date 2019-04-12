let State = {
  background: "#ffffff",
  border: "#000000",
  defaultBackground: "#ffffff",
  defaultBorder: "#000000"
};

function changeColor(val) {
  State.background = State.border = val;
}

function resetToDefault(el) {
  State.background = State.defaultBackground;
  State.border = State.defaultBorder;
  el.value = "";
}

function submit(event) {
  let inputElement = document.getElementById("color-input");
  let currentValue = inputElement.value;

  switch (event.type) {
    case "keydown":
      switch (event.keyCode) {
        case 13:
          changeColor(currentValue);
          break;
        case 27:
          resetToDefault(inputElement);
      }
      break;
    case "click":
      if (event.target.id.includes("reset")) {
        resetToDefault(inputElement);
      } else {
        changeColor(currentValue);
      }
      break;
  }
}