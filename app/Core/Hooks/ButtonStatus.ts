import { useState } from "react";
import { useEmails } from "./UseMails";
import useValidationField from "./ValidationFields";

export const ButtonStatus = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, validate } = useValidationField();
  const { login, loading, error, success } = useEmails();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate({
      email,
      password,
    });

    if (!isValid) return;

    await login({ email, password });

    setEmail("");
    setPassword("");
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
        children: "Enviado com sucesso!",
        variant: "contained",
      };
    } else if (error) {
      return {
        color: "error" as const,
        children: "Erro ao enviar",
        variant: "contained",
      };
    }
    return {
      color: "primary" as const,
      children: "Enviar",
      variant: "contained",
    };
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    getButtonProps,
    errors,
    success,
    error,
    loading,
  };
};
