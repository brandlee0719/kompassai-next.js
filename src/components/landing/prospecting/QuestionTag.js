import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import DownBtnIcon from "../../../assets/image/icons/downBtn.svg";
export default function QuestionTag(props) {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="z-0">
      {
        // showContent == true ?
        // <>
        //     <div className='flex flex-row justify-center p-[12px] bg-[#FFF] w-[280px] md:w-[800px] rounded-[16px] z-0 mt-[20px]'>
        //         <div className='w-full text-start text-lg font-semibold h-[50px] font-Outfit  text-[#090C05]'>
        //             { props.question }
        //         </div >
        //         <button onClick={handleShowContent} className='flex justify-start'>
        //             <img src={DownBtnIcon} width={26} height={26}  />
        //         </button>
        //     </div >
        // </>
        // :
        <div
          className={` justify-center p-[12px] bg-[#FFF] w-[280px] md:w-[800px] rounded-[16px] z-0 mt-[20px] transition-transform duration-1000`}
        >
          <div className="flex flex-row ml-3">
            <div className="w-full text-start text-lg font-Outfit  text-[#090C05]">
              {props.question}
            </div>
            <button onClick={handleShowContent}>
              <img
                src={DownBtnIcon}
                width={26}
                height={26}
                style={
                  showContent == true ? { transform: "rotate(180deg)" } : null
                }
              />
            </button>
          </div>

          {showContent ? (
            <div className="text-md text-[#090C05] opacity-70 ml-3 mt-5">
              At PrivateAuto, you can renew your listing before it expires as
              many times as you need for free. You can keep your car's ad up
              until it's sold. Create your Listing today!
            </div>
          ) : null}
        </div>
      }
    </div>
  );
}
