import { FacebookIcon } from "./svg/FacebookIcon";
import { InstagramIcon } from "./svg/InstagramIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
import { WhitePineIcon } from "./svg/WhitePineLogo";

export const Footer = () => (
  <div
    style={{
      background: "url('./GreenBackground.png'), #18BA51",
    }}
    className="w-full h-[545px] flex justify-center items-center "
  >
    <div className="absolute w-[1200px] h-[322px] flex flex-col items-center gap-[45px]">
      <div className="w-[200px] h-[41px] flex items-center gap-[12px]">
        <div className="w-[41px] h-[41px] flex items-center">
          <WhitePineIcon />
        </div>
        <p className="text-white font-bold text-xl ">Food delivery</p>
      </div>

      <div className="flex gap-[95px]">
        <button className="border-b-2 border-b-white text-white">Нүүр</button>
        <button className="border-b-2 border-b-white text-white">
          Холбоо барих
        </button>
        <button className="border-b-2 border-b-white text-white">
          Хоолны цэс
        </button>
        <button className="border-b-2 border-b-white text-white">
          Үйлчилгээний нөхцөл
        </button>
        <button className="border-b-2 border-b-white text-white">
          Хүргэлтийн бүс
        </button>
        <button className="border-b-2 border-b-white text-white">
          Нууцлалын бодлого
        </button>
      </div>

      <div className="flex items-center gap-[18px]">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>

      <div className="border-b-2 border-b-white w-[1200px]"></div>

      <div className="text-center">
        <div className="text-white text-base">© 2024 Pinecone Foods LLC</div>
        <div className="text-white text-base">
          Зохиогчийн эрх хуулиар хамгаалагдсан
        </div>
      </div>
    </div>
  </div>
);
