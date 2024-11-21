import { FoodType } from "./Carousel";

export const FoodCart = ({ name, price, ingredient, image }: FoodType) => {
  return (
    <div className="flex flex-col gap-3 w-[282px] h-[256px] border-2 border-slate-900">
      <img src={image} alt="" />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};
