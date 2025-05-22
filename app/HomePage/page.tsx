"use client";
import React, { useEffect } from "react";
import { useAuthGuard } from "../Core/Hooks/useAuthGuard";

export default function HomePage() {
  const { isAuthenticated } = useAuthGuard();

  if (!isAuthenticated) {
    return <p>Verificando autenticação...</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          localStorage.removeItem("usuarioLogado");
          window.location.href = "/LoginPage";
        }}
      >
        Logout
      </button>
    </div>
  );
}
