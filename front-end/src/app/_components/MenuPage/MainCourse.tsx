"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";



export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

export const MainCourse = ({foods} : {foods : FoodType[]}) => {
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
          return (<div  key={food._id}>
           
            {food.name}
          </div>)
        })}
      </div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className=" w-[282px] h-[256px] flex flex-col items-start">
          <img src="/EggToast.png" alt="" />
          <p className="font-bold text-black">Breakfast</p>
          <p className="font-bold text-green-500">15$</p>
        </div>
      </Button>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className=" w-[282px] h-[256px] flex flex-col items-start">
          <img src="/EggToast.png" alt="" />
          <p className="font-bold text-black">Breakfast</p>
          <p className="font-bold text-green-500">15$</p>
        </div>
      </Button>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className=" w-[282px] h-[256px] flex flex-col items-start">
          <img src="/EggToast.png" alt="" />
          <p className="font-bold text-black">Breakfast</p>
          <p className="font-bold text-green-500">15$</p>
        </div>
      </Button>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className=" w-[282px] h-[256px] flex flex-col items-start">
          <img src="/EggToast.png" alt="" />
          <p className="font-bold text-black">Breakfast</p>
          <p className="font-bold text-green-500">15$</p>
        </div>
      </Button>

      </div>
    
      
    </div>
  );
};
