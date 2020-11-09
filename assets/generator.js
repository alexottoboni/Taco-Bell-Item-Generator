const prefixes = [
    "Breakfast",
    "BLT",
    "Fiery",
    "Locos",
    "Cool Ranch",
    "Nacho Cheese",
    "Crunchy",
    "Beefy",
    "Fritos",
    "Smothered",
    "Cheesy",
    "Fiesta",
    "XXL",
    "Triple Layer",
    "Spicy",
    "Cheddar",
    "Grilled",
    "Baja",
    "Naked",
  ],
  meats = ["Chicken", "Beef", "Bean", "Doritos", "Tofu"],
  items = [
    "Taco",
    "Burrito",
    "Gordita",
    "Salad",
    "Nacho",
    "Chalupa",
    "Crunchwrap",
    "Mexican Pizza",
    "Empanada",
    "Enchirito",
    "Quesadilla",
  ],
  suffixes = ["Supreme", "Cantina", "Slider", "Box", "12 pack", "Crunch"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generateItem() {
  return [prefixes, meats, items, suffixes].map(getRandomElement).join(" ");
}

function setItemOnscreen() {
  const textElement = document.getElementById("tacobell-item");
  textElement.style.animation = "none";
  setTimeout(function () {
    textElement.style.animation = "";
  }, 10);

  textElement.innerHTML = generateItem();
  textElement.style.fontSize = "60pt";
  textElement.style.color = "rgb(40, 40, 40)";

  if (textElement.innerHTML.indexOf("XXL") !== -1) {
    textElement.style.fontSize = "100pt";
  }

  if (textElement.innerHTML.indexOf("Fiery") !== -1) {
    textElement.style.color = "rgb(240, 0, 0)";
  }
}
