import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton(props) {
  const { text, variant, size, color, onClick, disabled, ...other } = props;

  return (
    <Button
      variant={variant || "contained"}
      size={size}
      color={color || "primary"}
      onClick={onClick}
      fullWidth
      disabled={disabled}
      {...other}
    >
      {text}
    </Button>
  );
}