import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Typography } from "@material-tailwind/react";
import { ThemeProvider, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import InputBase from "@mui/material/InputBase";
import { CircularProgress } from "@mui/material";

import useKompassSearch from "@/hooks/useKompassSearch";

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

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiOutlinedInput-root": {
    fontFamily: "Outfit",
    fontSize: "14px",
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

export default function CompanyDomainAutocomplete({
  onChange,
  placeholder = null,
}) {
  const { postKompassSearchNameOrDomain } = useKompassSearch();

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [apiLoading, setApiLoading] = React.useState(false);
  // const loading = open && filterText?.length >= 3 && apiLoading;

  // React.useEffect(() => {
  //   let active = true;

  //   if (!loading) {
  //     return undefined;
  //   }

  //   return () => {
  //     active = false;
  //   };
  // }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

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

  const onInputChanged = (value) => {
    console.log(value);
  };

  const loadDataByFilter = async () => {
    setApiLoading(true);

    const response = await postKompassSearchNameOrDomain({
      query: filterText,
    });

    if (response?.status) {
      setOptions([...response?.data]);
    }

    setApiLoading(false);
  };

  return (
    <StyledAutocomplete
      options={options}
      getOptionLabel={(option) => option.domain}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <div className="font-Outfit flex flex-col text-sm">
            <p>{option.name}</p>
            <p className="text-xs">{option.domain}</p>
          </div>
        </li>
      )}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      loading={apiLoading}
      renderInput={(params) => (
        <BootstrapAutocompleteInput
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {apiLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          onChange={(event) => {
            setFilterText(event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13 && filterText?.length > 3) {
              loadDataByFilter();
            }
          }}
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <ThemeProvider theme={theme}>
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
        setFilterText(newValue?.domain ?? "");
        onChange(newValue);
      }}
    />
  );
}
