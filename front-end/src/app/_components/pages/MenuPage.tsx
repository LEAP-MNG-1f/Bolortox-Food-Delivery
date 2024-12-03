"use client";
import { FoodType, MainCourse } from "../MenuPage/MainCourse";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [foodData, setFoodData] = useState([]);
  const [category, setCategory] = useState([]);

  const getFoodData = async () => {
    const response = await fetch("http://localhost:8001/api/food");
    const data = await response.json();
    setFoodData(data.data);
  };
  const getCategoryData = async () => {
    const response = await fetch("http://localhost:8001/api/category");
    const data = await response.json();
    setCategory(data.data);
  };
  useEffect(() => {
    getFoodData();
    getCategoryData();
  }, []);
  return (
    <div>
      <MainCourse categories={category} foods={foodData} />
    </div>
  );
}
