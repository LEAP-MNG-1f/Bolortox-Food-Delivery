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
import { FoodType } from "./MainCourse";

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
}: FoodType) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <div className="w-[282px] h-[256px] flex flex-col items-start border-2 border-slate-800 ">
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
        <div className="  h-[564px] !w-[981px] p-[33px] flex gap-[33px]">
          <div className="w-[500px] h-[500px]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col ">
              <p className="font-bold text-3xl">{name}</p>
              <p className="font-bold text-[#18BA51] text-lg">{price}₮</p>
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
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};
