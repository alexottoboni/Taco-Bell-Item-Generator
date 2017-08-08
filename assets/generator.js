const items = ['Taco', 'Burrito', 'Gordita',
               'Salad', 'Nacho', 'Chalupa',
               'Crunchwrap', 'Mexican Pizza', 'Empanada',
               'Enchirito', 'Quesadilla'],
      meats = ['Chicken', 'Beef', 'Bean', 'Doritos'],
      prefixes = ['Breakfast', 'BLT', 'Fiery',
                  'Locos', 'Cool Ranch', 'Nacho Cheese',
                  'Crunchy', 'Beefy', 'Fritos', 'Smothered',
                  'Cheesy', 'Fiesta', 'XXL',
                  'Triple Layer', 'Spicy', 'Cheddar',
                  'Grilled', 'Baja'],
      suffixes = ['Supreme', 'Cantina', 'Slider', 'Box', '12 pack', 'Crunch'];

const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

function generateItem() {
  return [prefixes, meats, items, suffixes].map(getRandomElement).join(' ');
}

function setItemOnscreen() {
  const main_text_field = document.getElementById('tacobell-item');
  main_text_field.innerHTML = generateItem();
  if (main_text_field.innerHTML.indexOf("XXL") !== -1) {
    main_text_field.style.fontSize = "100pt";
  } else {
    main_text_field.style.fontSize = "60pt";
  }

  if (main_text_field.innerHTML.indexOf("Fiery") !== -1) {
    main_text_field.style.color = "rgb(240, 0, 0)";
  } else {
    main_text_field.style.color = "rgb(40, 40, 40)";
  }

  console.log(main_text_field);
  main_text_field.style.animation = 'none';
  setTimeout(function() {
    main_text_field.style.animation = '';
  }, 10);
}
