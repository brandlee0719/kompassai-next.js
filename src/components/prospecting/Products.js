import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ProductImage1 from "../../assets/image/product1.png";
import ProductImage2 from "../../assets/image/product2.png";
import ProductImage3 from "../../assets/image/product3.png";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="flex flex-col mt-12">
      <div className=" font-OutfitBold text-stone-950 text-[3rem] text-center">
        More products
      </div>
      <div className="flex flex-wrap items-center justify-center mt-[64px] mb-[160px]">
        <div className="flex flex-col w-[300px] h-[500px] md:w-[300px] md:h-[550px] lg:w-[350px] lg:h-[600px] xl:w-[350px] 2xl:w-[450px] justify-between  p-[40px] bg-bluegrey-100 rounded-[30px] mx-[10px] mt-[10px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Advanced search
            </div>
            <div className="font-Outfit text-lg md:text-[20px] font-[400] text-stone-950 mt-[8px]">
              Easily narrow down your search with filters, which include skill
              sets, technologies used, those who recently switched roles, and
              more.
            </div>
          </div>
          <img src={ProductImage1} />
          <div className="flex  justify-center">
            <Link to="/advancedsearch">
              <Button className="flex flex-row p-[16px_24px] text-stone-950 bg-transparent text-md font-[700] border-[1px] border-[#090C05] rounded-full">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[300px] h-[500px] md:w-[400px] md:h-[550px] lg:w-[350px] lg:h-[600px] xl:w-[350px] 2xl:w-[450px] justify-between p-[40px] bg-bluegrey-100 rounded-[30px] mx-[10px] mt-[10px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Create lead list
            </div>
            <div className="font-Outfit text-lg font-[400] text-stone-950 mt-[8px]">
              Quickly create custom lead generation list for your search needs.
              Need more, ask about our competitive bulk rates.
            </div>
          </div>
          <img src={ProductImage2} />
          <div className="flex  justify-center">
            <Link to="/csvexport">
              <Button className="flex flex-row p-[16px_24px] text-stone-950 bg-transparent text-md font-[700] border-[#090C05] border-[1px] rounded-full">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[300px] h-[500px] md:w-[40px] md:h-[550px] lg:w-[350px] lg:h-[600px] xl:w-[350px] 2xl:w-[450px] justify-between p-[40px] bg-bluegrey-100 rounded-[30px] mx-[10px] mt-[10px]">
          <div>
            <div className="font-Outfit text-2xl font-[700] text-stone-950">
              Chrome Extension
            </div>
            <div className="font-Outfit text-lg font-[400] text-stone-950 mt-[8px]">
              Our desktop Chrome extension is the easiest way to look up contact
              and company information, while you’re searching.
            </div>
          </div>
          <img src={ProductImage3} />
          <div className="flex  justify-center">
           <Link to="/prospecting">
              <Button 
                className="flex flex-row p-[16px_24px] text-stone-950 bg-transparent text-md font-[700] border-[#090C05] border-[1px] rounded-full">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
