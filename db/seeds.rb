foods = ['Apple', 'Kale', 'Whiskey', 'Beef']

foods.each{ |food| Food.create(name: food, description: "I am a yummy #{food}.") }
