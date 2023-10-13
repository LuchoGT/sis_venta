import { useEffect, useState } from 'react';

interface FormData {
    nombres: string;
    apellidos: string;
    dni: number;
    celular: number;
    correo: string;
    usuario: string;
    password: string;
  }

export const useForm2 = () => {
    const [dataList, setDataList] = useState<FormData[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem('formDatos1');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setDataList(parsedData);
        }
      }, []);
    

    const addOrUpdateData = (data: FormData) => {
        if (editIndex !== null) {
          const updatedList = [...dataList];
          updatedList[editIndex] = data;
          setDataList(updatedList);
          setEditIndex(null);
        } else {
          setDataList([...dataList, data]);
        }
    
        // Guardar datos en localStorage después de editar o agregar
        localStorage.setItem('formDatos1', JSON.stringify(dataList));
      };
    
      const editData = (index: number) => {
        const editItem = dataList[index];
        setEditIndex(index);
        return editItem;
      };

    return{
        dataList,
        addOrUpdateData,
        editData
    }
}
