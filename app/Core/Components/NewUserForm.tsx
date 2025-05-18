"use client";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import Link from "next/link";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";

export default function NewUserForm() {
  const [showPassword, setShowPassword] = useState(false);

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
      <form className="form-login flex flex-col items-center " action="">
        <TextField
          sx={{ m: 1, width: "35ch" }}
          id="filled-basic"
          label="Nome Completo"
          variant="filled"
        />

        <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-username">Usuario</InputLabel>
          <FilledInput id="filled-adornment-username" type="text" />
        </FormControl>

        <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
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

        <Stack direction="column" spacing={1} m={2}>
          <Button variant="contained" endIcon={<BorderColorIcon />}>
            Efetuar Cadastro
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SettingsBackupRestoreIcon />}>
            <Link href="/LoginPage">Voltar ao Inicio</Link>
          </Button>
        </Stack>
      </form>
    </div>
  );
}
