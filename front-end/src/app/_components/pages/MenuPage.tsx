import { FoodType, MainCourse } from "../MenuPage/MainCourse";

import { Category } from "../MenuPage/Category";

export default function MenuPage() {
  const foodsMockData : FoodType[] = [
    {
      _id: "1",
      name: "Cheeseburger",
      image: "https://example.com/images/cheeseburger.jpg",
      price: 8.99,
      ingredient: 
      " Beef patty, Cheese, Lettuce, Tomato, Pickles, Onions, Ketchup, Mustard"
      ,
    },
    {
      _id: "2",
      name: "Margherita Pizza",
      image: "https://example.com/images/margherita-pizza.jpg",
      price: 12.49,
      ingredient: 
      "Tomato sauce, Mozzarella cheese, Fresh basil, Olive oil"

      ,
    },
    {
      _id: "3",
      name: "Spaghetti Bolognese",
      image: "https://example.com/images/spaghetti-bolognese.jpg",
      price: 15.99,
      ingredient: 
      "Spaghetti, Ground beef, Tomato sauce, Onion, Garlic, Parmesan cheese"
    },
    {
      _id: "4",
      name: "Caesar Salad",
      image: "https://example.com/images/caesar-salad.jpg",
      price: 7.49,
      ingredient: 
       "Romaine lettuce, Caesar dressing, Croutons, Parmesan cheese, Chicken breast (optional)"
    },
    {
      _id: "5",
      name: "Chicken Tacos",
      image: "https://example.com/images/chicken-tacos.jpg",
      price: 9.99,
      ingredient: 
  "Grilled chicken, Taco shell, Lettuce, Tomato, Cheese, Sour cream, Salsa"
    },
    {
      _id: "6",
      name: "Vegetable Stir-fry",
      image: "https://example.com/images/vegetable-stir-fry.jpg",
      price: 10.49,
      ingredient: 
       
      "Broccoli, Carrots, Bell peppers, Onions, Soy sauce, Garlic, Tofu (optional), Rice"
    },
    {
      _id: "7",
      name: "Grilled Salmon",
      image: "https://example.com/images/grilled-salmon.jpg",
      price: 18.99,
      ingredient:"Salmon fillet, Lemon, Garlic, Olive oil, Herbs (dill, parsley), Salt, Pepper"
    },
    {
      _id: "8",
      name: "Buffalo Wings",
      image: "https://example.com/images/buffalo-wings.jpg",
      price: 11.99,
      ingredient: "Chicken wings, Buffalo sauce, Blue cheese dressing, Celery, Carrots"
    },
    {
      _id: "9",
      name: "Pasta Carbonara",
      image: "https://example.com/images/pasta-carbonara.jpg",
      price: 14.49,
      ingredient:"Spaghetti, Eggs, Pancetta, Parmesan cheese, Black pepper, Garlic"
    },
    {
      _id: "10",
      name: "Chocolate Cake",
      image: "https://example.com/images/chocolate-cake.jpg",
      price: 5.99,
      ingredient:"Flour, Cocoa powder, Sugar, Eggs, Butter, Vanilla extract, Baking soda, Milk"
    },
  ];

  return (
    <div>
      <Category />
      <MainCourse foods = {foodsMockData}/>
    </div>
  );
}
