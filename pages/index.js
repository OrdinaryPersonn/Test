import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId);

        console.log(targetElement)
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center p-2">
            <img
              src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
              alt="Toki Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button data-scroll-to="#section1">Үйлчилгээ</button>
            <button data-scroll-to="#section2">Давуу тал</button>
            <button data-scroll-to="#section3">Мэдээ</button>
            <button data-scroll-to="#section4">Хамтран ажиллах</button>
          </nav>
        </div>
      </header>

      <div className="pt-20 pb-24 bg-[#fff2d7]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl text-black mb-0 mt-10"> <br></br> <br></br>ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</h1>
          <div className="flex justify-center">
            <img
              src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
              alt="Hero img"
              className="w-full"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <img
              src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://www.toki.mn/wp-content/uploads/2021/01/android.png"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div>
          <div className="flex items-center justify-center text-center h-screen"id="section1" >
            <img
              src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
              className="w-1/2 mb-6"
            />
            <p className="text-gray-700">
            <span className="text-3xl font-bold text-[#ffc63d] mb-4 " >Toki Service</span> <br></br> <br></br>
              Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний <br></br> төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд <br></br>хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах <br></br>боломжтой.
            </p>
          </div>

          <div className="flex items-center text-center justify-center bg-[#fff2d7] h-screen" id="section2">
            <p className="text-gray-700"> <span className="text-3xl font-bold text-[#ffc63d] mb-4">Toki Pay</span> <br></br> <br></br>
              Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч <br></br>юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг <br></br>баримтуудаа нэг дор хадгалаарай.
            </p>
            <img
              src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
              className="w-1/2 mb-6"
            />
          </div>
          <div className="flex items-center justify-center text-center h-screen" id="section3">
            <img
              src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png"
              className="w-1/2 mb-6"
            />
            <p className="text-gray-700">
            <span className="text-3xl font-bold text-[#ffc63d] mb-4">Toki Shop</span> <br></br> <br></br>
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, <br></br>нэг дороос шууд захиалах боломжтой.
            </p>
          </div>
        </div>

      </div>

      <div>
        <div className="container mx-auto text-center mb-48">
          <h2 className="text-4xl font-bold text-[#ffc63d] mb-6">Toki апп өдөр бүр танд тусална</h2>
          <p className="text-gray-700 mb-8">
            Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
          </p>
        </div>
      </div>
      <div className="bg-[#fff2d7] flex justify-center pt-6 pb-16"><button className="inline-block bg-[#ffc63d] text-white font-bold py-3 px-8 rounded-full" id="section4">
            ДАВУУ ТАЛ
          </button></div>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto grid grid-cols-3 gap-8 flex justify-center items-center">
          <div className="text-center md:text-left">
            <img
              src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
              alt="Footer Logo"
              className="w-24 mx-auto md:mx-0 mb-4"
            />
          </div>
          <div className="text-center md:text-left text-[#b3b3b3]">
          <p className="text-sm">Түгээмэл асуулт <br></br> <br></br>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар <br></br>
            77074477, 4477  info@toki.mn <br></br> <br></br>
            Copyright © 2022  Toki.mn</p>
          </div>
          <div className="text-center md:text-left text-[#b3b3b3]">
            <ul className="space-y-2">
              <p>Нууцлал</p>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}   