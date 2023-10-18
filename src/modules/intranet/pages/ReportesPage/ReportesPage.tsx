import {useEffect } from 'react'
import {useState} from 'react';
import { Tabla } from './Tabla';
import { FormValues, Formulario } from './Formulario';




export const ReportesPage = () => {


  //prac 2 forma 

  const [formOpen, setFormOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [viewingIndex, setViewingIndex] = useState<number | null>(null);
  
  const [data, setData] = useState<FormValues[]>(()=>{
    const savedData = localStorage.getItem('practicando');
    return savedData ? JSON.parse(savedData) : [];
  });

  const op = (formData: FormValues) => {
    if (editingIndex !== null) {
      // Si estamos editando, reemplazar el elemento existente
      const newData = [...data];
      newData[editingIndex] = formData;
      setData(newData);
      setEditingIndex(null);
      // Actualizar en localStorage
      localStorage.setItem('practicando', JSON.stringify(newData));
    } else {
      // Si no estamos editando, agregar un nuevo elemento
      setData([...data, formData]);

      // Guardar en localStorage
      localStorage.setItem('practicando', JSON.stringify([...data, formData]));
    }

    // Cerrar el formulario
    setFormOpen(false);
    
  };


  const editItem = (index: number) => {
    setFormOpen(true);
    setEditingIndex(index);
  };

  const viewDetail = (index: number) => {
    // Implementa la lógica para ver los detalles del elemento
    // Puedes abrir un modal o una nueva página, por ejemplo
    setFormOpen(true);
    setViewingIndex(index);
  };
  useEffect(() => {
    const savedData = localStorage.getItem('practicando');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const closeForm = () => {
    setFormOpen(false);
    setEditingIndex(null);
    setViewingIndex(null);
  };

  const assignItem = (index: number, countries: string[]) => {

    const updatedData = [...data];
    updatedData[index].countries = countries;
    setData(updatedData); 

    // Ahora puedes guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('practicando', JSON.stringify(updatedData));
  };

  
  return (
    <>
    <div>
      <h1>Tabla y Formulario</h1>
      {formOpen ? (
        <Formulario
          onSubmit={op}
          onClose={closeForm}
          editingIndex={editingIndex}
          viewingIndex={viewingIndex}
          data={data}
        />
      ) :(
        <Tabla 
        data={data} 
        openForm={() => setFormOpen(true)} 
        editItem={editItem} 
        viewDetail={viewDetail}
        assignItem={assignItem}
        />
      )}
    </div>
    </>
  );
}