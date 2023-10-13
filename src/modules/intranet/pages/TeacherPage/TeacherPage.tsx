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
    abierto,
    toggleAbierto,
    isViewDocente,
    toggleViewDocente,
    isViewAsignarCurso,
    toggleViewAsignarCurso,
    title,
    editarTituloFormDocente,
    openView,
    toggleOpen
  } = useTeacher();

  const [data, setData] = useState<FormPruebas[]>(()=>{
    const savedData = localStorage.getItem('teacherList');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const op = (formData: FormPruebas) => {
    // setData([...data, formData]);
    // const newData = [...data, formData];
    // setData(newData);
    // localStorage.setItem('teacherList', JSON.stringify(newData));
    // toggleOpen()

   
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
    toggleOpen()
  };


  const editItem = (index: number) => {
    toggleOpen()
    setEditingIndex(index);
  };

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
            toggleOpen={toggleOpen}
            toggleViewAsignarCurso={toggleViewAsignarCurso}
            // editarTituloFormDocente={editarTituloFormDocente}
            data={data}
            editItem={editItem}
          />
        ):(
          <Form
          onSubmit={op}
          onClose={() => {
            toggleOpen()
            setEditingIndex(null);
          }}
          editingIndex={editingIndex}
          data={data}
          // editarTituloFormDocente={(newTitle)=>editarTituloFormDocente(newTitle)}
          />
        )
      
        }
        {/* {!abierto && <Form toggleAbierto={toggleAbierto} editarTituloFormDocente={(newTitle)=>editarTituloFormDocente(newTitle)}/>} */}
        {/* {
          isViewDocente && 
          <Form
          toggleViewDocente={toggleViewDocente}
            editarTituloFormDocente={(newTitle)=>editarTituloFormDocente(newTitle)}
          />
        } */}
          {/* {
          isViewAsignarCurso && 
          <PopUp toggleViewAsignarCurso={toggleViewAsignarCurso} />
        } */}
      </div>
    </>
  );
};
