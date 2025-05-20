import React, { useState } from "react";
import { useUserStorage } from "./useUserStorage";
import useValidationField from "./ValidationFields";

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
        loading,
        variant: "outlined",
      };
    } else if (success) {
      return {
        color: "success" as const,
        children: "Cadastro realizado com sucesso!",
        variant: "contained",
      };
    } else if (error) {
      return {
        color: "error" as const,
        children: "Erro ao cadastrar",
        variant: "contained",
      };
    }
    return {
      color: "primary" as const,
      children: "Cadastrar",
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
