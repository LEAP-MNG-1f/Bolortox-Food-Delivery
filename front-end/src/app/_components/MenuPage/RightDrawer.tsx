import { FoodType } from "./MainCourse";

export const RightDrawer = () => {
  return (
    <div className=" w-[538px] h-[230px] border-y-2 border-y-[#D6D8DB] flex justify-center items-center">
      <div className="flex justify-center gap-4">
        <div>
          <img className="w-[245px] h-[145px]" alt="" />
        </div>
        <div className="h-[150px] w-[245px]">
          <p className="font-bold text-lg">h</p>
          <p className="font-bold text-lg text-[#18BA51]">h₮</p>
          <p className="text-[#767676] truncate">h</p>
        </div>
      </div>
    </div>
  );
};
