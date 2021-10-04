const keyboard = document.querySelector(".keyboard");
const textarea = document.querySelector("textarea");

const properties = {
  shift: false,
  capsLock: false,
};

const keyLayout = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Back Space",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "Caps Lock",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "-",
  "_",
  "Shift",
  "Space",
  "OK",
];

keyLayout.forEach((key) => {
  const keyElement = document.createElement("button");
  keyElement.setAttribute("type", "button");
  keyElement.classList.add("keyboard_key");
  const node = document.createTextNode(key);
  keyElement.appendChild(node);
  keyboard.appendChild(keyElement);

  switch (key) {
    case "Back Space":
      keyElement.classList.add("backSpace-key");

      keyElement.addEventListener("click", () => {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      });
      break;

    case "Shift":
      keyElement.classList.add("shift-key");

      keyElement.addEventListener("click", () => {
        properties.shift = !properties.shift;
      });
      break;

    case "Caps Lock":
      keyElement.classList.add("capsLock-key");

      keyElement.addEventListener("click", () => {
        toggleCapsLock();
      });
      break;

    case "Space":
      keyElement.classList.add("space-key");

      keyElement.addEventListener("click", () => {
        textarea.value += " ";
      });
      break;

    case "OK":
      keyElement.classList.add("ok-key");
      keyElement.addEventListener("click", () => {
        alert(textarea.value);
      });
      break;

    default:
      keyElement.addEventListener("click", () => {
        propertiesCheck(key);
      });
      break;
  }
});

const propertiesCheck = (key) => {
  if (properties.capsLock && !properties.shift) {
    textarea.value += key.toUpperCase();
  } else if (properties.capsLock && properties.shift) {
    textarea.value += key.toLowerCase();
    properties.shift = false;
  } else if (properties.shift && !properties.capsLock) {
    textarea.value += key.toUpperCase();
    properties.shift = false;
  } else if (properties.shift && !properties.capsLock) {
    textarea.value += key.toUpperCase();
  } else {
    textarea.value += key.toLowerCase();
  }
};

const toggleCapsLock = () => {
  properties.capsLock = !properties.capsLock;
  const buttons = document.querySelectorAll("button");

  for (const btn of buttons) {
    const txtContent = btn.textContent;
    btn.textContent = properties.capsLock ? txtContent.toUpperCase() : txtContent.toLowerCase();
  }
};
