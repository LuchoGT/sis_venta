import {useState} from 'react';
import { Form } from './Form';
import { Table } from './Table';
import { usePractica } from './usePractica';
import { FormDatos, Practica as PracticaSob } from './interfaces';

export const Practica = () => {

    const {header,data,updateData,assignItem} = usePractica();

    const [formOpen, setFormOpen] = useState(false);
    const toogleOpen=()=>{
        setFormOpen(!formOpen);
    }
console.log("Practica1",data);
const [editingIndex, setEditingIndex] = useState<number | null>(null); // Nuevo estado para rastrear el índice de edición
const handleEditItem = (index: number) => {
    toogleOpen();// Abre el formulario para editar
    setEditingIndex(index); // Establece el índice de edición
  };

const handleFormSubmit = (formData: FormDatos) => {
    if (editingIndex !== null) {
        // Si estamos editando, actualiza el elemento existente
        const updatedData = { ...data };
        updatedData.items[editingIndex] = formData;
        updateData(updatedData);
        setEditingIndex(null); // Restablece el índice de edición

      } else {
        // Si no estamos editando, agrega un nuevo elemento
        const updatedData = { ...data };
        updatedData.items.push(formData);
        updateData(updatedData);
      }
    
      toogleOpen()
  };
      
  const closeForm = () => {
    toogleOpen();
    setEditingIndex(null);
    setViewingIndex(null);
  };

  const [viewingIndex, setViewingIndex] = useState<number | null>(null);

  const viewDetail = (index: number) => {
    // Implementa la lógica para ver los detalles del elemento
    // Puedes abrir un modal o una nueva página, por ejemplo
    toogleOpen();
    setViewingIndex(index);
  };

  const fieldsToShow = ["nombre", "apellido"];

  return (
    <div>
        <h1>Componente Practica</h1>
        <h2>Tabla y Formulario</h2>
        {
            formOpen ?
            <Form 
            onClose={closeForm}
            // addItemToData={addItemToData}
            onFormSubmit={handleFormSubmit}
            editingIndex={editingIndex} 
            viewingIndex={viewingIndex}
            data={data.items}
            />
            :
            <Table
            toogleOpen={toogleOpen}
            header={header}
            // data={data.items}
            data={data}
            onEditItem={handleEditItem}
            viewDetail={viewDetail}
            assignItem={assignItem}
            fields={fieldsToShow} 
            />
        }
    </div>
  )
}
