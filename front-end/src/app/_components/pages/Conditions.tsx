import { GreenStar } from "../svg/GreenStar";

export default function Condition() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[1200px] p-8">
        <div className="flex gap-2 py-3">
          <GreenStar />
          <p className="font-bold text-xl">Нууцлалын бодлого</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl">Бидний зорилго</p>
          <p>
            Food delivery нь хэрэглэгчид болон үйлчлүүлэгчдийн хувийн мэдээллийг
            хамгаалах үүрэг хүлээж, тэдний хувийн мэдээллийг цуглуулах, ашиглах,
            хадгалах, хамгаалахдаа эрх зүйн шаардлагыг чанд мөрдөнө. Энэхүү
            нууцлалын бодлого нь бидний үйл ажиллагаа, үйлчилгээ болон вэбсайтыг
            ашиглахтай холбоотой таны хувийн мэдээллийг хэрхэн цуглуулж,
            ашиглах, хамгаалах талаар мэдээлнэ.
          </p>
          <p className="font-bold text-xl">1. Мэдээллийг цуглуулах</p>
          <p>
            [Байгууллагын нэр] нь зөвхөн үйлчлүүлэгчийн санал хүсэлт, бүртгэл,
            үйлчилгээ үзүүлэх явцад шаардлагатай мэдээллийг цуглуулна. Энэ
            мэдээллийг зөвхөн тухайн зорилгоор ашиглах бөгөөд хууль тогтоомжид
            заасан нөхцлөөр хуваалцах болно.
          </p>
          <p className="font-bold text-xl">2. Мэдээллийг ашиглах</p>
          <p>Бид хэрэглэгчдийн хувийн мэдээллийг зөвхөн:</p>
          <ul>
            <li>Үйлчилгээ үзүүлэх,</li>
            <li>Худалдаа, маркетингийн зориулалтаар (тэдний зөвшөөрөлтэй),</li>
            <li>Хуулийн дагуу шаардлагатай тохиолдолд ашиглана.</li>
          </ul>
          <p className="font-bold text-xl">3. Мэдээллийг хадгалах</p>
          <p>
            Хувийн мэдээллийг хадгалах хугацаа нь үйлчлүүлэгчтэй холбогдсон
            үйлчилгээний шаардлага болон хууль эрх зүйн хугацаагаар
            хязгаарлагдана. Бид мэдээллийг зөвхөн хэрэгцээтэй хугацаанд хадгалах
            бөгөөд дараа нь устгах арга хэмжээ авна.
          </p>
          <p className="font-bold text-xl">5. Мэдээллийн хамгаалалт</p>
          <p>
            Бид үйлчлүүлэгчдийн хувийн мэдээллийг гадаад халдлага, алдагдал,
            гэмтэл зэрэг аюулын эсрэг хамгаалахын тулд дэвшилтэт аюулгүй байдлын
            арга хэмжээнүүдийг хэрэгжүүлнэ. Эдгээр арга хэмжээнд мэдээллийг
            шифрлэх, нэвтрэх эрхийг хязгаарлах, олон давхар аюулгүй байдлын
            системүүдийг ашиглах зэрэг багтана.
          </p>
          <p className="font-bold text-xl">6. Мэдээллийг хуваалцах</p>
          <p>
            Мэдээллийг гуравдагч этгээдэд хуваалцах нь дараах нөхцлүүдэд
            хийгдэнэ:
          </p>
          <ul>
            <li>Хэрэглэгчийн зөвшөөрөлтэйгээр,</li>
            <li>
              Хуулийн дагуу шаардагдах тохиолдолд (жишээ нь, шүүхийн шийдвэр,
              хууль сахиулах байгууллагын шаардлагаар),
            </li>
            <li>
              Бидний үйлчилгээ үзүүлэгчид, тэдний аюулгүй байдлын шаардлагын
              дагуу.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
