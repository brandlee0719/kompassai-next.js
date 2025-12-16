import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { Field } from "formik";

const styledTextField = styled(TextField)({
  "& .MuiInputBase-root:before": {
    display: "none",
  },
  "& .MuiInputBase-root.Mui-focused": {
    backgroundColor: 'white'
  },
  "& .MuiInputBase-root:after": {
    display: "none",
  },
  "& .MuiInputBase-input": {
    padding: 0,
  },
});

function StyledInput({
  error,
  fieldName,
  className,
  inputProps = {},
  ...rest
}) {

  return (
    <Field
      as={styledTextField}
      error={!!error}
      className={"font-Outfit w-full p-0 text-base outline-none  placeholder:text-[#E8E7E7] before:content-[''] focus:border-[] " + className}
      variant="filled"
      id={fieldName}
      name={fieldName}
      placeholder="Placeholder"
      InputProps={{
        sx: {
          height: "48px",
          padding: "16px 12px",
          backgroundColor: "white",
          borderRadius: "6px",
          border: !!error ? "1px solid rgb(220 38 38)" : "1px solid #E8E7E7",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        },
        ...inputProps,
      }}
      {...rest}
    />
  );
}

export default StyledInput;
