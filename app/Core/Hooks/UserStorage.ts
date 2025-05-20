"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  nomeCompleto?: string;
  usuario?: string;
  senha?: string;
  [key: string]: string | undefined;
}

const USUARIOS_STORAGE_KEY = "usuarios";

export const useUserStorage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const saveUser = async (userData: User) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      setLoading(true);
      const usuariosString = localStorage.getItem(USUARIOS_STORAGE_KEY);
      const usuarios: User[] = usuariosString ? JSON.parse(usuariosString) : [];

      const existe = usuarios.some((u) => u.usuario === userData.usuario);
      if (existe) {
        setError("Usuário já existe.");
        setLoading(false);
        return;
      }

      usuarios.push(userData);
      localStorage.setItem(USUARIOS_STORAGE_KEY, JSON.stringify(usuarios));

      setTimeout(() => {
        setError(null);
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
          router.push("/LoginPage");
        }, 3000);
      }, 2000);
    } catch (err) {
      setError("Erro ao salvar usuário.");
      setLoading(false);
    }
  };

  return { saveUser, loading, error, success };
};
