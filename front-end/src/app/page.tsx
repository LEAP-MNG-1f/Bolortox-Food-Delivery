"use client";

import { useEffect } from "react";
import HomePage from "./_components/pages/HomePage";
import MenuPage from "./_components/pages/MenuPage";
import { FoodType } from "./types";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const foodMockData: FoodType[] = [
    {
      _id: "1",
      name: "Egg Toast",
      image:
        "image.png",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
    {
      _id: "2",
      name: "Tsuivan",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
    {
      _id: "3",
      name: "Suutei Tsai",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
  ];

  return (
    <div>
      <HomePage />
      <MenuPage foods={foodMockData} />
    </div>
  );
}
