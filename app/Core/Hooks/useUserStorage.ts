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
  const [nomeCompletoLogado, setNomeCompletoLogado] = useState<string | null>(null);

  const saveUser = async (userData: User) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      setLoading(true);
      setError(null);

      const usuariosString = localStorage.getItem(USUARIOS_STORAGE_KEY);
      const usuarios: User[] = usuariosString ? JSON.parse(usuariosString) : [];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const existe = usuarios.some((u) => u.usuario === userData.usuario);
      if (existe) {
        setError("Usuário já existe.");
        setLoading(false);
        return;
      }

      usuarios.push(userData);
      localStorage.setItem(USUARIOS_STORAGE_KEY, JSON.stringify(usuarios));

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        router.push("/LoginPage");
      }, 3000);
    } catch (err) {
      setError("Erro ao salvar usuário.");
      setLoading(false);
    }
  };

  const loginUser = async (usuario: string, senha: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      setLoading(true);
      setError(null);
      const usuariosString = localStorage.getItem(USUARIOS_STORAGE_KEY);
      const usuarios: User[] = usuariosString ? JSON.parse(usuariosString) : [];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === usuario && u.senha === senha
      );

      if (usuarioEncontrado) {
        setSuccess(true);
        setError(null);
        setLoading(false);

        const nomeCompleto = usuarioEncontrado.nomeCompleto ?? usuarioEncontrado.usuario ?? null;
        setNomeCompletoLogado(nomeCompleto);

        setTimeout(() => {
          router.push("/HomePage");
        }, 2000);
      } else {
        setError("Usuário ou senha incorretos.");
        setLoading(false);
      }
    } catch (err) {
      setError("Erro ao realizar login.");
      setLoading(false);
    }
  }

  return { saveUser, loginUser, loading, error, success, nomeCompletoLogado };
};
