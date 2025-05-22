import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  width?: string;
  margin?: number;
}

export default function PasswordInput({ value, label,...props}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  
  return (
    <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={props.onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
