import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { Button, Select, Option } from "@material-tailwind/react";
import IconButton from "@mui/material/IconButton";
import { InputAdornment, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

import {
  AccordianComponent,
  DataEnrichedComponent,
} from "@/components/livesearch/AccordianComponents";
import AccordianIndustry from "@/components/livesearch/AccordianIndustry";
import FilterDropdown from "@/components/common/FilterDropdown";
import FilterAutocomplete from "../common/FilterAutocomplete";
import CompanyNameAutocomplete from "../common/CompanyNameAutocomplete";
import CompanyDomainAutocomplete from "../common/CompanyDomainAutocomplete";

import { FilterInputProps } from "@/theme/typography";

import { ReactComponent as CloseSVG } from "@/assets/image/icons/close.svg";
import UserIcon from "@/assets/image/search/user.svg";
import HomeIcon from "@/assets/image/search/home.svg";
import JobTitleIcon from "@/assets/image/search/jobtitle.svg";
import LocationIcon from "@/assets/image/search/location.svg";
import DepartmentIcon from "@/assets/image/search/department.svg";
import LevelIcon from "@/assets/image/search/level.svg";
import EmployeeIcon from "@/assets/image/search/employee.svg";
import USDIcon from "@/assets/image/search/usd.svg";
import IndustryIcon from "@/assets/image/search/industry.svg";
import TechnologyIcon from "@/assets/image/search/technology.svg";

import {
  departmentList,
  levelList,
  numberOfEmployeesList,
  revenueList,
  industryList,
} from "@/utils/constants";

const GrayTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#E8E7E7",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E8E7E7",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E8E7E7",
    },
    "&:hover fieldset": {
      borderColor: "#E8E7E7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E8E7E7",
    },
  },
});

function ContactFilterComponent({
  contactFilter,
  onSearchByFilter,
  visible = true,
}) {
  const [email, setEmail] = useState("");

  const [name, setName] = useState(
    contactFilter?.name ? contactFilter.name[0] : "",
  );
  const [title, setTitle] = useState(
    contactFilter?.title ? contactFilter.title[0] : "",
  );
  const [companyName, setCompanyName] = useState(
    contactFilter?.companyName ? contactFilter.companyName[0] : "",
  );
  const [companyDomain, setCompanyDomain] = useState(
    contactFilter?.companyDomain ? contactFilter.companyDomain[0] : "",
  );
  const [location, setLocation] = useState(
    contactFilter?.location ? contactFilter.location[0] : "",
  );
  const [dept, setDept] = useState(
    contactFilter?.department ? contactFilter.department : null,
  );
  const [level, setLevel] = useState(
    contactFilter?.level ? contactFilter.level : null,
  );
  const [numberOfEmployees, setNumberOfEmployees] = useState(
    contactFilter?.companyHeadCount ? contactFilter.companyHeadCount : null,
  );
  const [revenue, setRevenue] = useState(
    contactFilter?.companyRevenue ? contactFilter.companyRevenue : null,
  );
  const [industryName, setIndustryName] = useState(
    contactFilter?.companyIndustry ? contactFilter?.companyIndustry : null,
  );
  const [nameExactMatch, setNameExactMatch] = useState(
    contactFilter?.nameExactMatch ? contactFilter?.nameExactMatch : false,
  );

  useEffect(() => {
    if (contactFilter?.name) setName(contactFilter.name[0]);
    if (contactFilter?.title) setTitle(contactFilter.title[0]);
    if (contactFilter?.companyName)
      setCompanyName(contactFilter.companyName[0]);
    if (contactFilter?.companyDomain)
      setCompanyDomain(contactFilter.companyDomain[0]);
    if (contactFilter?.location) setLocation(contactFilter.location);
    if (contactFilter?.department) setDept(contactFilter.department);
    if (contactFilter?.level) setLevel(contactFilter.level);
    if (contactFilter?.companyHeadCount)
      setNumberOfEmployees(contactFilter.companyHeadCount);
    if (contactFilter?.companyRevenue) setRevenue(contactFilter.companyRevenue);
    if (contactFilter?.companyIndustry)
      setIndustryName(contactFilter.companyIndustry);
    if (contactFilter?.nameExactMatch)
      setNameExactMatch(contactFilter.nameExactMatch);
  }, [contactFilter]);

  const onSearchButtonClicked = () => {
    let params = {};

    params["nameExactMatch"] = nameExactMatch;
    if (!(name == "" || name == null)) params["name"] = [name];
    if (!(title == "" || title == null)) params["title"] = [title];
    if (!(dept == "" || dept == null)) params["dept"] = [...dept];
    if (!(level == "" || level == null)) params["level"] = [...level];
    if (!(companyName == "" || companyName == null))
      params["companyName"] = [companyName];
    if (!(companyDomain == "" || companyDomain == null))
      params["companyDomain"] = [companyDomain];
    if (!(numberOfEmployees == "" || numberOfEmployees == null))
      params["companyHeadCount"] = [...numberOfEmployees];
    if (!(revenue == "" || revenue == null))
      params["companyRevenue"] = [...revenue];
    if (!(industryName == "" || industryName == null))
      params["companyIndustry"] = [...industryName];
    // if (!(location == "" || location == null)) params["location"] = [location];

    onSearchByFilter(params);
  };

  const onClearFilterClicked = () => {
    setName("");
    setCompanyName("");
    setCompanyDomain("");
    setTitle("");
    // setLocation("");
    setDept(null);
    setLevel(null);
    setNumberOfEmployees(null);
    setRevenue(null);
    setIndustryName(null);

    onSearchByFilter({});

    console.log(FilterInputProps);
  };

  const optionAll = { label: "All", value: null };
  return (
    <>
      <div
        className={
          "fixed bottom-0 z-10 flex w-3/12 flex-row items-center justify-between border border-stone-250 bg-white 3xl:w-[480px]" +
          (visible ? "" : " hidden")
        }
      >
        <Button
          onClick={onSearchButtonClicked}
          className="font-OutfitMedium m-6 w-full rounded-md bg-stone-950 px-2 py-2 text-sm font-normal uppercase text-white 2xl:px-2"
        >
          Search
        </Button>
      </div>

      <div
        className={
          "mb-6 flex w-full flex-col px-6 pt-6" + (visible ? "" : " hidden")
        }
      >
        <div className="flex w-full flex-row items-center justify-between pb-2">
          <div className="font-Outfit text-md text-stone-950">Filters</div>

          <div className="flex flex-row items-center gap-2 2xl:gap-3">
            <div
              onClick={onClearFilterClicked}
              className="font-Outfit cursor-pointer select-none text-sm text-stone-350"
            >
              Clean filters
            </div>
            {/* <Button className="font-Outfit rounded-md bg-blue-500 px-3 py-1 text-sm font-normal normal-case text-white">
              Save search
            </Button> */}
          </div>
        </div>

        <div className="mb-14 flex w-full flex-col items-center justify-between">
          <AccordianComponent title="Name" icon={UserIcon}>
            <div className="mt-1 w-full">
              <div className="font-Outfit flex flex-row items-center justify-between text-sm text-black">
                Exact Match
                <Switch
                  defaultValue={nameExactMatch}
                  onChange={(event) => {
                    setNameExactMatch(event.currentTarget.checked);
                  }}
                />
              </div>
              <GrayTextField
                value={name}
                onKeyDown={(evt) => {
                  if (evt.keyCode === 13) onSearchButtonClicked();
                }}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                placeholder="First and last name"
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent
            title="Company name"
            icon={HomeIcon}
            expand={companyName?.length > 0}
          >
            <div className="mt-1 w-full">
              <CompanyNameAutocomplete
                value={companyName}
                onChange={(company) => {
                  setCompanyName(company?.name ?? null);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Domain" icon={DepartmentIcon}>
            <div className="mt-1 w-full">
              <CompanyDomainAutocomplete
                value={companyDomain}
                onChange={(company) => {
                  setCompanyDomain(company?.domain ?? null);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Job title" icon={JobTitleIcon}>
            <div className="mt-1 w-full">
              <GrayTextField
                value={title}
                onKeyDown={(evt) => {
                  if (evt.keyCode === 13) onSearchButtonClicked();
                }}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Location" icon={LocationIcon}>
            <div className="mt-1 w-full">
              <GrayTextField
                value={location}
                onKeyDown={(evt) => {
                  if (evt.keyCode === 13) onSearchButtonClicked();
                }}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Department" icon={DepartmentIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={departmentList}
                onChange={(value) => {
                  setDept(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Level" icon={LevelIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={levelList}
                onChange={(value) => {
                  setLevel(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Employee" icon={EmployeeIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={numberOfEmployeesList}
                onChange={(value) => {
                  setNumberOfEmployees(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Revenue" icon={USDIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={revenueList}
                onChange={(value) => {
                  setRevenue(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Industry name" icon={IndustryIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={industryList}
                onChange={(value) => {
                  setIndustryName(value);
                }}
              />
            </div>
          </AccordianComponent>
        </div>
      </div>
    </>
  );
}

function CompanyFilterComponent({ onSearchByFilter, visible }) {
  const [companyName, setCompanyName] = useState("");
  const [nameDomain, setNameDomain] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [industryName, setIndustryName] = useState(null);
  const [location, setLocation] = useState("");

  const onSearchButtonClicked = () => {
    let params = {};

    if (!(companyName == "" || companyName == null))
      params["name"] = [companyName];
    if (!(nameDomain == "" || nameDomain == null))
      params["domain"] = [nameDomain];
    if (!(numberOfEmployees == "" || numberOfEmployees == null))
      params["headCount"] = [...numberOfEmployees];
    if (!(revenue == "" || revenue == null)) params["revenue"] = [...revenue];
    if (!(industryName == "" || industryName == null))
      params["industry"] = [...industryName];

    onSearchByFilter(params);
  };

  const onClearFilterClicked = () => {
    setCompanyName("");
    setNameDomain("");
    setNumberOfEmployees(null);
    setRevenue(null);
    setIndustryName(null);

    onSearchByFilter({});
  };

  return (
    <>
      <div
        className={
          "fixed bottom-0 z-10 flex w-3/12 flex-row items-center justify-between border border-stone-250 bg-white 3xl:w-[480px]" +
          (visible ? "" : " hidden")
        }
      >
        <Button
          onClick={onSearchButtonClicked}
          className="font-OutfitMedium m-6 w-full rounded-md bg-stone-950 px-2 py-2 text-sm font-normal uppercase text-white 2xl:px-2"
        >
          Search
        </Button>
      </div>

      <div
        className={
          "mb-6 flex w-full flex-col px-6 pt-6" + (visible ? "" : " hidden")
        }
      >
        <div className="flex w-full flex-row items-center justify-between">
          <div className="font-Outfit text-md text-stone-950">Filters</div>

          <div className="flex flex-row items-center gap-2 2xl:gap-3">
            <div
              onClick={onClearFilterClicked}
              className="font-Outfit cursor-pointer select-none text-sm text-stone-350"
            >
              Clean filters
            </div>
            {/* <Button className="font-Outfit rounded-md bg-blue-500 px-3 py-1 text-sm font-normal normal-case text-white">
              Save search
            </Button> */}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between p-1">
          <AccordianComponent title="Company name" icon={HomeIcon}>
            <div className="mt-1 w-full">
              <CompanyNameAutocomplete
                value={companyName}
                onChange={(company) => {
                  setCompanyName(company?.name ?? null);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Location" icon={LocationIcon}>
            <div className="mt-1 w-full">
              <GrayTextField
                value={location}
                onKeyDown={(evt) => {
                  if (evt.keyCode === 13) onSearchButtonClicked();
                }}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Domain" icon={DepartmentIcon}>
            <div className="mt-1 w-full">
              <CompanyDomainAutocomplete
                value={nameDomain}
                onChange={(company) => {
                  setNameDomain(company?.domain ?? null);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Employee" icon={EmployeeIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={numberOfEmployeesList}
                onChange={(value) => {
                  setNumberOfEmployees(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Revenue" icon={USDIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={revenueList}
                onChange={(value) => {
                  setRevenue(value);
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Industry name" icon={IndustryIcon}>
            <div className="mt-1 w-full">
              <FilterAutocomplete
                options={industryList}
                onChange={(value) => {
                  setIndustryName(value);
                }}
              />
            </div>
          </AccordianComponent>
        </div>
      </div>
    </>
  );
}

export { ContactFilterComponent, CompanyFilterComponent };
