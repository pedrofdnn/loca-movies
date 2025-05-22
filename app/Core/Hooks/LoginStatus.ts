import { useState } from "react";
import { useUserStorage } from "./UserStorage";

export const LoginStatus = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const { loginUser, loading, error, success, nomeCompletoLogado } = useUserStorage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(usuario, senha);
  };

  const getButtonProps = () => {
    if (loading) {
      return {
        color: "primary" as const,
        disabled: true,
        loading: true,
        variant: "outlined",
        children: "Entrando...",
      };
    } else if (success) {
      return {
        color: "success" as const,
        children: "Login efetuado com sucesso!",
        variant: "contained",
      };
    } else if (error) {
      return {
        color: "error" as const,
        children: "Erro ao efetuar login",
        variant: "contained",
      };
    }
    return {
      color: "primary" as const,
      children: "Efetuar Login",
      variant: "contained",
    };
  };

  return {
    usuario,
    senha,
    nomeCompletoLogado,
    setUsuario,
    setSenha,
    handleSubmit,
    getButtonProps,
    loading,
    error,
    success,
  };
};


