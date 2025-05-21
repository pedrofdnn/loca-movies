"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import Link from "next/link";
import { ButtonStatus } from "../Hooks/ButtonStatus";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    usuario,
    senha,
    setUsuario,
    setSenha,
    handleSubmit,
    getButtonProps,
    errors,
    success,
    error,
    loading,
  } = ButtonStatus();

  // Função para mostrar ou esconder a senha
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
    <div className="container-login-form flex flex-col items-center">
      <Box
        component="form"
        className="form-login flex flex-col items-center "
        action=""
      >
        <TextField
          sx={{ m: 1, width: "32ch" }}
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          error={Boolean(errors.usuario)}
          helperText={errors.usuario}
          label="Usuário"
          variant="filled"
          fullWidth
        />

        <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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

        <Stack direction="row" spacing={2} m={2}>
          <Button variant="contained" endIcon={<LoginIcon />}>
            Efetuar Login
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<PersonAddIcon />}>
            <Link href="/CreateUser">Criar Conta</Link>
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
