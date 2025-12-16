import { Box } from "@mui/material";
import { ReactComponent as PaymentsSVG } from "@/assets/image/base/payments.svg";
import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";

const Payments = ({ opacity, scale, sL }) => {
  const [animate, setAnimate] = useState({ top: 50, left: 50 });
  useEffect(() => {
    setAnimate({ top: 70, left: 10 });
  }, []);
  return (
    <Box
      className={`animate-fade-in duration-[500ms] w-[260px] h-[121px] absolute bg-emerald-300 flex items-center justify-center`}
      sx={{
        padding: "16",
        boxShadow: "0px 4px 34px 0px rgba(222 , 235 , 233 , 0.1)",
        borderRadius: "30px",
        opacity: opacity,
        transform: `translate3d(${sL / 0.8}px, ${
          sL / 6
        }px, 0px) scale(${scale}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        top: `${animate.top}%`,
        left: `${animate.left}%`,
      }}
    >
      <Card className=" w-[228px] h-[90px] gap-[10px] bg-[#FFFFFF] rounded-2xl border border-t-1 border-r-4 border-b-4 p-6 border-l-1 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <PaymentsSVG />
        </div>
      </Card>
    </Box>
  );
};

export { Payments };
