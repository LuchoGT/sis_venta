import { useState } from "react";
import { Form } from "../../sections/Form/Form";
import { PopUp } from "../../sections/PopupAdd/PopUp";
import { TeacherList } from "../../sections/TeacherList/TeacherList";
import "./TeacherPage.scss";
import { useTeacher } from "./useTeacher";
import { useEffect } from "react";
import { FormPruebas } from "@/interfaces/interfaces";

export const TeacherPage = () => {
  const {
    openView,
    toggleOpenView,
    isPopUpView,
    tooglePopUpView
  } = useTeacher();

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
  const op = (formData: FormPruebas) => {
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

  return (
    <>
      <div className="teacher">
        {!openView ?(
          <TeacherList
            toggleOpenView={toggleOpenView}
            tooglePopUpView={tooglePopUpView}
            data={data}
            editItem={editItem}
            viewDetail={viewDetail}
            viewNameCourses={viewNameCourses}
          />
        ):(
          <Form
          onSubmit={op}
          onClose={() => {
            toggleOpenView()
            setEditingIndex(null);
            setViewingIndex(null);
          }}
          data={data}
          editingIndex={editingIndex}
          viewingIndex={viewingIndex}
          />
        )
        }
        {
          isPopUpView && 
          <PopUp
            title="Asignación de curso"
            onClose={()=>{
              tooglePopUpView();
              setViewingIndex(null);
            }}  
            viewingIndex={viewingIndex}
            data={data}
          />
        }
      </div>
    </>
  );
};
