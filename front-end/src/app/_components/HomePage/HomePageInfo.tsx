import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";
import { BookIcon } from "../svg/BookIcon";
import { ClockIcon } from "../svg/ClockIcon";
import { SaladIcon } from "../svg/SaladIcon";

export const HomePageInfo = () => {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));
  return (
    <div className=" w-full h-[415px] flex justify-center pt-[122px]">
      <div className="w-[1200px] flex justify-center items-between">
        <Stack direction="row" spacing={9}>
          <DemoPaper
            sx={{
              width: 265,
              height: 155,
              padding: 2,
            }}
            square={false}
            className="flex flex-col justify-between"
          >
            <div className="p-[15px]">
              <BookIcon />
            </div>

            <div>
              <Typography
                sx={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                Хүргэлтийн төлөв хянах
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                Захиалга бэлтгэлийн явцыг хянах
              </Typography>
            </div>
          </DemoPaper>
          <DemoPaper
            sx={{
              width: 265,
              height: 155,
              padding: 2,
            }}
            square={false}
            className="flex flex-col justify-between"
          >
            <div className="p-[15px]">
              <ClockIcon />
            </div>

            <div>
              <Typography
                sx={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                Шуурхай хүргэлт
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                Халуун хоол таны гарт
              </Typography>
            </div>
          </DemoPaper>
          <DemoPaper
            sx={{
              width: 265,
              height: 155,
              padding: 2,
            }}
            square={false}
            className="flex flex-col justify-between"
          >
            <div className="p-[15px]">
              <SaladIcon />
            </div>

            <div>
              <Typography
                sx={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                Эрүүл, баталгаат орц
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                Монгол хөрсөнд ургасан ногоо
              </Typography>
            </div>
          </DemoPaper>
          <DemoPaper
            sx={{
              width: 265,
              height: 155,
              padding: 2,
            }}
            square={false}
            className="flex flex-col justify-between"
          >
            <div className="p-[15px]">
              <BookIcon />
            </div>

            <div>
              <Typography
                sx={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                Хоолны өргөн сонголт
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                Олон орны сонголттой
              </Typography>
            </div>
          </DemoPaper>
        </Stack>
      </div>
    </div>
  );
};
