import React, { forwardRef, Ref } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import clsx from "clsx";
import useStyles from "./styles";

interface FormInputProps extends Omit<TextFieldProps, "ref"> {
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  wrapFormInputStyle?: string;
  textFieldStyle?: string;
  labelStyle?: string;
}

const FormInput = forwardRef(
  (
    {
      label,
      isRequired = false,
      placeholder,
      wrapFormInputStyle,
      textFieldStyle,
      labelStyle,
      ...props
    }: FormInputProps,
    ref: Ref<HTMLInputElement>
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
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
