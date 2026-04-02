const items = [":3", "OwO", ">:3"];
const el = document.getElementById("emotes");
let i = 0; // Start at 0 to catch the first item

setInterval(() => {
  el.textContent = items[i % items.length];
  i++; // Increment i so the next cycle uses the next index
}, 250);