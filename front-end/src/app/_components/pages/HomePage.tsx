import { Footer } from "../Footer";
import Header from "../Header";
import { HomePageBody } from "../HomePage/HomePageBody";
import { HomePageInfo } from "../HomePage/HomePageInfo";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomePageBody />
      <HomePageInfo />
      <Footer />
    </div>
  );
}
