import { ArrowLeft } from "@mui/icons-material"
import { FoodType } from "./MainCourse"

export const RightDrawer = ({image, price , name, ingredient, _id}: FoodType) => {
  return (
   
      <div className=" w-[538px] h-[230px] border-y-2 border-y-[#D6D8DB] flex justify-center items-center">
        <div className="flex justify-center gap-4">
          <div>
            <img
              className="w-[245px] h-[145px]"
              src={image}
              alt=""
            />
          </div>
          <div className="h-[150px] w-[245px]">
            <p className="font-bold text-lg">{name}</p>
            <p className="font-bold text-lg text-[#18BA51]">{price}</p>
            <p className="text-[#767676]">{ingredient}</p>
          </div>
        </div>
      </div>
   
  )
}