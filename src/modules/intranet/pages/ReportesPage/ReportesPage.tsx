import { useState,useEffect } from 'react'
import { SwitchComponente } from './SwitchComponente'
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Formulario } from './Formulario';
import { Tabla } from './Tabla';

interface FormData {
  nombres: string;
  apellidos: string;
}


export const ReportesPage = () => {

  const [showCard, setShowCard] = useState<boolean[]>([false, false, false]);

  const openCard = (index: number) => {
    const updatedShowCard = [...showCard];
    updatedShowCard[index] = true;
    setShowCard(updatedShowCard);
  };

  const closeCard = (index: number) => {
    const updatedShowCard = [...showCard];
    updatedShowCard[index] = false;
    setShowCard(updatedShowCard);
  };

  const options = [
    { title: 'Opción 1', content: 'Contenido de la Opción 1' },
    { title: 'Opción 2', content: 'Contenido de la Opción 2' },
    { title: 'Opción 3', content: 'Contenido de la Opción 3' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  // const [duplicados, setDuplicados] = useState<FormData[]>([]);

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   setDuplicados([...duplicados, data]);
  //   reset();
  // };

  // const handleEditar = (index: number) => {
  //   const duplicado = duplicados[index];
  //   reset(duplicado);
  //   setDuplicados(duplicados.filter((_, i) => i !== index));
  // };


  const [dataList, setDataList] = React.useState<FormData[]>([]);
  const [editIndex, setEditIndex] = React.useState<number | null>(null);


  // Cargar datos almacenados en localStorage al montar el componente
  useEffect(() => {
    const storedData = localStorage.getItem('dataList');
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (editIndex !== null) {
      const updatedList = [...dataList];
      updatedList[editIndex] = data;
      setDataList(updatedList);
      setEditIndex(null);

      // Guardar datos en localStorage después de editar
      localStorage.setItem('dataList', JSON.stringify(updatedList));
    } else {
      setDataList([...dataList, data]);
      // Guardar datos en localStorage después de agregar
      localStorage.setItem('dataList', JSON.stringify([...dataList, data]));
    }
    reset();
    
    console.log(data);
    console.log(dataList);
    
  };

  const handleEdit = (index: number) => {
    const editItem = dataList[index];
    reset(editItem);
    setEditIndex(index);
    console.log(editItem);
  };

  const handleDelete = (index: number) => {
    const updatedList = dataList.filter((_, i) => i !== index);
    setDataList(updatedList);
    setEditIndex(null);

        // Actualizar datos en localStorage después de eliminar un elemento
        localStorage.setItem('dataList', JSON.stringify(updatedList));
  };
  

  return (
    <>
    {/* <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => openCard(index)}>
          {option.title}
        </button>
      ))}

      {options.map((option, index) => (
        <div key={index}>
          {showCard[index] && (
            <SwitchComponente
              title={option.title}
              content={option.content}
              onClose={() => closeCard(index)}
            />
          )}
        </div>
      ))}
    </div> */}
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          type="text"
          placeholder="Nombre"
          {...register('nombres')}
        />
        <input
          type="text"
          placeholder="Apellido"
          {...register('apellidos')}
        />
         <button type="submit">
          {editIndex !== null ? 'Editar' : 'Agregar'}
        </button>
      </form>

      <div>
        {dataList.map((duplicado, index) => (
          <div key={index}>
            <p>Nombre: {duplicado.nombres}</p>
            <p>Apellido: {duplicado.apellidos}</p>
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
    <div>
    </div>
    </>
  );
}
