import { Box } from "@mui/material";
import recipients from "@/assets/image/base/recipients.png";
import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";

const Profile = ({ opacity, scale, sL }) => {
  const [animate, setAnimate] = useState({ top: 50, right: 50 });
  useEffect(() => {
    setAnimate({ top: 45, right: 10 });
  }, []);

  return (
    <Box
      className={`animate-fade-in duration-[500ms] w-[300px] h-[132px] absolute bg-emerald-300 flex items-center justify-center`}
      sx={{
        padding: "24px",
        boxShadow: "0px 4px 34px 0px rgba(222 , 235 , 233 , 0.1)",
        borderRadius: "30px",
        opacity: opacity,
        transform: `translate3d(${-sL / 0.9}px, ${
          sL / 1.5
        }px, 0px) scale(${scale}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        top: `${animate.top}%`,
        right: `${animate.right}%`,
      }}
    >
      <Card className="w-[268px] h-[100px] rounded-2xl border border-t-1 border-r-4 border-b-4 p-6 border-l-1 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <img src={recipients} alt="" className="rounded-2xl" />
        </div>
      </Card>
    </Box>
  );
};

export { Profile };
