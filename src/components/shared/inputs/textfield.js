import React from "react";
import TextField from "@mui/material/TextField";

const textFieldStyles = {
  "&.MuiFormControl-root": {
    borderRadius: "0.25rem",
    border: "1px solid currentColor",
    height: "42px",
    color: "white",
    ".MuiInputBase-root": {
      height: "inherit",
      color: "white",

      ".MuiInputBase-input": {
        textTransform: "uppercase",

        height: "inherit",
        paddingTop: "0px",
        paddingBottom: "3px",
        fontSize: "16px",
        "&::placeholder": {
          fontSize: "14px",
        },
      },
      ":before": { borderBottom: "0px" },
      ":after": { borderBottom: "0px" },
    },
  },
};

const Textfield = ({ placeholder, maxLen }) => {
  return (
    <>
      <TextField
        id="filled-basic"
        placeholder={placeholder}
        variant="filled"
        fullWidth
        sx={textFieldStyles}
        inputProps={{ maxLength: maxLen }}
      />
    </>
  );
};

export default Textfield;
