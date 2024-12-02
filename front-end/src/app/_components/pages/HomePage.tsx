import { useEffect, useState } from "react";
import { HomePageBody } from "../HomePage/HomePageBody";
import { HomePageInfo } from "../HomePage/HomePageInfo";
import { FoodType, MainCourse } from "../MenuPage/MainCourse";

export default function HomePage() {
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
      <HomePageBody />
      <MainCourse foods= {foodData} />
      <HomePageInfo />
    </div>
  );
}
