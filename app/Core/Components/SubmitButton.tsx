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
  type?: "submit" | "button";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "error" | "success";
  variant?: "text" | "outlined" | "contained";
  children?: React.ReactNode;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const {
    loading,
    success,
    error,
    color = "primary",
    variant = "contained",
    children,
  } = props;

  return (
    <Stack direction="column" spacing={1} m={2}>
      <Button
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="end"
        color={color}
        variant={variant}
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
        {children ||
          (loading
            ? children
            : success
            ? children
            : error
            ? children
            : children)}
      </Button>
    </Stack>
  );
}
