import { TextField } from "@mui/material";
import clsx from "clsx";
import React, { forwardRef } from "react";

import useStyles from "./styles";

const FormInput = (
  {
    label,
    isRequired,
    placeholder,
    wrapFormInputStyle,
    textFieldStyle,
    labelStyle,
    ...props
  },
  ref
) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.wrapFormInput, wrapFormInputStyle)}>
      <div className={clsx(classes.inputLabel, labelStyle)}>
        {label}
        {isRequired && <span className={classes.require}>*</span>}
      </div>

      <TextField
        fullWidth
        placeholder={placeholder}
        className={clsx(classes.textField, textFieldStyle)}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default forwardRef(FormInput);
