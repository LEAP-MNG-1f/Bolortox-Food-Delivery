"use client";
import * as React from "react";
import { FoodsCart } from "./FoodsCart";
import { Button } from "@mui/material";

type smallCategory = {
  _id: string;
};

// Define the Food and Category Types
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

  console.log(foods);
  console.log(categories);

  // Handle category change (filtering the foods based on category)
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category.name);

    // If 'All' is selected, show all foods
    if (category.name === "All") {
      setFilteredFoods(foods);
    } else {
      // Filter foods based on the selected category
      setFilteredFoods(
        foods.filter((food) => food.categoryId._id === category._id)
      );
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex flex-col justify-center">
        {/* Category Buttons */}
        <div className="flex gap-4 mb-4">
          <Button
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

        {/* Foods List */}
        <div className="grid grid-cols-3 gap-4">
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
