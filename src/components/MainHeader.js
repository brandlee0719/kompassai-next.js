import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useKompassRouter from "@/hooks/useKompassRouter";
import useTeam from "@/hooks/useTeam";

import { AuthContext } from "@/context/AuthContext";

import BaseContainer from "./BaseContainer";

import { useHTTPRequest } from "@/hooks/useHTTPRequest";
import { useQuery } from "@tanstack/react-query";
import { getShortName } from "@/utils/common";
import { mainNavList, pageContentWidth } from "../utils/common";

import { ReactComponent as HotelClassSVGIcon } from "../assets/image/home/icon-hotel-class.svg";
import { ReactComponent as AccountSVGIcon } from "../assets/image/home/icon-account-circle.svg";
import { ReactComponent as DownSVGIcon } from "../assets/image/icons/down.svg";
import { ReactComponent as LogoSVGIcon } from "../assets/image/icons/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/image/icons/menu.svg";
import { ReactComponent as CloseSVGIcon } from "../assets/image/icons/close.svg";
import { ReactComponent as AlertIcon } from "../assets/image/home/icon-alert.svg";

function CircularProgressWithLabel({ color, value, size }) {
  const thickness = 6;
  return (
    <Box sx={{ position: "relative", display: "inline-flex", color: color }}>
      <CircularProgress
        variant="determinate"
        value={value}
        thickness={thickness}
        size={size}
        sx={{ color: color /*"stroke-linecap": "round"*/ }}
      />
      <CircularProgress
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          opacity: 0.4,
        }}
        variant="determinate"
        value={100}
        size={size}
        thickness={thickness}
      />
      {/* <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={value}
          thickness={3}
          size={26}
          sx={{
            color: color,
            "& .MuiCircularProgress-circle": {
              "stroke-dasharray": "10,5",
            },
          }}
        />
      </Box> */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="font-Outfit text-xs">{`${Math.round(value)}`}</div>
      </Box>
    </Box>
  );
}

export default function MainHeader({
  showProfilePopup,
  showGuidePopup,
  baseContainerWidth = 1920,
}) {
  const authContext = useContext(AuthContext);
  const { kompassNavigate } = useKompassRouter();

  const getUsageData = useHTTPRequest("/credits/getUserCreditsUsed?", "GET");

  const { data } = useQuery({
    queryKey: ["CreditsUsage"],
    queryFn: () => getUsageData(),
  });
  const getCreditsPercent = (obj) => {
    if (!obj) return 0;
    const { used, available, total } = obj;
    return Math.floor((total / available) * 100);
  };
  const [invitationsCount, setInvitationsCount] = useState(0);

  const { getInvitations, getInvitationsCount } = useTeam();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInvitationsCount();
      setInvitationsCount(response.data);
    };
    fetchData();
  }, []);

  // const [popupVisible, setPopupVisible] = useState(true);
  const pathName = window.location.pathname;

  const [show, setShow] = useState(true);
  const [isMenu, setIsMenu] = useState(true);
  const [animBadgeX, setAnimBadgeX] = useState(0);
  const [animBadgeWidth, setAnimBadgeWidth] = useState(0);
  const [animBadgeVisible, setAnimBadgeVisible] = useState(false);

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

  const gotoSignin = () => {
    kompassNavigate("/signin");
  };

  const goToArticleScreen = () => {
    kompassNavigate("/");
  };

  useEffect(() => {
    const setResponsiveness = () => {
      setShow(getWidth() > 1140); // With Email Validation link it won't fit in 1024px
    };
    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
  }, []);

  const headerHovered = (event) => {
    setAnimBadgeVisible(true);
    setAnimBadgeWidth(event.currentTarget.getBoundingClientRect().width);
    setAnimBadgeX(event.currentTarget.getBoundingClientRect().left);
  };

  return (
    <BaseContainer width={baseContainerWidth}>
      {show ? (
        <div className="w-full bg-black">
          <div className="flex w-full px-6 py-2">
            <div className="grid w-full grid-cols-6 gap-4">
              <div className="col-span-1 flex items-center justify-start">
                <Link to={"/home"}>
                  <LogoSVGIcon className="cursor-pointer" fill="#ffffff" />
                </Link>
              </div>
              <div className="col-span-4 inline-flex items-center justify-start gap-4">
                {/* <div
                  className='h-9 absolute bg-[#75EED933] rounded-3xl transition-all duration-300 z-0'
                  style={{
                    left: `${animBadgeX}px`,
                    width: `${animBadgeWidth}px`,
                    opacity: animBadgeVisible ? `1.0` : `0.0`
                  }}
                ></div> */}
                {mainNavList.map((item, index) => {
                  return (
                    <Link
                      className="z-10"
                      key={index}
                      to={mainNavList[index].router}
                      // onMouseEnter={(event) => {
                      //   console.log("Over Captured");
                      //   headerHovered(event, index);
                      // }}
                      // onMouseLeave={(event) => {
                      //   console.log("Leave Captured");
                      //   setAnimBadgeVisible(false);
                      // }}
                    >
                      <div
                        className={
                          "font-OutfitMedium leading-tight z-10 flex items-center justify-start gap-2.5 rounded-full                         px-4 pb-2 pt-1.5 text-base text-white transition-all duration-700 hover:bg-gray-850 " +
                          (pathName == mainNavList[index].router
                            ? "bg-gray-850"
                            : "bg-gray-950")
                        }
                        onMouseEnter={(event) => {
                          console.log("Over Captured");
                          headerHovered(event, index);
                        }}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="col-span-1 inline-flex items-end justify-end gap-2">
                {/* <button
                  className="px-4 py-3 justify-center items-center gap-2 inline-flex"
                  onClick={(event) => {
                    showGuidePopup(event.currentTarget);
                  }}
                >
                  <div className="text-white text-base font-OutfitMedium uppercase leading-tight tracking-tight">
                    Guide
                  </div>
                  <DownSVGIcon className="w-3 h-3 stroke-current text-white" />
                </button>
                <button className="px-4 py-3 justify-center items-center gap-2 inline-flex">
                  <div onClick={()=>kompassNavigate('/upgrade')} className="text-white text-base font-OutfitMedium uppercase leading-tight tracking-tight">
                    Upgrade
                  </div>
                </button>
                <button className="px-4 py-3 justify-center items-center gap-2 inline-flex">
                  <HotelClassSVGIcon className="w-4 h-4 fill-current text-white" />
                  <div className="text-white text-base font-OutfitMedium uppercase leading-tight tracking-tight">
                    Credits
                  </div>
                </button> */}
                <div className="mr-10 flex flex-row items-center justify-center gap-5">
                  <div className="flex cursor-pointer flex-col items-center justify-center">
                    <CircularProgressWithLabel
                      value={getCreditsPercent(data?.emails)}
                      color="#F1A9FF"
                      size={30}
                    />
                    <p className="font-Outfit text-sm text-white">Email</p>
                  </div>
                  <div className="flex cursor-pointer flex-col items-center justify-center">
                    <CircularProgressWithLabel
                      value={getCreditsPercent(data?.validations)}
                      color="#FFDE38"
                      size={30}
                    />
                    <p className="font-Outfit text-sm text-white">Valdiation</p>
                  </div>
                  <div className="flex cursor-pointer flex-col items-center justify-center">
                    <CircularProgressWithLabel
                      value={getCreditsPercent(data?.phones)}
                      color="#75EED9"
                      size={30}
                    />
                    <p className="font-Outfit text-sm text-white">Phone</p>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 px-1 py-3">
                  <Badge
                    badgeContent={4}
                    invisible={false}
                    // variant="dot"
                    color="primary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "orangered",
                      },
                    }}
                  >
                    <AlertIcon className="h-6 w-6 fill-current text-white" />
                  </Badge>
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 px-4 py-3"
                  onClick={(event) => {
                    // const updatedVisible = !popupVisible;
                    // _setPopupVisible(updatedVisible);
                    // setPopupVisible(updatedVisible);

                    showProfilePopup(event.currentTarget);
                  }}
                >
                  <div className="font-Outfit flex h-[35px] w-[35px] items-center justify-center rounded-full bg-bluegrey-200 text-base font-extrabold text-blue-500">
                    {getShortName(authContext?.userInfo?.userName)}
                  </div>
                  <DownSVGIcon className="h-4 w-3 stroke-current text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col bg-black">
            <div className="flex w-full items-center justify-between p-[16px_16px] xl:p-[16px_16px]">
              <div className="col-span-1 flex items-center justify-start">
                <LogoSVGIcon fill="#ffffff" />
              </div>
              {isMenu ? (
                <button onClick={menuClicked}>
                  <MenuIcon fill="#ffffff" />
                </button>
              ) : (
                <button onClick={closeClicked}>
                  <CloseSVGIcon fill="#ffffff" />
                </button>
              )}
            </div>

            {!isMenu ? (
              <>
                <div className="items-left mb-4 flex flex-col gap-[10px] px-[16px] lg:gap-[32px]">
                  {mainNavList.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={mainNavList[index].router}
                        className="flex items-center justify-start gap-2.5 rounded-3xl pb-2 pt-1.5"
                      >
                        <div className="font-Outfit leading-tight text-base font-semibold text-white">
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="col-span-1 mb-4 inline-flex items-end justify-between gap-2">
                  {/* <button className="px-4 py-3 rounded-3xl justify-center items-center gap-2 inline-flex">
                    <HotelClassSVGIcon className="w-6 h-6" />
                    <div className="text-white text-base font-bold font-Outfit uppercase leading-tight tracking-tight">
                      Upgrade
                    </div>
                  </button> */}

                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-white px-4 py-3"
                    onClick={(event) => {
                      // const updatedVisible = !popupVisible;
                      // _setPopupVisible(updatedVisible);
                      // setPopupVisible(updatedVisible);

                      showProfilePopup(event.currentTarget);
                    }}
                  >
                    <AccountSVGIcon className="h-6 w-6" />
                    <div className="font-Outfit leading-tight text-base font-bold uppercase tracking-tight text-black">
                      {getShortName(authContext?.userInfo?.userName)}
                    </div>
                    <DownSVGIcon className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </BaseContainer>
  );
}
