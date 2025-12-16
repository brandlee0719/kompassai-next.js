import React from "react";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Typography } from "@material-tailwind/react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 13,
    fontFamily: "Outfit",
    padding: "5px 12px 5px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 30,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function SelectDropdown({
  options,
  selectedOption,
  onChange,
  defaultValue = null,
  renderValue,
}) {
  const handleOptionClick = (event) => {
    onChange(event.target.value);
    // setDropdownOpen(false);
  };

  return (
    <Select
      className="w-full"
      value={selectedOption}
      onChange={handleOptionClick}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      input={<BootstrapInput />}
      renderValue={renderValue}
      defaultValue={defaultValue}
    >
      {options.map((option) => {
        return <MenuItem value={option.value}><Typography>{option.label}</Typography></MenuItem>;
      })}
    </Select>
  );
}
