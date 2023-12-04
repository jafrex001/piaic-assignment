function sandwichmaker(ingredients: string[]){
  
  ingredients.forEach(ingredient => {
    console.log(`The sandwich contains ${ingredient}.`);
  });
};

sandwichmaker(["Bun, Lettuce, Tomato, Bun"]);
sandwichmaker(["Bun, Lettuce, Bun"]);
sandwichmaker(["Bun, Lettuce, Tomato, Chicken, Saunce, Bun"]);
