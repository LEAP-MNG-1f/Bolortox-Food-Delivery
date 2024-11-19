
import { Footer } from "../Footer";
import Header from "../Header";
import { Carousel } from "../MenuPage/Carousel";
import { Category } from "../MenuPage/Category";

export default function MenuPage() {
  return (
    <div>
      <Header />
      <Category/>
      <Carousel/>
      <Footer/>
    </div>
  );
}
