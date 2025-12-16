import { Button } from "@material-tailwind/react";

export default function Investors(props) {
  return (
    <div>
      <div className="  flex flex-col items-center w-full bg-[url('./assets/image/background.svg')] bg-cover h-[500px] pt-[80px] ">
        <div className="relative font-Outfit text-white text-5xl md:text-8xl font-bold leading-none  md:[700px] lg:w-[1000px] text-[700] text-center ">
          Evolve your team’s <br />& intelligence
          <span
            className="inline-block bg-magenta-500 rounded-[10px] lg:rounded-[17px] 
                      rotate-6 p-[10px] lg:p-[16px] font-Outfit text-[20px] md:text-[40px] lg:text-[45px] text-white font-[700] mx-[18px]"
          >
            Today
          </span>
        </div>
        <div className="mt-[141px] md:mt-[111px]">
          <Button className="p-[10px_15px] text-sm md:text-lg md:p-[19px_24px] border-[#FFF] border-[1px] bg-transparent font-Outfit text-white font-[700] rounded-full">
            Request a demo
          </Button>
          <Button className="p-[10px_15px] text-sm md:text-lg md:p-[19px_24px] bg-white font-Outfit text-emerald-500 font-[700] rounded-full ml-[12px] md:ml-[24px] ">
            Signup for free
          </Button>
        </div>
      </div>
    </div>
  );
}
