"use client";
import { useState } from "react";
import MenuPage from "../_components/pages/MenuPage";

export default function Page() {
  const [foodData, setfoodData] = useState([]);

  const getFoodData = async () => {
    const response = await fetch("http://localhost:8001/api/food");
    const res = await response.json();
    setfoodData(res.data);
  };
  return (
    <div>
      <MenuPage />
    </div>
  );
}
