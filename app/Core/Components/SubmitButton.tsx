"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import BorderColorIcon from "@mui/icons-material/BorderColor";

interface SubmitButtonProps {
  loading: boolean;
  success: boolean;
  error: boolean;
  loadingLabel?: string;
  defaultLabel: string;
  successLabel?: string;
  errorLabel?: string;
  type?: "submit" | "button";
  fullWidth?: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const {
    loading,
    success,
    error,
    defaultLabel,
    loadingLabel = "Carregando",
    successLabel = "Sucesso!",
    errorLabel = "Erro!",
  } = props;

  return (
    <Stack direction="column" spacing={1} m={2}>
      <Button
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="end"
        variant={success || error ? "contained" : "contained"}
        endIcon={
          success ? (
            <CheckCircleIcon />
          ) : error ? (
            <ErrorIcon />
          ) : (
            <BorderColorIcon />
          )
        }
        disabled={loading || success}
      >
        {loading
          ? `${loadingLabel}...`
          : success
          ? successLabel
          : error
          ? errorLabel
          : defaultLabel}
      </Button>
    </Stack>
  );
}
