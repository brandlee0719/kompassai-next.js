import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Typography } from "@material-tailwind/react";
import { ThemeProvider, styled } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';
import Chip from "@mui/material/Chip";
import InputBase from "@mui/material/InputBase";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const BootstrapAutocompleteInput = styled(TextField)(({ theme }) => ({
  // "label + &": {
  //   marginTop: theme.spacing(3),
  // },
  "& .MuiInputBase-root": {
    borderRadius: 7,
    position: "relative",
    backgroundColor: "white",
    borderColor: "#80bdff",
    border: "none",
    fontSize: 12,
    fontFamily: "Outfit",
    padding: "1px 1px 1px 5px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 7,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const AutocompleteInputProps = {
    // padding: "0.1rem",
    backgroundColor: "blue",
    // borderRadius: "7px",
    // display: "flex",
    // alignItems: "center",
    // gap: "1rem",
    // fontFamily: "Outfit",
    // fontSize: "12px",
    // height: "13px", 
};

const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E8E7E7',
      },
      '&:hover fieldset': {
        borderColor: '#E8E7E7',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E8E7E7',
      },
    },
  });


export default function FilterAutocomplete({
  options,
  onChange,
  placeholder = null,
}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3b82f6",
        contrastText: "#fff",
        contrast: "#3b82f6",
        light: "#3b82f6",
      },
    },
  });

  return (
    <StyledAutocomplete
      multiple
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      // sx={AutocompleteInputProps}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          <Typography>{option.label}</Typography>
        </li>
      )}
      renderInput={(params) => (
        <BootstrapAutocompleteInput {...params} placeholder={placeholder} />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <ThemeProvider
            theme={theme}
          >
            <Chip
              label={option.label}
              size="small"
              color="primary"
              {...getTagProps({ index })}
              sx={{
                "& span": {
                  fontFamily: "Outfit",
                  fontSize: "10px",
                },
              }}
            />
          </ThemeProvider>
        ))
      }
      onChange={(event, newValue) => {
        const values = newValue.map((item) => {
          return item.value;
        });
        onChange(values);
      }}
    />
  );
}
