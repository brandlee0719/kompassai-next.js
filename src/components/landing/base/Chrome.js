import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";

const Chrome = ({ opacity, scale, sL }) => {
  const [animate, setAnimate] = useState({ top: 50, left: 50 });
  useEffect(() => {
    setAnimate({ top: 10, left: 10 });
  }, []);

  return (
    <Box
      className={`animate-fade-in duration-[500ms] w-[114px] h-[114px] absolute max-sm:top-6 max-sm:left-[35px] bg-emerald-300 flex items-center justify-center`}
      sx={{
        padding: "16px",
        boxShadow: "0px 4px 34px 0px rgba(222 , 235 , 233 , 0.1)",
        borderRadius: "34px",
        opacity: opacity,
        transform: `translate3d(${sL / 0.7}px, ${
          sL / 0.8
        }px, 0px) scale(${scale}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        top: `${animate.top}%`,
        left: `${animate.left}%`,
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
            <g clipPath="url(#clip0_690_1428)">
              <path
                d="M12 15.9844C14.2005 15.9844 15.9844 14.2005 15.9844 12C15.9844 9.79949 14.2005 8.01562 12 8.01562C9.79949 8.01562 8.01562 9.79949 8.01562 12C8.01562 14.2005 9.79949 15.9844 12 15.9844Z"
                fill="#090C05"
              />
              <path
                d="M6.73372 10.8474C7.26303 8.42705 9.42298 6.60937 11.9999 6.60937H22.7277C22.1585 5.47936 21.4059 4.43541 20.4852 3.51469C18.2187 1.24823 15.2052 0 11.9999 0C8.79458 0 5.78112 1.24823 3.51458 3.51469C3.29661 3.73266 3.08829 3.95766 2.8894 4.18894L6.73372 10.8474Z"
                fill="#090C05"
              />
              <path
                d="M13.635 17.1369C13.1191 17.3014 12.5698 17.3906 12 17.3906C9.99759 17.3906 8.24681 16.2931 7.31728 14.668C7.31062 14.6577 7.30401 14.6475 7.29783 14.6368L1.96927 5.40747C0.688172 7.3481 0 9.62106 0 12C0 15.2053 1.24823 18.2187 3.51469 20.4853C5.25108 22.2216 7.42608 23.3595 9.78965 23.7972L13.635 17.1369Z"
                fill="#090C05"
              />
              <path
                d="M15.6267 8.01562C16.7095 9.00225 17.3902 10.4231 17.3902 12C17.3902 12.9918 17.1206 13.9216 16.6514 14.7208C16.6466 14.73 16.6425 14.7393 16.6373 14.7484L11.3076 23.9797C11.5372 23.9927 11.7678 24 11.9995 24C15.2049 24 18.2183 22.7518 20.4848 20.4853C22.7513 18.2188 23.9995 15.2053 23.9995 12C23.9995 10.6216 23.7681 9.27891 23.3247 8.01562H15.6267Z"
                fill="#090C05"
              />
            </g>
            <defs>
              <clipPath id="clip0_690_1428">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Card>
    </Box>
  );
};

export { Chrome };
