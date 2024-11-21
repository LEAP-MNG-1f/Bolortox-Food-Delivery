import { Footer } from "../Footer";
import Header from "../Header";
import { Carousel, CarouselListProps } from "../MenuPage/Carousel";

import { Category } from "../MenuPage/Category";

export default function MenuPage({ foods }: CarouselListProps) {
  console.log(foods);
  return (
    <div>
      <Header />
      <Category />
      <Carousel foods={foods} />
      <Footer />
    </div>
  );
}
