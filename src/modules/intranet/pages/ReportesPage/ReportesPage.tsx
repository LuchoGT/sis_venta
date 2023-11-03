import {useEffect } from 'react'
import {useState} from 'react';
import { Tabla } from './Tabla';
import { FormValues, Formulario } from './Formulario';
import { usePruebas } from './usePruebas';
import { Practica } from './Practica';
import { Practica2 } from './Practica2';




export const ReportesPage = () => {



  const [formOpen, setFormOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [viewingIndex, setViewingIndex] = useState<number | null>(null);
  
  const {header,data,setData} = usePruebas();


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


  const assignItem = (index: number, countries: FormValues['countries']) => {

    const updatedData = [...data];
    updatedData[index].countries = countries;
    setData(updatedData); 

    // Ahora puedes guardar los datos actualizados en el almacenamiento local
    localStorage.setItem('practicando', JSON.stringify(updatedData));
  };

  const toggleHabilitar = (index: number) => {
    const newData = [...data];
    newData[index].estado = !newData[index].estado;
    setData(newData);
  
    // Actualiza en localStorage
    localStorage.setItem('practicando', JSON.stringify(newData));
  };
  
  const [selectedTab, setSelectedTab] = useState('Cursos');

  const handleTabClick = (tabName:string) => {
    setSelectedTab(tabName);
  };

  const itemsPerPage = 3; 

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FormValues[]>([]);

  const handleSearch = () => {
    // Realiza la búsqueda en los datos
    const results = data.filter(item =>
      item.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.apellido.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };


  return (
      <>
        {/* <div>
      <h1>Tabla y Formulario</h1>
      <div>
          <input
            type="text"
            placeholder="Buscar por nombre o apellido"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
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
        data={searchQuery ? searchResults : data}
        openForm={() => setFormOpen(true)} 
        editItem={editItem} 
        viewDetail={viewDetail}
        assignItem={assignItem}
        toogleHabilitar={toggleHabilitar}
        itemsPerPage={itemsPerPage} 
        header={header}
        />
      )}
    </div> */}

    {/* <Tabla
        header={header2}
    /> */}

{/* <div className='config'>
      <ul className='config__links'>
        <Tab tabName="Cursos" selectedTab={selectedTab} handleTabClick={handleTabClick} />
        <Tab tabName="Salones" selectedTab={selectedTab} handleTabClick={handleTabClick} />
      </ul>
      <span className='config__indicator'></span>

      <ContentComponent selectedTab={selectedTab} />
    </div> */}
    <Practica/>
    <p>------------------------------------</p>
    <Practica2/>
      </>
   
  );
}