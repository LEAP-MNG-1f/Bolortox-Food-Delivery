"use client";
import * as React from "react";
import { FoodsCart } from "./FoodsCart";
import { Button } from "@mui/material";

type smallCategory = {
  _id: string;
};

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
  categoryId: smallCategory;
};

type CategoryType = {
  _id: string;
  name: string;
};

interface MainCourseProps {
  foods: FoodType[];
  categories: CategoryType[];
}

export const MainCourse: React.FC<MainCourseProps> = ({
  foods,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [filteredFoods, setFilteredFoods] = React.useState<FoodType[]>(foods);

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category.name);

    if (category.name === "All") {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(
        foods.filter((food) => food.categoryId._id === category._id)
      );
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex flex-col justify-center">
        <div className="flex gap-4 mb-4">
          <Button
            className="w-[283px] h-[43px] "
            color="success"
            key="all"
            onClick={() =>
              handleCategoryChange({ _id: "all", name: "All" } as CategoryType)
            }
            variant={selectedCategory === "All" ? "contained" : "outlined"}
          >
            All
          </Button>
          {categories?.map((category) => (
            <Button
              className="w-[283px] h-[43px] "
              color="success"
              key={category._id}
              onClick={() => handleCategoryChange(category)}
              variant={
                selectedCategory === category.name ? "contained" : "outlined"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4">
          {filteredFoods.map((food) => (
            <FoodsCart
              key={food._id}
              price={food.price}
              image={food.image}
              name={food.name}
              ingredient={food.ingredient}
              _id={food._id}
              categoryId={food.categoryId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
