"use client";
import { ButtonStatus } from "../Hooks/CreateStatus";
import Link from "next/link";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import { Box, Button, Stack, TextField } from "@mui/material";
import SubmitButton from "./SubmitButton";
import PasswordInput from "./PasswInput";

export default function NewUserForm() {
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

        <PasswordInput
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          label="Senha"
          width="35ch"
          margin={1}
        />

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
