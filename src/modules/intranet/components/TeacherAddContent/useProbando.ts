import { FormData } from "@/interfaces/interfaces";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";



export const useProbando = () => {
 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        
      } = useForm<FormData>();
    

  const [dataList, setDataList] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);


  const onSubmit: SubmitHandler<FormData>  = (data) => {

    if (editIndex !== null) {
      const updatedList = [...dataList];
      updatedList[editIndex] = data;
      setDataList(updatedList);
      setEditIndex(null);
      // Guardar datos en localStorage después de editar
      localStorage.setItem('teachers', JSON.stringify(updatedList));
    } else {
      setDataList([...dataList, data]);
      // Guardar datos en localStorage después de agregar
      localStorage.setItem('teachers', JSON.stringify([...dataList, data]));
    }
    reset();
  };


  const editTeacher=(index:number)=>{

    reset();

    // const editItem = dataList[index];
    // reset(editItem);
    // setEditIndex(index);
    // console.log(editItem);

      // Mostrar los datos del elemento que se va a editar
  const editItem = dataList[index];
  for (const key in editItem) {
    if (editItem.hasOwnProperty(key)) {
      // Actualizar los valores del formulario con los datos del elemento
      setValue(key, editItem[key]);
    }
  }

  setEditIndex(index);
  }

    return{
        register,
        handleSubmit,
        errors,
        onSubmit,
        dataList,
        setDataList,
        editTeacher,
        reset,
        isEditing: editIndex !== null,
    }
}
