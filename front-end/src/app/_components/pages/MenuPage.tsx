"use client";
import { FoodType, MainCourse } from "../MenuPage/MainCourse";

import { Category } from "../MenuPage/Category";

export default function MenuPage() {
  return (
    <div>
      <Category />
      <MainCourse food={foodData} />
    </div>
  );
}
