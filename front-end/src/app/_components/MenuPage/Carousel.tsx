"use client";

export type CarouselListProps = {
  foods: FoodType[];
};

export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

import { Button } from "@mui/material";
import { useState } from "react";
import { FoodCart } from "./FoodCart";

export const Carousel = ({ foods }: { foods: FoodType[] }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full flex justify-center ">
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          <div>
            {foods.map((food) => {
              return ( <FoodCart
                 key={food._id}
                 img_url={food.image}
                 ingredient={food.ingredient}
                 name={food.name}
                 price={food.price}
                 />  ) ;
            })}
          </div>
        </Button>
      </div>
    </div>
  );
};
