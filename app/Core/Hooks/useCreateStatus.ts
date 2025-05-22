import React, { useState } from "react";
import { useUserStorage } from "./useUserStorage";
import useValidationField from "./useValidationFields";


export const ButtonStatus = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const { saveUser, loading, error, success } = useUserStorage();
  const { errors, validate } = useValidationField();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate({
      nomeCompleto,
      usuario,
      senha,
    });

    if (!isValid) return;

    await saveUser({ nomeCompleto, usuario, senha });

    if (success) {
      setNomeCompleto("");
      setUsuario("");
      setSenha("");
    }
  };

  const getButtonProps = () => {
    if (loading) {
      return {
        color: "primary" as const,
        disabled: true,
        loading: true,
        variant: "outlined",
        children: "Cadastrando...",
      };
    } else if (success) {
      return {
        color: "success" as const,
        children: "Cadastrado com sucesso!",
        variant: "contained",
      };
    } else if (error) {
      return {
        color: "error" as const,
        children: "Usuario já existe",
        variant: "contained",
      };
    }
    return {
      color: "primary" as const,
      children: " Efetuar o Cadastrar",
      variant: "contained",
    };
  };

  return {
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
  };
};
