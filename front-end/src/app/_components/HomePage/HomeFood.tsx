import { FoodsCart } from "../MenuPage/FoodsCart";
import { FoodType } from "../MenuPage/MainCourse";

export const HomeFood = ({ data }: { data: FoodType[] }) => {
  return (
    <div className="w-full flex justify-center items-center mt-[80px]">
      <div className="w-[1200px] grid grid-cols-4 gap-[20px]">
        {data?.map((singleData) => {
          return (
            <FoodsCart
              key={singleData?._id}
              image={singleData?.image}
              name={singleData?.name}
              price={singleData?.price}
              ingredient={singleData?.ingredient}
              _id={singleData?._id}
              categoryId={{
                _id: "",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
