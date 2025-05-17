import { useState } from "react";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFields(fields: { [key: string]: string }): {
  [key: string]: string;
} {
  const errors: { [key: string]: string } = {};

  for (const [key, value] of Object.entries(fields)) {
    if (!value.trim()) {
      errors[key] = "Este campo é obrigatório.";
    } else if (key === "destinatario" && !isValidEmail(value)) {
      errors[key] = "Digite um e-mail válido.";
    }
  }

  return errors;
}

export default function useValidationField() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (fields: { [key: string]: string }) => {
    const validationErrors = validateFields(fields);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
}
