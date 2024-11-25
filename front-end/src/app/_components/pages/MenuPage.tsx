"use client";
import { FoodType, MainCourse } from "../MenuPage/MainCourse";

import { Category } from "../MenuPage/Category";

export default function MenuPage() {
  const foodsMockData: FoodType[] = [
    {
      _id: "1",
      name: "Pizza",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732474813/gkt8okbs4idtwakascq6.png",
      price: 28000,
      ingredient:
        " Grounded beef, Cheese, Lettuce, Tomato, Pepperoni, Onions, Tomato sauce, Mustard sauce",
    },
    {
      _id: "2",
      name: "Food Tart",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732475565/ltedn0pm08rzgjp31ubf.png",
      price: 49000,
      ingredient: "Flour , sugar , butter , pastry cream , fruit",
    },
    {
      _id: "3",
      name: "Smoothie Bowl",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732475763/njmmqprkgiyln6h0p5oe.png",
      price: 25000,
      ingredient:
        "Banana , grape fruit , greek yogurt , dragon fruit , strawberry , blueberry , mint , peanutbutter",
    },
    {
      _id: "4",
      name: "Green Soup",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732475918/iwpe4wwmbvcpeijzyu7x.png",
      price: 35000,
      ingredient:
        "Broccoli, Spinach , Celery , Whipping cream , heavy cream , vegetable stockings , Parsley ,Seeds ",
    },
    {
      _id: "5",
      name: "Fried Chicken",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732476243/rczpxqr2azudmu2lsg0f.png",
      price: 9.99,
      ingredient:
        "Grilled chicken, Soy sauce, Sweet chilli sauce, Tomato, Cheese, Sour cream",
    },
    {
      _id: "6",
      name: "Sandwich",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732476339/g2xgubyh5latv0su0tp7.png",
      price: 15000,
      ingredient:
        "Lettuce, Eggs, Cheese, Onions, Mayo, Chicken, Tomato(optional), Bacon",
    },
    {
      _id: "7",
      name: "Lunch",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732476512/pk94sthafx0hsba3geq3.png",
      price: 65000,
      ingredient:
        "Salmon fillet, Lemon, Garlic, Olive oil, Herbs (dill, parsley), Salt, Pepper",
    },
    {
      _id: "8",
      name: "Apple Pie",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732476589/ljfwfnb3rgqhn4v9hxfg.png",
      price: 24500,
      ingredient: "Flour , Butter , Sugar , Apple sauce ",
    },
    {
      _id: "9",
      name: "Fruit Cake",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732476988/fwt0yemsgwcceigjquhz.png",
      price: 89900,
      ingredient:
        "Flour , Sugar , Baking powder , Eggs , Salt , Heavy cream , Whipping cream , butter , Vanilla extract , Milk",
    },
    {
      _id: "10",
      name: "Oreo Shake",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732477151/nuthws85m7emfmybquzx.png",
      price: 5.99,
      ingredient:
        "Oreo , Vanilla sugar, Milk , Ice , Chocolate syrup , Chocolate Vanilla ice cream",
    },
    {
      _id: "11",
      name: "Chocolate Fudge",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732477472/pnssgyqta3gl0vfeanqt.png",
      price: 15600,
      ingredient: "Chocolate , Milk , Cacao powder , Chocolate syrup",
    },
    {
      _id: "12",
      name: "Yoghurt Oat",
      image:
        "http://res.cloudinary.com/dkm8vqcln/image/upload/v1732477540/m3k0mfbz1xozkoacbhp8.png",
      price: 9900,
      ingredient: "Fruit yoghurt , Oatmeal , fruit",
    },
  ];

  return (
    <div>
      <Category />
      <MainCourse foods={foodsMockData} />
    </div>
  );
}
