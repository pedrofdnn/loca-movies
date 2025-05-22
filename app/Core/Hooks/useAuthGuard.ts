"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
      
      router.push("/LoginPage");
    }
  }, [router]);
};