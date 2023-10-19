import { useState } from "react";
import { FormValues } from "./Formulario";
import { MenuDes } from "./MenuDes";
import { Formulario2 } from "./Formulario2";

interface TablaProps {
  data: FormValues[];
  openForm: () => void;
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
  assignItem: (index: number, countries: FormValues['countries']) => void; // Nueva prop para asignar un país
  toogleHabilitar:(index:number)=>void;
}
export const Tabla = ({data, openForm, editItem,viewDetail,assignItem,toogleHabilitar}: TablaProps) => {


  const [showFormulario2, setShowFormulario2] = useState(false);

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);


  const dropdownOptions = [
    { label: 'Detalle', handler: 'viewDetail' },
    { label: 'Editar', handler: 'editItem' },
    { label: 'Asignar', handler: 'assignItem' },
    { label: 'Habilitar', handler: 'Habilitar' },
  ];

  const handleAction = (handler: string, index: number) => {
    if (handler === 'viewDetail') {
      viewDetail(index);
    } else if (handler === 'editItem') {
      editItem(index);
    }else if(handler==='assignItem'){
      setSelectedRowIndex(index); // Guarda el índice seleccionado
      setShowFormulario2(true); // Abre Formulario2
    }else if(handler==='Habilitar'){
      toogleHabilitar(index)
    }
  };


  return (
    <div>
      <button onClick={openForm}>Abrir Formulario</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>
              {item.estado ? 'Deshabilitado' : 'Habilitado'}
              </td>
              <td>
              <MenuDes
                  label="Acciones"
                  items={dropdownOptions.map(option => (
                    <button
                      key={option.label}
                      onClick={() => handleAction(option.handler, index)}
                    >
                      {option.label}
                    </button>
                  ))}
                />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      {showFormulario2 && (
        <Formulario2
          onClose={() => {
            setShowFormulario2(false);
            setSelectedRowIndex(null); // Restablece el índice seleccionado
          }}
          onAssign={(index, countries) => {
            assignItem(index, countries); // Llama a la función para asignar el país
          }}
          selectedRowIndex={selectedRowIndex}
          data={data} // Pasa los datos a Formulario2
        />
      )}
    </div>
  );
};