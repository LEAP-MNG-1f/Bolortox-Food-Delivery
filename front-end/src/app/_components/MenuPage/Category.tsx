import { Button } from "@mui/material";

type categoryType = {
  name: string;
};

export const Category = ({ categories }: { categories: categoryType[] }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex justify-between py-[32px]">
        {categories.map((category, index) => (
          <Button
            key={index}
            sx={{
              width: 280,
              color: "black",
              borderRadius: "8px",
              borderWidth: "1px",
              borderColor: "#e0e0e0",
            }}
            variant="outlined"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
