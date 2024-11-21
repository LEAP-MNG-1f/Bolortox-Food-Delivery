import * as React from "react";

export type CarouselListProps = {
  foods: FoodType[];
};

export type FoodType = {
  _id?: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

import { Button } from "@mui/material";
import { FoodCart } from "./FoodCart";

export const Carousel = ({ foods }: { foods: FoodType[] }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[1200px] flex justify-between">
        {foods.map((food) => {
          return (
            <FoodCart
              key={food._id}
              name={food.name}
              price={food.price}
              image={food.image}
              ingredient={food.ingredient}
            />
          );
        })}
      </div>
    </div>
  );
};
