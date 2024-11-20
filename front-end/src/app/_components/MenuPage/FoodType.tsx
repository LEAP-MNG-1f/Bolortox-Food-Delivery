export type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

type CardListProps = {
  foods: FoodType[];
  arrayNumber: number[];
  arrayStr: string[];
};

export const CardList = (props: CardListProps) => {
  return (
    <div>
      {props.foods.map((food) => {
        return <div>{food.name}</div>;
      })}
    </div>
  );
};
