function generateItem() {

   items = ["Taco", "Burrito", "Gordita",
            "Salad", "Nacho", "Chalupa",
            "Crunchwrap", "Mexican Pizza", "Empanada",
            "Enchirito", "Quesadilla"]
   
   meats = ["Chicken", "Beef", "Bean", "Doritos"]

   prefixes = ["Breakfast", "BLT", "Fiery", 
               "Locos", "Cool Ranch", "Nacho Cheese",
               "Crunchy", "Beefy", "Fritos", "Smothered",
               "Cheesy", "Fiesta", "XXL",
               "Triple Layer", "Spicy", "Cheddar",
               "Grilled", "Baja"]

   suffixes = ["Supreme", "Cantina", "Slider", "Box", "12 pack", "Crunch"]

   var item = prefixes[Math.floor(Math.random()*prefixes.length)] + " " +
             meats[Math.floor(Math.random()*meats.length)] +  " " +
             items[Math.floor(Math.random()*items.length)] + " " +
             suffixes[Math.floor(Math.random()*suffixes.length)]
   return item
}

function setItemOnscreen() {
   main_text_field = document.getElementById("tacobell-item")
   console.log(main_text_field)
   main_text_field.innerHTML = generateItem()
}
