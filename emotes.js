const items = [":3", "OwO", ">:3"];
const el = document.getElementById("emotes");
let i = 0;

setInterval(() => {
  el.textContent = items[i % items.length];
  i++;
}, 250);