import { useState } from "react";

export const useTeacher = () => {

  //abrir y cerrar la vista agregar/editar docente
 
  const [openView, setOpenView] = useState(false);

  const toggleOpenView=()=>{
    setOpenView(!openView)
  }
 
  //abrir y cerrar el popup

  const [isPopUpView, setisPopUpView] = useState(false);

  const tooglePopUpView = () => {
    setisPopUpView(!isPopUpView);
  };

  return {
    isPopUpView,
    tooglePopUpView,
    openView,
    toggleOpenView
  };
};
