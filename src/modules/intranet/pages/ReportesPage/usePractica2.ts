import {useState,useEffect} from 'react'
import { FormDatos, Practica2 as PracticaSob2 } from './interfaces';

export const usePractica2 = () => {
    const [header] = useState<Array<string>>(["Nombre","Acciones"]);

    const [data,setData] = useState<PracticaSob2>(
        {
            items: [
                // { nombre: "Nombre1", apellido: "Apellido1" },
                // { nombre: "Nombre2", apellido: "Apellido2" },
                // { nombre: "Nombre3", apellido: "Apellido3" },
                // { nombre: "Nombre4", apellido: "Apellido4" },
                // { nombre: "Nombre5", apellido: "Apellido5" },
            ],
            button: [
                {
                    title: "Deshabilitar",
                    handler: 'Deshabilitar'
                },
            ]
          }
    )

    useEffect(() => {
        const storedData = localStorage.getItem('practicaData2');
        if (storedData) {
          setData(JSON.parse(storedData));
        }
      }, []);

    // const addItemToData = (item: FormDatos) => {
    //     setData((prevData) => {
    //         const newData = { ...prevData, items: [...prevData.items, item] };
      
    //         // Guardar datos en localStorage
    //         localStorage.setItem('practicaData', JSON.stringify(newData));
      
    //         return newData;
    //       });
    //   };

    const updateData = (newData: PracticaSob2) => {
        setData(newData);

        localStorage.setItem('practicaData2',JSON.stringify(newData));
      };
    
    return{
        header,
        data,
        updateData
    }
}