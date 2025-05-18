import React, { useState } from "react";
import { useEmail } from "./UseMails";
import useValidationField from "./ValidationFields";

export const ButtonStatus = () => {
  const [remetente, setRemetente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { sendEmail, loading, error, success } = useEmail();
  const { errors, validate } = useValidationField();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate({
      remetente,
      destinatario,
      mensagem,
    });

    if (!isValid) return;

    await sendEmail({ remetente, destinatario, mensagem });

    setRemetente("");
    setDestinatario("");
    setMensagem("");
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
    remetente,
    destinatario,
    mensagem,
    setRemetente,
    setDestinatario,
    setMensagem,
    handleSubmit,
    getButtonProps,
    errors,
    success,
    error,
    loading,
  };
};
