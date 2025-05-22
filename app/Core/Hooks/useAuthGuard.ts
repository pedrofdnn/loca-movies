"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const USUARIO_LOGADO_KEY = "usuarioLogado";

export const useAuthGuard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const checkLoginStatus = () => {
      const usuarioLogado = localStorage.getItem(USUARIO_LOGADO_KEY);

      if (!usuarioLogado) {
        router.replace("/LoginPage"); 
      } else {
        setIsAuthenticated(true); 
      }
    };
    checkLoginStatus();
  }, [router]);
  return { isAuthenticated };
};