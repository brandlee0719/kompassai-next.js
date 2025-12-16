import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import ProductImage1 from "@/assets/image/product1.png";
import ProductImage2 from "@/assets/image/product2.png";
import ProductImage3 from "@/assets/image/product3.png";
import ArrowRightIcon from "@/assets/image/icons/Arrow_Right.svg";
import ArrowLeftIcon from "@/assets/image/icons/Arrow_Left.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules

// install Swiper modules

// Import Swiper styles
import "swiper/css";

export default function AboutProduct(props) {
  const [swiper, setSwiper] = useState(null);
  const [show, setShow] = useState(3);
  const getWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };
  useEffect(() => {
    const setResponsiveness = () => {
      setShow(getWidth() > 1024 ? 3 : getWidth() > 768 ? 2 : 1);
    };
    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
  }, []);
  // const navigation = useNavigate();

  return (
    <div className="my-[40px] md:my-[80px] px-[40px]">
      <div className=" font-Outfit text-emerald-500 text-3xl md:text-6xl font-[700] text-center mt-[80px]">
        Our products
      </div>
      <div className="flex flex-row justify-center gap-[20px] mt-[48px]">
        <Button
          onClick={() => swiper.slidePrev()}
          className="flex justify-center items-center border-[1px] bg-transparent  rounded-full p-[16px]"
        >
          <img src={ArrowLeftIcon} />
        </Button>
        <Button
          onClick={() => swiper.slideNext()}
          className="flex justify-center items-center border-[1px] bg-transparent rounded-full p-[16px]"
        >
          <img src={ArrowRightIcon} />
        </Button>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={show}
        navigation={true}
        onInit={swiper}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiper(s);
        }}
      >
        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between  p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Advanced Database Search
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Easily narrow down your search with filters, which include skill
              sets, technologies used, those who recently switched roles, and
              more.
            </div>
          </div>
          <img src={ProductImage1} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[1px] border-[#090C05] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div></div>
          <div className="font-Outfit text-2xl font-[700] text-stone-950">
            Linkedin Prospecting Tool
          </div>
          <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
            Quickly create custom lead generation list for your search needs.
            Need more, ask about our competitive bulk rates.
          </div>
          <img src={ProductImage2} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[#090C05] border-[1px] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div>
            <div className="font-Outfit text-[16px] md:text-2xl font-[700] text-stone-950">
              Email Verification
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Our desktop Chrome extension is the easiest way to look up contact
              and company information, while you’re searching.
            </div>
          </div>
          <img src={ProductImage3} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[#090C05] border-[1px] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between  p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Advanced Database Search
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Easily narrow down your search with filters, which include skill
              sets, technologies used, those who recently switched roles, and
              more.
            </div>
          </div>
          <img src={ProductImage1} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[1px] border-[#090C05] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Linkedin Prospecting Tool
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Quickly create custom lead generation list for your search needs.
              Need more, ask about our competitive bulk rates.
            </div>
          </div>
          <img src={ProductImage2} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[#090C05] border-[1px] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!flex flex-col w-[500px] !h-[650px] justify-between p-[40px] bg-emerald-200 rounded-[30px]  mt-[30px]">
          <div>
            <div className="font-Outfit text-[16px] md:text-2xl font-[700] text-stone-950">
              Email Verification
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Our desktop Chrome extension is the easiest way to look up contact
              and company information, while you’re searching.
            </div>
          </div>
          <img src={ProductImage3} />
          <div className="flex  justify-center">
            <Button className="flex flex-row p-[16px_24px] text-stone-950 text-[16px] font-[700] border-[#090C05] border-[1px] bg-transparent  rounded-full">
              LEARN MORE
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
