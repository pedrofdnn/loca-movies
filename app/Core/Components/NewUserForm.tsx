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
import { useUserStorage } from "../Hooks/useUserStorage";
import useValidationField from "../Hooks/ValidationFields";
import { ButtonStatus } from "../Hooks/ButtonStatus";

import {
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";

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
      <form
        className="form-login flex flex-col items-center "
        onSubmit={handleSubmit}
      >
        <TextField
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          error={Boolean(errors.nomeCompleto)}
          helperText={errors.nomeCompleto}
          label="Nome Completo"
          variant="filled"
          fullWidth
        />

        <TextField
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          error={Boolean(errors.usuario)}
          helperText={errors.usuario}
          label="Usuário"
          variant="filled"
          fullWidth
        />

        <TextField
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          error={Boolean(errors.senha)}
          helperText={errors.senha}
          label="Senha"
          variant="filled"
          type="password"
          fullWidth
        />

        <Stack direction="column" spacing={1} m={2}>
          <Button
            {...getButtonProps()}
            type="submit"
            fullWidth
            variant="contained"
            endIcon={
              loading ? (
                <SendIcon />
              ) : success ? (
                <CheckCircleIcon />
              ) : error ? (
                <ErrorIcon />
              ) : (
                <SendIcon />
              )
            }
            disabled={loading || success}
          >
            {loading
              ? "Cadastrando.."
              : success
              ? "Cadastrado com Sucesso!"
              : error
              ? "Erro ao Cadastrar"
              : "Efetuar Cadastro"}
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
