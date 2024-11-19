import * as React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Pinecone } from "./svg/Pinecone";
import { Bucket } from "./svg/Bucket";
import { Human } from "./svg/Human";
import Link from "next/link";

export default function Header() {
  return (
    <div className="!bg-white  w-full flex justify-center">
      <div className="flex justify-between items-center h-[57px] w-[1200px]">
        <div className=" items-center flex gap-10  text-black">
          <IconButton>
            <Pinecone />
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
              <Typography>САГС</Typography>
            </div>

            <div className="flex items-center  text-black">
              <IconButton>
                <Human />
              </IconButton>
              <Typography>НЭВТРЭХ</Typography>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
