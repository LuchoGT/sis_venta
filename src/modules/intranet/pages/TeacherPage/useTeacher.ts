import { FormPruebas } from "@/interfaces/interfaces";
import { useState,useEffect } from "react";

export const useTeacher = () => {

  //abrir y cerrar la vista agregar/editar/detalle docente
 
  const [openView, setOpenView] = useState(false);

  const toggleOpenView=()=>{
    setOpenView(!openView)
  }
 
  //abrir y cerrar el popup

  const [isPopUpView, setisPopUpView] = useState(false);

  const tooglePopUpView = () => {
    setisPopUpView(!isPopUpView);
  };

  //LOGICA PARA ALMACENAR EN LOCALSTORAGE EN LA VARIABLE data 

  const [data, setData] = useState<FormPruebas[]>(()=>{
    const savedData = localStorage.getItem('teacherList');
    return savedData ? JSON.parse(savedData) : [];
  });

  //CREACION VARIABLE PARA EDITAR
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  //CREACION VARIABLE PARA DETALLE
  const [viewingIndex, setViewingIndex] = useState<number | null>(null);

  //FUNCION PARA AGREGAR
  const handleAdd = (formData: FormPruebas) => {
    // setData([...data, formData]);
    // const newData = [...data, formData];
    // setData(newData);
    // localStorage.setItem('teacherList', JSON.stringify(newData));
    // toggleOpenView()

   
    if (editingIndex !== null) {
      // Si estamos editando, reemplazar el elemento existente
      const newData = [...data];
      newData[editingIndex] = formData;
      setData(newData);
      setEditingIndex(null);
      // Actualizar en localStorage
      localStorage.setItem('teacherList', JSON.stringify(newData));
    } else {
      // Si no estamos editando, agregar un nuevo elemento
      setData([...data, formData]);

      // Guardar en localStorage
      localStorage.setItem('teacherList', JSON.stringify([...data, formData]));
    }
    toggleOpenView()
  };

  //FUNCION PARA EDITAR
  const editItem = (index: number) => {
    toggleOpenView()
    setEditingIndex(index);
  };

  const viewDetail = (index: number) => {
    // Implementa la lógica para ver los detalles del elemento
    // Puedes abrir un modal o una nueva página, por ejemplo
    toggleOpenView();
    setViewingIndex(index);
  };

  const viewNameCourses=(index:number)=>{
    setViewingIndex(index);
  }

  //HOOK PARA RENDERIZAR LOS DATOS
  useEffect(() => {
    const savedData = localStorage.getItem('teacherList');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const assignItem = (index: number, cursos: FormPruebas['cursos']) => {
   
    const updatedData = [...data];
    updatedData[index].cursos = cursos;
    setData(updatedData); // Asumiendo que tienes un estado 'data' en Tabla
    // Ahora puedes guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('teacherList', JSON.stringify(updatedData));
  };

  const closeForm = () => {
    toggleOpenView()
    setEditingIndex(null);
    setViewingIndex(null);
  };

  const ClosePop=()=>{
    tooglePopUpView();
    setViewingIndex(null);
  }

  return {
    isPopUpView,
    tooglePopUpView,
    openView,
    toggleOpenView,
    viewingIndex,
    handleAdd,
    editItem,
    viewDetail,
    viewNameCourses,
    assignItem,
    closeForm,
    data,
    editingIndex,
    ClosePop
  };
};
