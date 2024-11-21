import { Footer } from "../Footer";
import Header from "../Header";
import { MainCourse } from "../MenuPage/MainCourse";

import { Category } from "../MenuPage/Category";

export default function MenuPage() {

  return (
    <div>
      <Header />
      <Category />
      <MainCourse  />
      <Footer />
    </div>
  );
}
