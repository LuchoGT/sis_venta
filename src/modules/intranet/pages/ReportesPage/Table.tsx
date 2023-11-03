import { Menu } from "./Menu";
import { useState } from "react";
import { FormDatos, Practica } from "./interfaces";
import { Formu2 } from "./Formu2";

interface props{
    toogleOpen:()=>void;
    header:string[];
    data:Practica
    onEditItem: (index: number) => void;
  viewDetail: (index: number) => void;
  assignItem: (index: number, countries: FormDatos['countries']) => void; // Nueva prop para asignar un país
  fields:string[]
}

export const Table = ({fields,toogleOpen,header,data,onEditItem,viewDetail,assignItem}:props) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [showFormulario2, setShowFormulario2] = useState<boolean>(false);

  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);


  const showOpenForm2=()=>{
    setShowFormulario2(!showFormulario2);
  }

    const toggleDropdown = (index: number) => {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };

    const handleEditClick = (index: number) => {
        onEditItem(index);
      };

      const handleOptionClick = (handler:string, index:number) => {
        switch (handler) {
          case 'Editar':
            // Si el handler es '3' (Editar), llama a la función de edición
            handleEditClick(index);
            break;
          // Agrega más casos según tus necesidades futuras
        case 'Detalle':
            viewDetail(index);
            break;
        case 'Deshabilitar':
          console.log('deshabilitado',index);
        break;
        case 'Asignar':
          showOpenForm2();
          setSelectedRowIndex(index); // Guarda el índice seleccionado
          break;
          default:
            break;
        }
      };
  

    
  return (
    <div>
        <button onClick={toogleOpen}>Abrir formulario</button>
        <table>
            <thead>
                <tr>
                    {
                        header.map((item,index)=>(
                            <th key={index}>{item}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.items.map((item,index)=>(
                        <tr key={index}>
                          {
                            fields && fields.map((field,index)=>(
                              <td key={index}>{item[field]}</td>
                            ))
                          }
                           <td>
                                <Menu
                                        items={data.button}
                                        isOpen={openIndex === index}
                                        onToggle={() => toggleDropdown(index)}
                                        onOptionClick={(handler) => handleOptionClick(handler, index)}
                                    />
                            </td>
                            {/* <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>
                                <Menu
                                        items={data.button}
                                        isOpen={openIndex === index}
                                        onToggle={() => toggleDropdown(index)}
                                        onOptionClick={(handler) => handleOptionClick(handler, index)}
                                    />
                            </td> */}
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
          showFormulario2 && 
          <Formu2
            onClose={
              ()=>{
                showOpenForm2();
                setSelectedRowIndex(null);
              }
            }
            selectedRowIndex={selectedRowIndex}
          data={data.items} // Pasa los datos a Formulario2
          onAssign={(index, countries) => {
            assignItem(index, countries); // Llama a la función para asignar el país
          }}
          />
        }
    </div>
  )
}
