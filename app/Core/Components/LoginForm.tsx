"use client";
import Link from "next/link";
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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import PasswordInput from "./PasswInput";
import { LoginStatus } from "../Hooks/useLoginStatus";

export default function LoginForm() {
  const {
    usuario,
    senha,
    setUsuario,
    setSenha,
    handleSubmit,
    getButtonProps,
    nomeCompletoLogado,
    error,
    success,
    loading,
  } = LoginStatus();

  return (
    <div className="container-login-form flex flex-col items-center">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="form-login flex flex-col items-center "
      >
        <TextField
          sx={{ m: 1, width: "32ch" }}
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          error={Boolean(error)}
          helperText={error}
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
        {success && nomeCompletoLogado && (
          <p style={{ color: "green" }}>
            <h2>Seja bem-vindo,</h2>
            {nomeCompletoLogado.split(" ")[0]}!
          </p>
        )}

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<PersonAddIcon />}>
            <Link href="/CreateUser">Criar Conta</Link>
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
