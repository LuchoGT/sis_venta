import {useState,useEffect} from 'react'
import { FormDatos, Practica as PracticaSob } from './interfaces';

export const usePractica = () => {
    const [header] = useState<Array<string>>(["Nombre", "Apellidos","Acciones"]);

    const [data,setData] = useState<PracticaSob>(
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
                    title: "Detalle",
                    handler: 'Detalle'
                },
                {
                    title: "Editar",
                    handler: 'Editar'
                },
                {
                    title: "Asignar curso",
                    handler: 'Asignar'
                },
                {
                    title: "Deshabilitar",
                    handler: 'Deshabilitar'
                },
            ]
          }
    )

    useEffect(() => {
        const storedData = localStorage.getItem('practicaData');
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

    const updateData = (newData: PracticaSob) => {
        setData(newData);

        localStorage.setItem('practicaData',JSON.stringify(newData));
      };
    

      const assignItem = (index: number, countries: FormDatos['countries']) => {
        // Clona la estructura de datos y accede a la propiedad 'items'
        const updatedData = { ...data };
        updatedData.items[index].countries = countries;
        setData(updatedData);
      
        // Ahora puedes guardar los datos actualizados en el almacenamiento local
        localStorage.setItem('practicaData', JSON.stringify(updatedData));
      };
    return{
        header,
        data,
        updateData,
        assignItem
    }
}