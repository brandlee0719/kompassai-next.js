import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { Button, Select, Option } from "@material-tailwind/react";
import IconButton from "@mui/material/IconButton";
import { InputAdornment, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Slider from "@mui/material/Slider";

import {
  AccordianComponent,
  DataEnrichedComponent,
} from "./AccordianComponents";
import AccordianIndustry from "./AccordianIndustry";
import FilterDropdown from "@/components/common/FilterDropdown";

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
} from "@/utils/constants";

function ContactFilterComponent({onSearchByFilter}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [dept, setDept] = useState("");
  const [level, setLevel] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [nameDomain, setNameDomain] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [revenue, setRevenue] = useState("");
  const [industryName, setIndustryName] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [location, setLocation] = useState("");

  const onSearchButtonClicked = () => {
    let params = {};
    
    if( !(name == '' || name == null) ) params['name'] = [ name ];
    if( !(title == '' || title == null) ) params['title'] = [ title ];
    if( !(dept == '' || dept == null) ) params['dept'] = [ dept ];
    if( !(level == '' || level == null) ) params['level'] = [ level ];
    if( !(companyName == '' || companyName == null) ) params['companyName'] = [ companyName ];
    if( !(nameDomain == '' || nameDomain == null) ) params['nameDomain'] = [ nameDomain ];
    if( !(numberOfEmployees == '' || numberOfEmployees == null) ) params['numberOfEmployees'] = [ numberOfEmployees ];
    if( !(revenue == '' || revenue == null) ) params['revenue'] = [ revenue ];
    if( !(industryName == '' || industryName == null) ) params['industryName'] = [ industryName ];
    if( !(technologies == '' || technologies == null) ) params['technologies'] = [ technologies ];
    if( !(location == '' || location == null) ) params['location'] = [ location ];

    // // const params = {
    // //   "nameDomain": [
    // //     "adapt.io"
    // //   ],
    // //   "limit":5
    // // }

    params['limit'] = 5;
    onSearchByFilter(params)
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row items-center justify-between p-3">
          <div className="text-stone-950 font-Outfit text-md">Filters</div>
          <div className="flex flex-row items-center gap-1 2xl:gap-2">
            <div className="text-magenta-500 font-Outfit text-xs cursor-pointer select-none">
              Clean filters
            </div>
            <Button
              onClick={onSearchButtonClicked}
              className="text-stone-950 bg-emerald-200 font-Outfit text-xs rounded-md py-1 px-2 2xl:px-2 normal-case font-normal">
              Save search
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-between p-1">
          <AccordianComponent title="Name" icon={UserIcon}>
            <div className="w-full mt-1">
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                placeholder="First and Last name"
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Company name" icon={HomeIcon}>
            <div className="w-full mt-1">
              <TextField
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Job title" icon={JobTitleIcon}>
            <div className="w-full mt-1">
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Location" icon={LocationIcon}>
            <div className="w-full mt-1">
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <DataEnrichedComponent />
          <AccordianComponent title="Department" icon={DepartmentIcon}>
            <div className="w-full mt-1">
              <FilterDropdown
                options={departmentList}
                defaultValue={departmentList[0].value}
                value={dept}
                onChange={(value) => { setDept(value); }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Level" icon={LevelIcon}>
            <div className="w-full mt-1">
              <FilterDropdown
                options={levelList}
                defaultValue={levelList[0].value}
                value={level}
                onChange={(value) => { setLevel(value) }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Employee" icon={EmployeeIcon}>
            <div className="w-full mt-1">
              <FilterDropdown
                options={numberOfEmployeesList}
                defaultValue={numberOfEmployeesList[0].value}
                value={numberOfEmployees}
                onChange={(value) => { setNumberOfEmployees(value) }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Revenue" icon={USDIcon}>
            <div className="w-full mt-1">
              <FilterDropdown
                options={revenueList}
                defaultValue={revenueList[0].value}
                value={revenue}
                onChange={(value) => { setRevenue(value) }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Industry name" icon={IndustryIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder="Enter Industries"
                value={industryName}
                onChange={(e) => { setIndustryName(e.target.value) }}
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Technology name" icon={TechnologyIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder="Enter Technology"
                value={technologies}
                onChange={(e) => { setTechnologies(e.target.value) }}
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>

          {/* <AccordianComponent title="Location" icon={LocationIcon}>
            <div className="w-full mt-1">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  calendars={2}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </div>
          </AccordianComponent> */}


          {/* <AccordianComponent title="Employee Count" icon={EmployeeIcon}>
            <div className="w-full mt-1 px-5">
              <Slider
                aria-label="Always visible"
                value={[4000, 6000]}
                getAriaValueText={(value) => { return value; }}
                step={1000}
                min={0}
                max={10000}
                marks={[{value:0, label:'0'}, {value:10000, label:'10000'}]}
                // valueLabelDisplay="on"
              />
            </div>
          </AccordianComponent> */}
          {/* <AccordianComponent title="Revenue" icon={USDIcon}>
            <div className="w-full mt-1 px-5">
            <Slider
                aria-label="Always visible"
                value={[4000, 6000]}
                getAriaValueText={(value) => { return value; }}
                step={1000}
                min={0}
                max={10000}
                marks={[{value:0, label:'0'}, {value:10000, label:'10000'}]}
                // valueLabelDisplay="on"
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Industry name" icon={IndustryIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder="Enter Industries"
                InputProps={{
                  sx: {
                    height: "30px",
                    padding: "0.1rem",
                    backgroundColor: "white",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                  },
                }}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Technology name" icon={TechnologyIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder="Enter Technology"
                InputProps={{
                  sx: {
                    height: "30px",
                    padding: "0.1rem",
                    backgroundColor: "white",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontFamily: "Outfit",
                    fontSize: "14px",
                  },
                }}
              />
            </div>
          </AccordianComponent> */}
          {/* <AccordianIndustry/> */}
        </div>
      </div>
    </>
  );
}

function CompanyFilterComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row items-center justify-between p-3">
          <div className="text-stone-950 font-Outfit text-md">Filters</div>
          <div className="flex flex-row items-center gap-1 2xl:gap-2">
            <div className="text-magenta-500 font-Outfit text-xs cursor-pointer select-none">
              Clean filters
            </div>
            <Button className="text-stone-950 bg-emerald-200 font-Outfit text-xs rounded-md py-1 px-2 2xl:px-2 normal-case font-normal">
              Save search
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-between p-1">
          <AccordianComponent title="Company name" icon={HomeIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title="Job title" icon={JobTitleIcon}>
            <div className="w-full mt-1">
              <TextField
                className="w-full"
                placeholder=""
                InputProps={FilterInputProps}
              />
            </div>
          </AccordianComponent>
          <AccordianIndustry />
        </div>
      </div>
    </>
  );
}

export { ContactFilterComponent, CompanyFilterComponent };
