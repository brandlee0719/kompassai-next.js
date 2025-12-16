import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DownSVGIcon } from "@/assets/image/icons/down.svg";
import { ReactComponent as LogoSVGIcon } from "@/assets/image/icons/logo.svg";
import { ReactComponent as MenuIcon } from "@/assets/image/icons/menu.svg";
import { ReactComponent as CloseSVGIcon } from "@/assets/image/icons/close.svg";
import { navList } from "@/utils/common";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import BaseContainer from "@/components/BaseContainer";

import { pageContentWidth } from "@/utils/common";

import useKompassRouter from "@/hooks/useKompassRouter";

export default function LandingHeader(props) {
  const [show, setShow] = useState(true);
  const [isMenu, setIsMenu] = useState(true);
  const { kompassNavigate } = useKompassRouter();

  const getWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const menuClicked = () => {
    setIsMenu(!isMenu);
  };
  const closeClicked = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      setShow(getWidth() > 1024);
    };
    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
  }, []);
  // const navigation = useNavigate();

  return (
    <div
      className={`w-full ${"bg-[" + props.backColor + "]"}  "flex flex-col"`}
    >
      <BaseContainer width={pageContentWidth}>
        <div className="w-full flex rounded-b-[30px] bg-[#051F21] py-[5px] text-white text-[15px] font-[700] font-Outfit px-[16px] text-center">
          Discover how our clients are optimizing lead generation accuracy with
          our AI powered by our robust data infrastructure and analytics
          capabilities.
        </div>
        {show ? (
          <>
            <div className="w-full flex justify-between items-center p-[16px_40px] xl:p-[16px_120px]">
              <div>
                {props.invertColor ? (
                  <LogoSVGIcon className="w-[130px] h-[25px]" fill="#ffffff" />
                ) : (
                  <LogoSVGIcon className="w-[130px] h-[25px]" />
                )}
              </div>
              <div className="flex items-center gap-[10px] lg:gap-[32px]">
                {navList.map((item, ind) => {
                  return (
                    <Link
                      key={ind}
                      className="flex items-center gap-[4px]"
                      to={navList[ind].router}
                    >
                      {props.invertColor ? (
                        <p className="font-[18px] text-white">{item.label}</p>
                      ) : (
                        <p className="font-[18px]">{item.label}</p>
                      )}
                      {item.icon &&
                        (props.invertColor ? (
                          <DownSVGIcon fill="#ffffff" />
                        ) : (
                          <DownSVGIcon />
                        ))}
                    </Link>
                  );
                })}
              </div>
              <div className="flex gap-[8px]">
                <Button
                  className={
                    props.invertColor
                      ? "outline-none border-[1px] rounded-full text-white text-[14px] font-[700] p-[8px_24px] bg-transparent hover:bg-white hover:text-emerald-500"
                      : "outline-none border-[1px] rounded-full text-emerald-500 text-[14px] font-[700] p-[8px_24px] bg-transparent hover:bg-emerald-500 hover:text-white"
                  }
                >
                  LOGIN
                </Button>
                <Button
                  className={
                    props.invertColor
                      ? "outline-none border-[1px] rounded-full text-[14px] p-[8px_24px] bg-white text-emerald-500 font-[700] whitespace-nowrap hover:bg-emerald-500 hover:text-white"
                      : "outline-none border-[1px] rounded-full text-[14px] p-[8px_24px] bg-emerald-500 text-white font-[700] whitespace-nowrap hover:bg-white hover:text-emerald-500"
                  }
                >
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between items-center p-[16px_16px] xl:p-[16px_80px]">
                <div>
                  {props.invertColor ? (
                    <LogoSVGIcon
                      className="w-[130px] h-[25px]"
                      fill="#ffffff"
                    />
                  ) : (
                    <LogoSVGIcon className="w-[130px] h-[25px]" />
                  )}
                </div>
                {isMenu ? (
                  <button onClick={menuClicked}>
                    {props.invertColor ? (
                      <MenuIcon fill="#ffffff" />
                    ) : (
                      <MenuIcon />
                    )}
                  </button>
                ) : (
                  <button onClick={closeClicked}>
                    {props.invertColor ? (
                      <CloseSVGIcon fill="#ffffff" />
                    ) : (
                      <CloseSVGIcon />
                    )}
                  </button>
                )}
              </div>

              <div className="flex w-full justify-between  p-[16px_16px]">
                <button
                  className={
                    props.invertColor
                      ? "outline-none border-[1px] font-[700] text-[14px] rounded-full text-white p-[16px_24px] bg-transparent hover:bg-emerald-500 hover:text-white"
                      : "outline-none border-[1px] font-[700] text-[14px] rounded-full text-emerald-500 p-[16px_24px] bg-transparent hover:bg-[#5b684a] hover:text-white"
                  }
                >
                  LOGIN
                </button>
                <button
                  className={
                    props.invertColor
                      ? "outline-none border-[1px] rounded-full text-[14px] p-[16px_24px] bg-white text-emerald-500 font-[700] whitespace-nowrap"
                      : "outline-none border-[1px] rounded-full text-[14px] p-[16px_24px] bg-emerald-500 text-white font-[700] whitespace-nowrap"
                  }
                >
                  BOOK A MEMO
                </button>
              </div>
              {!isMenu ? (
                <>
                  <div className="flex flex-col items-left px-[16px] gap-[10px] lg:gap-[32px]">
                    {navList.map((item, ind) => {
                      return (
                        <Link
                          key={ind}
                          className="flex items-center gap-[4px]"
                          to={navList[ind].router}
                        >
                          {props.invertColor ? (
                            <p className="text-white">{item.label}</p>
                          ) : (
                            <p>{item.label}</p>
                          )}
                          {item.icon &&
                            (props.invertColor ? (
                              <DownSVGIcon fill="#ffffff" />
                            ) : (
                              <DownSVGIcon />
                            ))}
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </BaseContainer>
    </div>
  );
}
