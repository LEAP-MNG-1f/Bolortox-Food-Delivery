import { Button } from "@mui/material";

export const Category = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex justify-between py-[32px]">
        <Button
          sx={{
            width: 280,
            color: "black",
            borderRadius: "8px",
            borderWidth: "1px",
            borderColor: "#e0e0e0",
          }}
          variant="outlined"
        >
          Outlined
        </Button>
        <Button
          sx={{
            width: 280,
            color: "black",
            borderRadius: "8px",
            borderWidth: "1px",
            borderColor: "#e0e0e0",
          }}
          variant="outlined"
        >
          Outlined
        </Button>
        <Button
          sx={{
            width: 280,
            color: "black",
            borderRadius: "8px",
            borderWidth: "1px",
            borderColor: "#e0e0e0",
          }}
          variant="outlined"
        >
          Outlined
        </Button>
        <Button
          sx={{
            width: 280,
            color: "black",
            borderRadius: "8px",
            borderWidth: "1px",
            borderColor: "#e0e0e0",
          }}
          variant="outlined"
        >
          Outlined
        </Button>
      </div>
    </div>
  );
};
