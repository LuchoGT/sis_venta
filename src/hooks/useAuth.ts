import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // Verifica si hay un usuario autenticado en el localStorage al cargar la página.
    return !!localStorage.getItem("isLoggedIn");
  });

  const onLogin = (email: string, password: string) => {
    // Simula el inicio de sesión exitoso y almacena un token en localStorage
    if (email === "probando123@gmail.com" && password === "12345678") {
      setIsLoggedIn(true);
      const token = "mi_token_secreto"; // Obtén el token de autenticación
      //   const emails = email; // Obtén el nombre de usuario desde el token o de donde corresponda
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("isLoggedIn", "true");
      //   navigate('/');
      console.log("Credenciales correctasss!!!");
    } else {
      // Manejo de errores de inicio de sesión
      console.error("Credenciales incorrectas");
    }
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    // Elimina el estado de inicio de sesión y el nombre de usuario de localStorage al cerrar sesión.
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    console.log("Adios usuario");
  };

  return {
    isLoggedIn,
    onLogin,
    onLogout,
  };
};
