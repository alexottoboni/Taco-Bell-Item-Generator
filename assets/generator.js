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
  console.log(main_text_field);
  main_text_field.innerHTML = generateItem();
}
