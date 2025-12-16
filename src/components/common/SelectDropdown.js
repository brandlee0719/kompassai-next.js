import React from "react";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { kompassColors } from "theme/palette";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 30,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: kompassColors.light,
    borderRadius: 6,
    fontSize: 13,
    fontFamily: "Outfit",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 6,
      borderColor: kompassColors.light,
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
  ...props
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
      {...props}
    >
      {options.map((option) => (
        <MenuItem value={option}>{option}</MenuItem>
      ))}
    </Select>
  );
}
