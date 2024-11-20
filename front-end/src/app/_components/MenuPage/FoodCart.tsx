import { FoodType } from "./Carousel"

export const FoodCart = ({name , price , ingredient ,image}: FoodType ) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  )
}