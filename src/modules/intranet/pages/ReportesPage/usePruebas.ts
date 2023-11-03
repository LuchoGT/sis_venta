import {useState} from 'react'
import { PruebasTable } from './Formulario';

export const usePruebas = () => {
    const [header] = useState<Array<string>>(["Nombre", "Apellidos", "Habilitar", "Acciones"]);


    const [data, setData] = useState<PruebasTable[]>(()=>{
        const savedData = localStorage.getItem('practicando');
        return savedData ? JSON.parse(savedData) : [];
      });
    
    return{
        header,
        data,
        setData
    }
}
