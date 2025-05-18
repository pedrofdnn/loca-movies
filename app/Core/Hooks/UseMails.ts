import { useState } from "react";
// import emailjs from "@emailjs/browser";

interface TemplateParams {
  remetente: string;
  destinatario: string;
  mensagem: string;
  [key: string]: string;
}

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (templateParams: TemplateParams) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await emailjs.send(
        "mail_gmail",
        "template_SendEmail",
        templateParams,
        "2AFCfLcvNn3oHO7fv"
      );
      console.log("Email enviado:", response.status, response.text);
      setSuccess(true);
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      setError("Não foi possível enviar o e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};