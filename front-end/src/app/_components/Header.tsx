"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Pinecone } from "./svg/Pinecone";
import { Bucket } from "./svg/Bucket";
import { Human } from "./svg/Human";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ArrowLeft } from "./svg/arrowLeft";
import { FoodType } from "./MenuPage/MainCourse";
import { RightDrawer } from "./MenuPage/RightDrawer";

export default function Header({ foods }: { foods: FoodType[] }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="!w-[586px] !flex !flex-col !items-center !justify-center"
    >
      <div>
      <div className="flex flex-col items-center gap-56">
    <div className="flex flex-col justify-center w-[538px]">
      <div className="flex w-[538px] h-[48px] items-center pt-7 justify-between pb-[48px]">
        <ArrowLeft />
        <button className="font-bold text-xl">Таны сагс</button>
        <div> </div>
      </div>
        {foods.map((food) => {
          return (
            <RightDrawer
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
    <div className="w-[586px] h-[172px] px-[32px] flex justify-between items-center border-t-2 border">
      <div>
        <p className="text-[#5E6166]">Нийт төлөх дүн</p>
        <p className="font-bold text-lg">38,400₮</p>
      </div>
      <button className="w-[256px] h-[48px] bg-[#18BA51] text-white rounded-md">
        Захиалах
      </button>
    </div>
  </div>
      </div>
    </Box>
  );

  return (
    <div className="!bg-white  w-full flex justify-center">
      <div className="flex justify-between items-center h-[57px] w-[1200px]">
        <div className=" items-center flex gap-10  text-black">
          <IconButton>
            <Link href="./home-page">
              <Pinecone />
            </Link>
          </IconButton>
          <Box className="flex gap-5 ">
            <Link href="/home-page">
              <Typography>НҮҮР</Typography>
            </Link>
            <Link href="/menu-page">
              <Typography>ХООЛНЫ ЦЭС</Typography>
            </Link>
            <Typography>ХҮРГЭЛТИЙН БҮС</Typography>
          </Box>
        </div>
        <div>
          <Box className=" flex items-center gap-10">
            <div className="flex items-center  text-black">
              <IconButton size="large" color="inherit">
                <Badge>
                  <Bucket />
                </Badge>
              </IconButton>
              <Button
                onClick={toggleDrawer(true)}
                className="!text-black !font-bold"
              >
                САГС
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {list}
              </Drawer>
            </div>

            <div className="flex items-center  text-black">
              <IconButton>
                <Human />
              </IconButton>
              <p className="font-bold text-sm">НЭВТРЭХ</p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
