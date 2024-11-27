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
import RightSideDrawer from "./MenuPage/RightSideDrawer";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
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
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
