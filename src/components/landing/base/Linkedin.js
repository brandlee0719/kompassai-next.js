import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";

const Linkedin = ({ opacity, scale, sL }) => {
  const [animate, setAnimate] = useState({ top: 50, right: 50 });
  useEffect(() => {
    setAnimate({ top: 20, right: 10 });
  }, []);

  return (
    <Box
      className={`animate-fade-in duration-[500ms] w-[114px] h-[114px] absolute bg-emerald-300 flex items-center justify-center`}
      sx={{
        padding: "16px",
        boxShadow: "0px 4px 34px 0px rgba(222 , 235 , 233 , 0.1)",
        borderRadius: "34px",
        opacity: opacity,
        transform: `translate3d(${-sL / 0.7}px, ${
          sL / 0.9
        }px, 0px) scale(${scale}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        top: `${animate.top}%`,
        right: `${animate.right}%`,
      }}
    >
      <Card className=" w-[82px] h-[82px] bg-[#FFFFFF] rounded-2xl border border-t-1 border-r-4 border-b-4 border-l-1 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_690_1426)">
              <path
                d="M23.9943 24L24.0003 23.999V15.197C24.0003 10.891 23.0733 7.57397 18.0393 7.57397C15.6193 7.57397 13.9953 8.90198 13.3323 10.161H13.2623V7.97597H8.48926V23.999H13.4593V16.065C13.4593 13.976 13.8553 11.956 16.4423 11.956C18.9913 11.956 19.0293 14.34 19.0293 16.199V24H23.9943Z"
                fill="#090C05"
              />
              <path
                d="M0.396484 7.97705H5.37248V24.0001H0.396484V7.97705Z"
                fill="#090C05"
              />
              <path
                d="M2.882 0C1.291 0 0 1.291 0 2.882C0 4.473 1.291 5.791 2.882 5.791C4.473 5.791 5.764 4.473 5.764 2.882C5.763 1.291 4.472 0 2.882 0Z"
                fill="#090C05"
              />
            </g>
            <defs>
              <clipPath id="clip0_690_1426">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Card>
    </Box>
  );
};

export { Linkedin };
