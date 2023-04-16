import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput as MuiOutlinedInput,
} from "@mui/material";

import { Controller } from "react-hook-form";

export default function OutlinedInput({
  name,
  control,
  label,
  errors,
  defaultValue,
  disabled,
  multiline,
  type,
  ...others
}) {
  return (
    <Box {...others}>
      <FormControl
        fullWidth
        sx={{
          "& .MuiFormHelperText-root": {
            color: "#BA372E !important",
            fontSize: "12px",
          },

          "& .MuiOutlinedInput-root.Mui-error": {
            borderColor: "red",
          },
        }}
      >
        <FormLabel
          sx={{
            mb: 1,

            color: "#3F4756",
          }}
        >
          {label}
        </FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue == null ? "" : defaultValue}
          render={({ field }) => (
            <MuiOutlinedInput
              {...field}
             
              fullWidth
              disabled={disabled}
              // {...other}

              sx={{
                height: "40px",
                "& .muirtl-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d1cece",
                  borderWidth: "2px",
                },
                "&:hover .Mui-disabled  + fieldset": {
                  borderColor: "#d1cece !important",
                },
                "&:hover input + fieldset": {
                  borderColor: "#0069B4 !important",
                },
                "& .MuiOutlinedInput-root.Mui-error": {
                  borderColor: "red",
                },
              }}
            />
          )}
        />
        {errors && <FormHelperText>{errors.message}</FormHelperText>}
      </FormControl>
    </Box>
  );
}