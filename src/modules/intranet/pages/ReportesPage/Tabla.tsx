import { useState } from "react";
import { FormValues } from "./Formulario";
import { MenuDes } from "./MenuDes";

interface TablaProps {
  data: FormValues[];
  openForm: () => void;
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
}
export const Tabla = ({ data, openForm, editItem,viewDetail }: TablaProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const dropdownOptions = [
    { label: 'Detalle', handler: 'viewDetail' },
    { label: 'Editar', handler: 'editItem' },
  ];

  const toggleDropdown = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  const handleAction = (handler: string, index: number) => {
    if (handler === 'viewDetail') {
      viewDetail(index);
    } else if (handler === 'editItem') {
      editItem(index);
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
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              {/* <td>
                    <button onClick={() => editItem(index)}>Editar</button>
                  </td> */}
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
    </div>
  );
};
