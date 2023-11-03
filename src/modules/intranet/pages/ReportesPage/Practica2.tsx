import {useState} from 'react'
import { Form2 } from './Form2';
import { Table } from './Table';
import { usePractica2 } from './usePractica2';
import { FormDatos2, Practica2 as PracticaSob2  } from './interfaces';

export const Practica2 = () => {
    const [formOpen, setFormOpen] = useState(false);
    const toogleOpen=()=>{
        setFormOpen(!formOpen);
    }

    const onCloseForm=()=>{
        toogleOpen()
    }

    const {header,data,updateData} = usePractica2();
    console.log('Practica2',data);
    

    const handleFormSubmit = (formData: FormDatos2) => {
        const updatedData: PracticaSob2 = { ...data };
        updatedData.items.push(formData);
        updateData(updatedData);
          toogleOpen()
      };
          
  const fieldsToShow = ["nombre"];

  return (
    <div>
        <h1>Practica2</h1>
        <h2>Tabla y formulario</h2>
        {
            formOpen?
            <Form2
            onFormSubmit={handleFormSubmit}
            onClose={onCloseForm}
            />
            :
            <Table
            toogleOpen={toogleOpen}
            header={header}
            data={data}
            fields={fieldsToShow} 
            />
        }
    </div>
  )
}
