import { MapPageBody } from "../MapPage/MapPageBody";
import { GreenStar } from "../svg/GreenStar";

export default function MapPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px]">
        <div className="py-[61px]">
          <iframe
            className="w-[1200px] h-[616px] border-0 rounded-lg shadow-lg "
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.8731108826694!2d106.92014330519453!3d47.91822534730456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924692cd356f%3A0xa17bb4dc949702e5!2sCentral%20Tower%20Ulaanbaatar!5e0!3m2!1smn!2smn!4v1733207962861!5m2!1smn!2smn"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="flex justify-start gap-2 items-center">
            <GreenStar />
            <p className="font-bold text-2xl">Хүргэлтийн бүс дэх хаягууд</p>
          </div>
          <div className="py-[24px]">
            <MapPageBody />
          </div>
        </div>
      </div>
    </div>
  );
}
