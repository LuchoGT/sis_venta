import { useState } from "react";

export const useTeacher = () => {

  //abrir y cerrar la vista agregar docente
  // const [abierto, setAbierto] = useState(true);
  const [openView, setOpenView] = useState(false);

  const toggleOpen=()=>{
    setOpenView(!openView)
  }

  //abrir y cerrar para editar y detalle
  const [isViewDocente, setViewDocente] = useState(false);
  //abrir y cerrar el popup
  const [isViewAsignarCurso, setViewAsignarCurso] = useState(false);
  const [title, setTitle] = useState("");

  const toggleAbierto = () => {
    setAbierto(!abierto);
  };

  const toggleViewDocente = () => {
    // toggleAbierto();
    setViewDocente(!isViewDocente);
  };

  const toggleViewAsignarCurso = () => {
    setViewAsignarCurso(!isViewAsignarCurso);
  };

  const editarTituloFormDocente = (title: string) => {
    setTitle(title);
  };

  return {
    // abierto,
    // toggleAbierto,
    isViewDocente,
    toggleViewDocente,
    isViewAsignarCurso,
    toggleViewAsignarCurso,
    title,
    editarTituloFormDocente,
    openView,
    toggleOpen
  };
};
