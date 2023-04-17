import React from "react";
import {
  Select as MuiSelect,
  FormControl,
  MenuItem,
  FormHelperText,
  Box,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function Select({
  name,
  control,
  errors,
  label,
  options,
  onChange,
  defaultValue,
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
            borderWidth: 2,
            fontFamily: "IRANSans"
          },
        }}
      >
        <FormLabel sx={{ mb: 1, color: "#3F4756" ,fontFamily: "IRANSans"}}>{label}</FormLabel>
        <Controller
          defaultValue={defaultValue || ""}
          control={control}
          name={name}
          render={({ field: { onChange, value, name } }) => (
            <MuiSelect
              selected={value}
              fullWidth
              inputProps={{ "aria-label": "Without label" }}
              name={name}
              onChange={onChange}
              value={value}
              placeholder={label}
              sx={{
                height: "40px",
                fontFamily: "IRANSans",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d1cece",
                  borderWidth: "2px",
                },

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#0069B4",
                  borderWidth: "2px",
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#0069B4",
                  borderWidth: "2px",
                },
                ".MuiSvgIcon-root ": {},
              }}
            >
              {options.map((item) => (
                <MenuItem key={item.id} value={item.id} sx={{fontFamily: "IRANSans"}}>
                  {item.title}
                </MenuItem>
              ))}
            </MuiSelect>
          )}
        />
        {errors && <FormHelperText>{errors.message}</FormHelperText>}
      </FormControl>
    </Box>
  );
}