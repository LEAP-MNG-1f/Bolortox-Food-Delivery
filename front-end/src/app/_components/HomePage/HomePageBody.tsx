import { Line } from "../svg/Line";

export const HomePageBody = () => {
  return (
    <div
      style={{
        background: "url('./GreenBackground.png'), #18BA51",
      }}
      className="w-full h-[788px] flex justify-center"
    >
      <div className="w-[1200px] flex justify-between items-center">
        <div className=" w-[384px] h-[114px]  flex flex-col gap-[23px] text-white">
          <h1 className="font-extrabold text-6xl">Pinecone Food Delivery</h1>
          <div>
            <Line />
          </div>
          <p className="text-2xl">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-[588px] h-[438px]">
          <img src="./FoodImage.png" alt="" />
        </div>
      </div>
    </div>
  );
};
