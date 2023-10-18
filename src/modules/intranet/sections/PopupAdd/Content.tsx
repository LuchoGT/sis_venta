import { FormPruebas } from "@/interfaces/interfaces";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface props {
  onClose: () => void;
  viewingIndex: number | null;
  data: FormPruebas[];
  onAssign: (index: number, cursos: string) => void; // Función para agregar datos

}



export const Content = ({onClose, data, viewingIndex,onAssign }: props) => {
  
  
  const { register, setValue, handleSubmit,reset } = useForm<FormPruebas>();

  // useEffect(() => {
  //   if (viewingIndex !== null) {
  //     const itemToView = data[viewingIndex];
  //     setValue("nombres", itemToView.nombres + " " + itemToView.apellidos);
  //   }
  // }, [viewingIndex, data]);

  // const [probando, setProbando] = useState<probando[]>(()=>{
  //   const savedDataF = localStorage.getItem('asignar');
  //   return savedDataF ? JSON.parse(savedDataF) : [];
  // });

  // const pro = (efe: probando) => {
  //   const newP = [...probando, efe];
  //   setProbando(newP);
  //   localStorage.setItem('asignar', JSON.stringify(newP));
  //   console.log('probando asignar');

  // };

  // useEffect(() => {
  //   const savedData = localStorage.getItem('asignar');
  //   if (savedData) {
  //     setProbando(JSON.parse(savedData));
  //   }
  // }, []);

  const [selectedItems, setSelectedItems] = useState<string>('');

  // const onSubmit = (data: probando) => {
  //   // Agregar los valores seleccionados a la lista si ambos campos están llenos
  //   if (data.cursos && data.grado) {
  //     setSelectedItems([...selectedItems, `${data.cursos} - ${data.grado}`]);
  //   }
  //   reset({ grado: "", cursos:""});
  //   console.log(data);
  // };

  // const handleRemoveItem = (index: number) => {
  //   const updatedItems = [...selectedItems];
  //   updatedItems.splice(index, 1);
  //   setSelectedItems(updatedItems);
  //    // Actualizar el localStorage después de eliminar el elemento
  //    localStorage.setItem("asignar", JSON.stringify(updatedItems));
  // };

  // const handleAddToLocalStorage = () => {
  //   // Almacena los valores en el localStorage como una cadena JSON
  //   localStorage.setItem("asignar", JSON.stringify(selectedItems));
  // };

  // useEffect(() => {
  //   // Recuperar los elementos almacenados en localStorage al cargar la página
  //   const storedItems = localStorage.getItem("asignar");
  //   if (storedItems) {
  //     setSelectedItems(JSON.parse(storedItems));
  //   }
  // }, []);

  // const isAddToLocalStorageDisabled = selectedItems.length === 0;

  const handlEnlistar = (data: { cursos: string }) => {
    setSelectedItems(data.cursos);
    reset();

   
  };

  const handleAgregar = () => {
    if (selectedItems && viewingIndex!==null) {
      onAssign(viewingIndex,selectedItems);
    }

    onClose()
  };

  const selectedData = viewingIndex !== null ? data[viewingIndex] : null;


  return (
    <form className="popUp-add__form">
      <div className="popUp-add__content">
        <label>Docente</label>
        {selectedData && (
            <div>
              <p>Nombres: {selectedData.nombres + " "+selectedData.apellidos}</p>
            </div>
          )}
      </div>
      <div className="popUp-add__content">
        <div>
          <span>Curso</span>
          <select {...register("cursos")}>
            <option value="">---</option>
            <option value="Matematica">Matematica</option>
            <option value="Lenguaje">Lenguaje</option>
            <option value="Fisica">Fisica</option>
          </select>
        </div>
        {/* <div>
          <span>Grado/Sección/Nivel/Turno</span>
          <select {...register("grado")}>
            <option value="">---</option>
            <option value="3° - A - Primaria - Mañana">
              3° - A - Primaria - Mañana
            </option>
            <option value="3° - B - Primaria - Mañana">
              3° - B - Primaria - Mañana
            </option>
            <option value="3° - C - Primaria - Mañana">
              3° - C - Primaria - Mañana
            </option>
          </select>
        </div> */}
        <button type="button" onClick={handleSubmit(handlEnlistar)}>Agregar</button>
        <div className="teacher-add__courses">
          <p>{selectedItems.length} cursos asignados</p>
          <ul className="teacher-add__list">
           {selectedItems && (
            <div>
              <p>Curso seleccionado: {selectedItems}</p>
            </div>
          )}
          </ul>
        </div>
      </div>
      <div className="popUp-add__buttons">
        <button
          className="popUp-add__button popUp-add__button--cancel"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button type="button" onClick={handleAgregar} className="popUp-add__button">
          Agregar
        </button>
      </div>
    </form>
  );
};
