"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FoodType } from "./MainCourse";
import { Minus } from "../svg/Minus";
import { Plus } from "../svg/Plus";
import { stringify } from "querystring";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const FoodsCart = ({
  image,
  price,
  name,
  ingredient,
  _id,
  categoryId,
}: FoodType) => {
  const [open, setOpen] = React.useState(false);

  // Cart = [{id: "1", quantity: 2}, {id: "2" , quantity : 1}]

  React.useEffect(() => {
    setOpen(false);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    localStorage.setItem("foods", JSON.stringify({ _id }));
    setOpen(false);
  };

  const addFoodToCart = () => {
    localStorage.setItem("cartfoods", "1");
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <div className="w-[282px] h-[256px] flex flex-col items-start  ">
          <img src={image} alt="" />
          <p className="font-bold text-black">{name}</p>
          <p className="font-bold text-[#18BA51]">{price}₮</p>
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            maxWidth: 981,
          },
        }}
      >
        <div className="h-[564px] !w-[981px] p-[33px] flex gap-[33px]">
          <div className="w-[500px] h-[500px]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col ">
              <p className="font-bold text-3xl">{name}</p>
              <p className="font-bold text-[#18BA51] text-lg">{price}₮</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg">Орц</p>
              <div className="w-[352px] h-[54px] flex justify-center items-center p-2 bg-[#F6F6F6] text-[#767676]">
                {ingredient}
              </div>
            </div>
            <p className="font-bold text-lg">Тоо</p>
            <div className="flex justify-between">
              <div className="w-[40px] h-[40px] rounded-[10px] bg-[#18BA51] flex items-center justify-center">
                <Minus />
              </div>
              <p className="flex items-center">1</p>
              <div className="w-[40px] h-[40px] rounded-[10px] bg-[#18BA51] flex items-center justify-center">
                <Plus />
              </div>
            </div>

            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>

            <DialogActions>
              <Button
                className="!w-[384px] !h-[48px] !bg-[#18BA51] !text-white"
                autoFocus
                onClick={addFoodToCart}
              >
                Сагслах
              </Button>
            </DialogActions>
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};
