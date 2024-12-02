"use client";
import * as React from "react";
import { FoodsCart } from "./FoodsCart";

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

export const MainCourse = ({ foods }: { foods: FoodType[] }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex justify-center">
        <div>
          {foods.map((food) => {
            return (
              <FoodsCart
                key={food._id}
                price={food.price}
                image={food.image}
                name={food.name}
                ingredient={food.ingredient}
                _id={food._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
