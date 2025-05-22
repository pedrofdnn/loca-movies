"use client";
import React, { useEffect } from "react";
import { useAuthGuard } from "../Core/Hooks/useAuthGuard";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      router.push("/LoginPage");
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <button
        onClick={() => {
          localStorage.removeItem("usuarioLogado");
          router.push("/LoginPage");
        }}
      >
        Logout
      </button>
    </div>
  );
}
