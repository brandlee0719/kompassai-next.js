import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import LandingLayout from "@/components/LandingLayout";
import BaseContainer from "@/components/BaseContainer";
import { Button } from "@material-tailwind/react";

import MainImg from "@/assets/image/login/img3.png";

import Card from "@/components/card/Card";
import CardButton from "@/components/button/CardButton";

import { useEffect, useState } from "react";

import DooubleFire from "@/assets/image/icons/double_fire.svg";
import Img4 from "@/assets/image/articles/image1.png";
import ArticleLeftBar from "@/components/article/ArticleLeftBar";
import ArticleCard from "@/components/article/ArticleCard";
import VideoImage from "@/assets/image/video.png";
import LinkedInIcon from "@/assets/image/icons/LinkedIn1.svg";
import TwitterIcon from "@/assets/image/icons/Twitter1.svg";
import FacebookIcon from "@/assets/image/icons/Facebook1.svg";
import RecentBar from "@/components/article/RecentBar";

import Img1 from "@/assets/image/login/img2.png";
import Img2 from "@/assets/image/login/img5.png";
import Img3 from "@/assets/image/login/img6.png";
import StickyHeader from "@/components/landing/sticky/StickyHeader";

const relatedStories = [
  {
    image: Img1,
    symbol: "data analytics",
    title: "AI in business: how KompassAI can transform your operations",
    content: "",
  },
  {
    image: Img2,
    symbol: "data analytics",
    title: "Demystifying big data: your KompassAI companion",
    content: "",
  },
  {
    image: Img3,
    symbol: "data analytics",
    title: "Unlocking data insights: a beginner's guide to KompassAI",
    content: "",
  },
];

const recentStories = [
  {
    image: Img1,
    symbol: "data analytics",
    title: "Unlocking data insights: a beginner's guide to KompassAI",
    content:
      "Dive into the world of data analytics with KompassAI and learn how it can empower your decision-making.",
  },
  {
    image: Img2,
    symbol: "Marketing",
    title: "AI in business: how KompassAI can transform your operations",
    content:
      "Explore how artificial intelligence can optimize various aspects of your business with KompassAI.",
  },
  {
    image: Img3,
    symbol: "Trends",
    title: "The power of predictive analytics: a closer look with KompassAI",
    content:
      "Discover how predictive analytics can help you anticipate trends and stay ahead of the competition.",
  },
];

const sections = [
  {
    id: 1,
    name: "The power of predictive analytics",
  },
  {
    id: 2,
    name: "Real-world applications with model training and with model training",
  },
  {
    id: 3,
    name: "Innovation Beyond Boundaries",
  },
  {
    id: 4,
    name: "Conclusion",
  },
];

export default function ArticleScene() {
  const [navIndex, setNavIndex] = useState(0);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const scrollToSection = (sectionId) => {
    setNavIndex(sectionId);

    const sectionElement = document.getElementById(`section-${sectionId}`);
    if (sectionElement) {
      const yOffset = -150; // Adjust this value to control the offset
      window.scroll({
        top:
          sectionElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      if (scrollPosition > 350) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
      // const firstSection = document.getElementById(`section-${sections[0].id}`);

      // if (firstSection && firstSection.offsetTop > scrollPosition) {
      //   setNavIndex(0);
      //   return;
      // }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i].id;
        const section = document.getElementById(`section-${sectionId}`);

        if (section && section.offsetTop <= scrollPosition) {
          setNavIndex(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navIndex]);

  return (
    <LandingLayout pageName="article">
      <StickyHeader show={showStickyHeader}>
        <div className="px-8 flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <h2 className="font-Outfit text-emerald-500 text-2xl xl:text-2xl 2xl:text-2xl font-black">
            The power of predictive analytics: <br />
            a closer look with KompassAI
          </h2>

          <div className="flex gap-[8px] py-4">
            <Button
              // onClick={() => gotoSignin()}
              className={
                "h-10 outline-none border-[1px] rounded-full text-emerald-500 text-[14px] font-[700] p-[8px_24px] bg-transparent hover:bg-emerald-500 hover:text-white"
              }
            >
              LOGIN
            </Button>
            <Button
              // onClick={() => goToArticleScreen()}
              className={
                "h-10 outline-none border-[1px] rounded-full text-[14px] p-[8px_24px] bg-emerald-500 text-white font-[700] whitespace-nowrap hover:bg-white hover:text-emerald-500"
              }
            >
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </StickyHeader>
      <BaseContainer>
        <div className="block">
          <div className="flex flex-col xl:flex-row mx-[20px] md:mx-20 gap-[80px]">
            <div>
              <div className="sticky top-40">
                <ArticleLeftBar
                  navIndex={navIndex}
                  setNavIndex={scrollToSection}
                  sections={sections}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="my-2">
                <CardButton children="trends" />
              </div>

              <h2 className="font-Outfit text-emerald-500 leading-[50px] text-4xl xl:text-5xl 2xl:text-6xl font-black">
                The power of predictive analytics: <br />
                a closer look with KompassAI
              </h2>

              <div className="my-10">
                <img
                  src={MainImg}
                  className="w-full h-[240px] md:h-[300px] lg:h-[444px] rounded-[30px] 2xl:rounded-[80px]"
                  alt="main_image"
                />
              </div>
              <div className="flex flex-col lg:flex-row md:gap-10 md:divide-x-2">
                <div className=" flex 2xl:basis-3/4">
                  <div className="flex flex-col gap-[40px] ">
                    <p className="text-stone-950 text-[16px] md:text-lg font-normal leading-7">
                      It's like having a crystal ball for your business, helping
                      you anticipate trends, identify potential risks, and make
                      data-driven decisions.
                    </p>
                    <div>
                      <h3
                        id="section-1"
                        className="font-Outfit text-stone-950 text-lg md:text-2xl font-bold  mb-4"
                      >
                        The power of predictive analytics
                      </h3>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7 mb-10">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries. With KompassAI's user-friendly
                        capabilities, you can harness the power of data to make
                        informed decisions and stay ahead of the curve.
                      </p>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7 mb-10">
                        Predictive analytics involves using historical data and
                        statistical algorithms to make informed predictions
                        about future events or outcomes. It's like having a
                        crystal ball for your business, helping you anticipate
                        trends, identify potential risks, and make data-driven
                        decisions. KompassAI is at the forefront of predictive
                        analytics, offering a range of tools and features that
                        empower businesses to harness the full potential of
                        their data.{" "}
                      </p>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7 mb-10">
                        From seamless data integration to model training and
                        making predictions, KompassAI simplifies the entire
                        process. Whether you're looking to optimize sales,
                        predict customer churn, manage risks, or enhance
                        healthcare outcomes, KompassAI has you covered.
                      </p>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7 mb-10">
                        Predictive analytics with KompassAI offers more than
                        just insights; it empowers decision-makers at all levels
                        of your organization. It provides guidance on how to
                        respond effectively to changes in your business
                        environment. This journey doesn't end with the first set
                        of predictions; it's a continuous process of improvement
                        and innovation. KompassAI's versatility extends across
                        sectors, from finance and retail to healthcare and
                        manufacturing.{" "}
                      </p>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7">
                        Ready to explore the possibilities? Join the ranks of
                        businesses that have harnessed the power of predictive
                        analytics with KompassAI, and step into a world of
                        insights and opportunities.
                      </p>
                    </div>
                    <div className="mb-10 md:mb-20">
                      <img
                        src={MainImg}
                        className="w-full h-[240px] md:h-[300px] lg:h-[444px] rounded-[30px] 2xl:rounded-[80px]"
                        alt="main_image"
                      />
                    </div>
                    <div className="relative">
                      <button className="absolute rounded-2xl p-2 md:p-4 bg-magenta-500 box-Shadow2 transform rotate-[4deg] ml-[180px] md:ml-[204px] -mt-[30px]">
                        <img
                          src={DooubleFire}
                          className="w-[40px] h-[32px]"
                          alt="double_fire"
                        />
                      </button>
                      <button className="rounded-[30px] w-full p-8 md:p-16 bg-white box-Shadow1 items-center justify-center -z-50">
                        <p className="font-Outfit text-lg md:text-2xl font-bold leading-[33.6px]">
                          If you do ROI on KompassAI it's well, over 1000%
                        </p>
                      </button>
                    </div>
                    <div className="mt-10 md:mt-20">
                      <h3
                        id="section-2"
                        className="font-Outfit text-stone-950 text-lg md:text-2xl font-bold leading-[33.6px] mb-4"
                      >
                        Real-world applications with model training and with
                        model training
                      </h3>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7 mb-10">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries. With KompassAI's user-friendly
                        capabilities, you can harness the power of data to make
                        informed decisions and stay ahead of the curve.
                      </p>
                      <p className="font-Outfit text-stone-950 text-[16px] md:text-lg font-normal leading-7">
                        Predictive analytics involves using historical data and
                        statistical algorithms to make informed predictions
                        about future events or outcomes. It's like having a
                        crystal ball for your business, helping you anticipate
                        trends, identify potential risks, and make data-driven
                        decisions.
                      </p>
                    </div>
                    <div>
                      <img
                        src={MainImg}
                        className="w-full h-[240px] md:h-[300px] lg:h-[444px] rounded-[30px] 2xl:rounded-[80px] mb-2"
                        alt="main_image"
                      />
                      <p className="font-Outfit text-stone-950 text-base font-normal leading-[22.4px] text-center mb-20">
                        Futuristic concept
                      </p>
                    </div>
                    <div className="relative">
                      <button className="absolute rounded-2xl p-2 md:p-4 bg-magenta-500 box-Shadow2 transform rotate-[4deg] ml-[180px] lg:ml-[204px] -mt-[30px]">
                        <img src={DooubleFire} className="" alt="double_fire" />
                      </button>
                      <button className="flex flex-col lg:flex-row gap-10 rounded-[30px] p-[24px] md:p-16 bg-white box-Shadow1 items-center justify-center -z-50">
                        <img
                          src={Img4}
                          className="w-[100px] h-[100px]"
                          alt="customer_image"
                        />
                        <section className=" text-left">
                          <p className="font-Outfit text-lg lg:text-2xl font-bold  mb-8  text-center lg:text-start">
                            If you do ROI on KompassAI it’s well, over 1000%.
                            I’ve made my money back tenfold with Kompass AI.
                          </p>
                          <p className="font-Outfit text-stone-950 text-[18px] lg:text-[26px] font-normal text-center lg:text-start">
                            Niklas Anzingeri, Strategic Initiatives Leader
                          </p>
                          <p className="font-Outfit text-magenta-500 text-[16px] lg:text-lg font-normal text-center lg:text-start">
                            Dalia Research
                          </p>
                        </section>
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <h3
                        id="section-3"
                        className="font-Outfit font-[700] text-stone-950 text-lg md:text-2xl mt-[40px] md:mt-[80px]"
                      >
                        Innovation Beyond Boundaries
                      </h3>
                      <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries.
                      </div>
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                          <div className="overflow-hidden rounded-[30px] border">
                            <table className=" table-fixed min-w-full text-left text-sm font-Outfit overflow-hidden  ">
                              <thead className=" bg-[#F3F3F3]  font-medium dark:border-neutral-500 ">
                                <tr className="">
                                  <th
                                    scope="col"
                                    className=" px-6 py-4 border-b border-r  basis-1/3 w-1/3"
                                  >
                                    Employee
                                  </th>
                                  <th
                                    scope="col"
                                    className="  px-6 py-4  border-b border-r  basis-1/3 w-1/3"
                                  >
                                    Salary
                                  </th>
                                  <th
                                    scope="col"
                                    className="  px-6 py-4 border-b   basis-1/3 w-1/3"
                                  ></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td className=" px-6 py-4 border-b border-r">
                                    John Doe
                                  </td>
                                  <td className=" px-6 py-4 border-b border-r">
                                    100
                                  </td>
                                  <td className=" px-6 py-4 border-b ">
                                    Because that’s all Steve Jobs needed for a
                                    salary.
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className=" px-6 py-4 border-b border-r">
                                    John Doe
                                  </td>
                                  <td className=" px-6 py-4 border-b border-r">
                                    200
                                  </td>
                                  <td className=" px-6 py-4 border-b ">
                                    Because that’s all Steve Jobs needed for a
                                    salary.
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className=" px-6 py-4 border-b border-r">
                                    John Doe
                                  </td>
                                  <td className=" px-6 py-4 border-b border-r">
                                    300
                                  </td>
                                  <td className=" px-6 py-4 border-b ">
                                    Because that’s all Steve Jobs needed for a
                                    salary.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries. With KompassAI's user-friendly
                        capabilities, you can harness the power of data to make
                        informed decisions and stay ahead of the curve.
                      </div>
                      <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries.
                      </div>
                      <img src={VideoImage} className="my-[24px]" />
                      <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries. With KompassAI's user-friendly
                        capabilities, you can harness the power of data to make
                        informed decisions and stay ahead of the curve.
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={MainImg}
                          className="flex md:w-1/3 mr-[16px] my-[16px]"
                        />

                        <div className="flex md:w-2/3 ">
                          <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                            From seamless data integration to model training and
                            making predictions, KompassAI simplifies the entire
                            process. Whether you're looking to optimize sales,
                            predict customer churn, manage risks, or enhance
                            healthcare outcomes, KompassAI has you covered.
                            Predictive analytics involves using historical data
                            and statistical algorithms to make informed
                            predictions.
                          </div>
                        </div>
                      </div>
                      {/* <div className='flex flex-row'>
                                                <div className='flex w-2/3 ' >
                                                    <div className='font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]'>
                                                        From seamless data integration to model training and making predictions, KompassAI simplifies the entire process. Whether you're looking to optimize sales, predict customer churn, manage risks, or enhance healthcare outcomes, KompassAI has you covered. Predictive analytics involves using historical data and statistical algorithms to make informed predictions.
                                                    </div>
                                                </div>
                                                <img src={MainImg} className='flex w-1/3 mr-[16px] my-[16px]' />
                                            </div> */}
                      <div className="font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]">
                        Predictive analytics is no longer a futuristic concept;
                        it's a practical and essential tool for businesses
                        across industries. With KompassAI's user-friendly
                        capabilities, you can harness the power of data to make
                        informed decisions and stay ahead of the curve.
                      </div>
                      {/* <div className='flex flex-col'>
                                                <div className='p-[20px] md:p-[40px]'>
                                                    <img src={MainImg} className='flex' />
                                                </div>
                                                <div className=' ' >
                                                    <div className='font-Outfit font-[400] text-stone-950 text-[16px] md:text-lg my-[16px]'>
                                                        Predictive analytics is no longer a futuristic concept; it's a practical and essential tool for businesses across industries. With KompassAI's user-friendly capabilities, you can harness the power of data to make informed decisions and stay ahead of the curve.
                                                    </div>
                                                </div>
                                            </div> */}
                      <div className="p-[40px] bg-emerald-200 rounded-[30px]">
                        <div
                          id="section-4"
                          className="font-Outfit text-stone-950 text-lg font-[700] md:text-2xl"
                        >
                          Conclusion
                        </div>
                        <div className="font-Outfit text-stone-950 text-[16px] font-[400] md:text-lg">
                          Predictive analytics is no longer a futuristic
                          concept; it's a practical and essential tool for
                          businesses across industries. With KompassAI's
                          user-friendly capabilities, you can harness the power
                          of data to make informed decisions and stay ahead of
                          the curve. Incorporate predictive analytics into your
                          data strategy today and see how KompassAI can
                          transform the way you do business.
                        </div>
                      </div>
                      <div className="w-full h-[2px] bg-[#DDD] my-[24px]"></div>
                      <div className="flex flex-row gap-4">
                        <div className="font-Outfit text-stone-950 text-lg font-[400] text-center">
                          Share
                        </div>
                        <div>
                          <img src={LinkedInIcon} />
                        </div>
                        <div>
                          <img src={FacebookIcon} />
                        </div>
                        <div>
                          <img src={TwitterIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden 2xl:flex 2xl:basis-1/4">
                  <div className="flex flex-col md:gap-10 md:ml-10">
                    <p className="flex flex-col  font-Outfit text-lg md:text-[26px] font-[400] text-emerald-500 mt-[12px]">
                      Related stories
                    </p>
                    <div className="">
                      {relatedStories &&
                        relatedStories.map((relatedstory) => (
                          <ArticleCard children={relatedstory} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RecentBar />
        </div>
      </BaseContainer>
    </LandingLayout>
  );
}
