"use client";
import HomePage from "./_components/pages/HomePage";
import MenuPage from "./_components/pages/MenuPage";

export default function Home() {
  const foodMockData = [
    {
      _id: "1",
      name: "Egg Toast",
      image: "",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
    {
      _id: "2",
      name: "Tsuivan",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
    {
      _id: "3",
      name: "Suutei Tsai",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg",
      ingredient: "egg , bread , mayo",
      price: 15800,
    },
  ];

  return (
    <div>
      <HomePage />
      <MenuPage foods={foodMockData} />
    </div>
  );
}
