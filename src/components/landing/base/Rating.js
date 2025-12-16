import { Box, Card } from "@mui/material";
import { ReactComponent as RatingStarSVG } from "@/assets/image/base/ratingStar.svg";
import { useEffect, useState } from "react";
// import { Card } from "@material-tailwind/react";

const Rating = ({ marginTop, marginLeft, opacity, scale, sL }) => {
  const [animate, setAnimate] = useState({ top: 50, left: 50 });
  useEffect(() => {
    setAnimate({ top: 75, left: 50 });
  }, []);
  return (
    <Card
      className={`animate-fade-in duration-[500ms] w-[257px] h-[116px] absolute bg-[#FFFFFF] flex items-center justify-center`}
      sx={{
        padding: "24px",
        boxShadow: "0 0 10px 7px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        marginTop: `${marginTop}px !important`,
        marginLeft: `${marginLeft}px !important`,
        opacity: opacity,
        transform: ` translate3d(${-sL / 5}px, ${
          sL / 15
        }px, 0px) scale(${scale}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)  translate(-50%, 0%) !important`,
        top: `${animate.top}%`,
        left: `${animate.left}%`,
      }}
    >
      <div className="flex items-center justify-center">
        <Box className="w-[209px] h-[68px] gap-[8px]">
          <Box className="flex items-center justify-center">
            <RatingStarSVG />
            <RatingStarSVG />
            <RatingStarSVG />
            <RatingStarSVG />
            <RatingStarSVG />
          </Box>
          <Box className="mt-3 text-center">
            <span className="font-bold">4.8 /</span> 5 based on 5,649 reviews |
            GDPR Compliant
          </Box>
        </Box>
      </div>
    </Card>
  );
};
export { Rating };
