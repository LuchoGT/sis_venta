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
  itemsPerPage: number;
}
export const Tabla = ({data, openForm, editItem,viewDetail,assignItem,toogleHabilitar,itemsPerPage}: TablaProps) => {


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
      setOpenIndex(null)
    }else if(handler==='Habilitar'){
      toogleHabilitar(index)

    }
  };

  
  const [page, setPage] = useState(1);
  // const totalPages = Math.ceil(data.length / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  // const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const visibleData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
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
          {visibleData.map((item, index) => (
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
                  isOpen={openIndex === index}
                  onToggle={() => toggleDropdown(index)}
                />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Anterior
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Siguiente
        </button>
      </div>
      // {showFormulario2 && (
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