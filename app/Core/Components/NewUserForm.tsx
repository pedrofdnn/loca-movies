"use client";
import { useState } from "react";
import { ButtonStatus } from "../Hooks/ButtonStatus";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
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
import SubmitButton from "./SubmitButton";

export default function NewUserForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    nomeCompleto,
    usuario,
    senha,
    setNomeCompleto,
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
    <div className="container-create-form flex flex-col items-center">
      <Box
        component="form"
        className="form-login flex flex-col items-center "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Cadastro de Usuário</h1>
        <TextField
          sx={{ m: 1, width: "35ch" }}
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          error={Boolean(errors.nomeCompleto)}
          helperText={errors.nomeCompleto}
          label="Nome Completo"
          variant="filled"
          fullWidth
        />

        <TextField
          sx={{ m: 1, width: "35ch" }}
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

        <SubmitButton
          {...getButtonProps()}
          loading={loading}
          success={success}
          error={Boolean(error)}
          type="submit"
          fullWidth
          variant="contained"
        />
        {success && <p style={{ color: "green" }}>Você sera Redirecionado!</p>}

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SettingsBackupRestoreIcon />}>
            <Link href="/LoginPage">Voltar ao Inicio</Link>
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
