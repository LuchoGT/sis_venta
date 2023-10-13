import { useState } from "react";
import { FormValues } from "./Formulario";

interface TablaProps {
  data: FormValues[];
  openForm: () => void;
  editItem: (index: number) => void;
  viewDetail: (index: number) => void;
}
export const Tabla = ({ data, openForm, editItem,viewDetail }: TablaProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
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
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleDropdown(index)}>
                    Acciones
                  </button>
                  {activeIndex === index && (
                    <div className="dropdown-content">
                      <button onClick={() => viewDetail(index)}>Detalle</button>
                      <button onClick={() => editItem(index)}>Editar</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
