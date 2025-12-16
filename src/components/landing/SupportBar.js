import { useState, useEffect } from "react";
import ReebokSVG from "@/assets/image/customers/Reebok.svg";
import SubwaySVG from "@/assets/image/customers/Subway.svg";
import InterComSVG from "@/assets/image/customers/Intercom.svg";
import RevoludtSVG from "@/assets/image/customers/Revolut.svg";
import RedbullSVG from "@/assets/image/customers/Redbull.svg";
import Forever21SVG from "@/assets/image/customers/Forever21.svg";
import NotionSVG from "@/assets/image/customers/Notion.svg";
import LinkeDinSVG from "@/assets/image/customers/LinkedIn.svg";

// import GoogleSVG from "@/assets/image/base/google.svg";
// import MicrosoftSVG from "@/assets/image/base/microsoft.svg";
// import AmazonSVG from "@/assets/image/base/amazon.svg";
// import DoordashSVG from "@/assets/image/base/doordash.svg";
// import ScaleSVG from "@/assets/image/base/scale.svg";
// import ZoomSVG from "@/assets/image/base/zoom.svg";
// import CibcoSVG from "@/assets/image/base/cibco.svg";


import Slider from "react-slick";
import { ReactSVG } from "react-svg";
import { Box } from "@mui/material";

const partners = [
  { icon: LinkeDinSVG },
  { icon: SubwaySVG },
  { icon: RevoludtSVG },
  { icon: ReebokSVG },
  { icon: RedbullSVG },
  { icon: InterComSVG },
  { icon: Forever21SVG },
  { icon: NotionSVG },
  { icon: LinkeDinSVG },
  { icon: SubwaySVG },
  { icon: RevoludtSVG },
  { icon: ReebokSVG },
  { icon: RedbullSVG },
  { icon: InterComSVG },
  { icon: Forever21SVG },
  { icon: NotionSVG },
  // { icon: GoogleSVG },
  // { icon: MicrosoftSVG },
  // { icon: AmazonSVG },
  // { icon: DoordashSVG },
  // { icon: ScaleSVG },
  // { icon: ZoomSVG },
  // { icon: CibcoSVG },
];

export default function SupportBar({ isMobile = false }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: isMobile ? 1 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <Box className="">
      <Box className="@apply py-6">
        <Slider {...settings} >
          {partners.map((item, ind) => {
            return (
              <Box
                key={ind}
                className="flex items-center justify-center text-sm m-0"
                sx={{ display: "flex !important " }}
              >
                <ReactSVG beforeInjection={(svg) => {
                    svg.classList.add('h-5')
                    svg.classList.add('fill-current')
                    svg.classList.add('text-white')
                  }} 
                  src={item.icon}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
