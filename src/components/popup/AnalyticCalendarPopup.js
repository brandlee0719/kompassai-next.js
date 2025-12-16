import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Menu from "@mui/material/Menu";

import { profilePopupNavList } from "@/utils/common";

import { ReactComponent as SettingIcon } from "@/assets/image/profile-popup/setting.svg";
import { ReactComponent as TeamIcon } from "@/assets/image/profile-popup/team_management.svg";
import { ReactComponent as InviteIcon } from "@/assets/image/profile-popup/invite.svg";
import { ReactComponent as IntegrationIcon } from "@/assets/image/profile-popup/integration.svg";
import { ReactComponent as AnalysticsIcon } from "@/assets/image/profile-popup/analytics.svg";
import { ReactComponent as HelpIcon } from "@/assets/image/profile-popup/help.svg";
import { ReactComponent as ArrowRightSvgIcon } from "@/assets/image/icons/Arrow_Right.svg";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { styled } from "@mui/material";

const StyleDateCalendar = styled(DateCalendar)({
  "& .Mui-selected": {
    backgroundColor: "#E7436A",
    color: "#FFF",
  },
  "& .Mui-selected:hover": {
    backgroundColor: "#E7436A",
    color: "#FFF",
  },
});

export default function AnalyticCalendarPopup({ anchorEl, handleClose }) {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const options = [
    { id: 1, name: "Today" },
    { id: 1, name: "Yesterday" },
    { id: 1, name: "This week" },
    { id: 1, name: "Last week" },
    { id: 1, name: "This month" },
    { id: 1, name: "Last month" },
    { id: 1, name: "This quarter" },
    { id: 1, name: "Last quarter" },
    { id: 1, name: "Custom" },
  ];

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: "20px",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "& .MuiList-root": {
            ml: 1,
            mr: 1,
          },
        },
      }}
    >
      <div className="w-full flex flex-row p-4">
        <div className="flex flex-col col-span-1 gap-1">
          {options.map((item) => {
            return (
              <button
                key={item.id}
                className="w-36 py-2 ml-4 basis-0 text-stone-950 text-base text-start font-light font-Outfit leading-snug"
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="col-span-3">
          <div className="w-80 flex-col justify-start items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <input
                placeholder="DD/MM/YYYY"
                className="w-36 h-11 px-4 py-3 bg-white rounded-3xl border border-stone-200 justify-start items-center gap-2 flex"
              />
              <ArrowRightSvgIcon className="w-4 h-4 relative" />
              <input
                placeholder="DD/MM/YYYY"
                className="w-36 h-11 px-4 py-3 bg-white rounded-3xl border border-stone-200 justify-start items-center gap-2 flex"
              />
            </div>
            <div className="flex-col justify-end items-center flex">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyleDateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  style={{
                    "--selected-date-background-color": "#E7436A",
                  }}
                  // sx={}
                />
              </LocalizationProvider>
              {/* <div className="self-stretch h-96 bg-white rounded flex-col justify-center items-center inline-flex">
                <div className="self-stretch pl-6 pr-3 pt-4 pb-2 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 h-8 justify-start items-center gap-1.5 flex">
                    <div className="text-black text-opacity-90 text-base font-medium font-Outfit leading-normal tracking-tight">
                      December
                    </div>
                    <div className="text-black text-opacity-90 text-base font-medium font-Outfit leading-normal tracking-tight">
                      2021
                    </div>
                    <div className="p-1 rounded-full flex-col justify-center items-center inline-flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                  </div>
                  <div className="w-24 justify-start items-start gap-6 flex">
                    <div className="p-1 rounded-full flex-col justify-center items-center inline-flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                    <div className="p-1 rounded-full flex-col justify-center items-center inline-flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-0.5 inline-flex">
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    S
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    M
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    T
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    W
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    T
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    F
                  </div>
                  <div className="w-9 h-10 text-center text-black text-opacity-40 text-sm font-normal font-Outfit leading-normal tracking-wide">
                    S
                  </div>
                </div>
                <div className="self-stretch h-64 pt-3 flex-col justify-start items-center gap-0.5 flex">
                  <div className="self-stretch px-7 justify-end items-start gap-0.5 inline-flex">
                    <div className="justify-end items-start flex">
                      <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                        1
                      </div>
                      <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-0.5 inline-flex">
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      2
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      3
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      4
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      5
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      6
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      7
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      8
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-0.5 inline-flex">
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      9
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      10
                    </div>
                    <div className="w-9 h-9 justify-center items-center flex">
                      <div className="grow shrink basis-0 self-stretch bg-rose-500 rounded-full justify-center items-center inline-flex">
                        <div className="w-10 h-9 text-center text-white text-base font-normal font-Outfit leading-snug tracking-tight">
                          11
                        </div>
                      </div>
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      12
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      13
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      14
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      15
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-0.5 inline-flex">
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      16
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      17
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      18
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      19
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      20
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      21
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      22
                    </div>
                  </div>
                  <div className="self-stretch justify-center items-start gap-0.5 inline-flex">
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      23
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      24
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      25
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      26
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      27
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      28
                    </div>
                    <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                      29
                    </div>
                  </div>
                  <div className="self-stretch px-7 justify-end items-start gap-0.5 inline-flex">
                    <div className="justify-start items-start gap-0.5 flex">
                      <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                        30
                      </div>
                      <div className="w-9 h-9 text-center text-black text-opacity-90 text-base font-normal font-Outfit leading-snug tracking-tight">
                        31
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
}
