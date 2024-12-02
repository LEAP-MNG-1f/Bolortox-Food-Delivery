"use client";
import { FoodType, MainCourse } from "../MenuPage/MainCourse";

import { Category } from "../MenuPage/Category";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [foodData, setFoodData] = useState([])
  const getFoodData = async () => {
   const response = await fetch("http://localhost:8001/api/food");
   const data = await response.json();
   setFoodData(data.data)
  }
  useEffect (() => {
   getFoodData()
  } , [])
  return (
    <div>
      <Category />
      <MainCourse foods= {foodData}/>
    </div>
  );
}
