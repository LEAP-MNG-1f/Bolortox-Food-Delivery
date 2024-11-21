"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Minus } from "../svg/Minus";
import { Plus } from "../svg/Plus";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const MainCourse = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full flex justify-center">
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className=" w-[282px] h-[256px] flex flex-col items-start">
          <img src="/EggToast.png" alt="" />
          <p className='font-bold text-black'>Breakfast</p>
          <p className="font-bold text-green-500">15$</p>
        </div>
      </Button>
      <BootstrapDialog
        sx={{
          "& .MuiDialog-paper": {
            width: "981px",
            maxWidth: "100%",
            height: "564px",
            maxHeight: "100%",
          },
        }}
        onClose={handleClose}
        open={open}
      >
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
        <DialogContent>
          <div className="flex gap-[33px] items-center">
            <img className="w-[500px] h-[500px]" src="/OatBowl.png" alt="" />

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-bold text-2xl">Main Pizza</p>
                <p className="font-bold text-green-500">34,800₮</p>
              </div>
              <div>
                <p className="font-bold">Орц</p>
                <div className=" w-[368px] h-[54px] text-center rounded-md bg-[#F6F6F6] text-[#767676]">
                  <p>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр </p>
                </div>
              </div>
              <p className="font-bold">Тоо</p>
              <div className="flex gap-[144px]">
                <button className="w-[45px] h-[40px] bg-[#18BA51] flex justify-center items-center rounded-xl">
                  <Minus />
                </button>
                <p>1</p>
                <button className="w-[45px] h-[40px] bg-[#18BA51] flex justify-center items-center rounded-xl">
                  <Plus />
                </button>
              </div>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={handleClose}
                  className="!w-[384px] !h-[48px]  !bg-[#18BA51] !rounded-xl !text-white"
                >
                  Сагслах
                </Button>
              </DialogActions>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
