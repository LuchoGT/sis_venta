import { HeaderTable } from "@/interfaces/interfaces"
import { useEffect, useState } from "react"

interface Teacher {
    nombre: string;
    apellido: string;
    estado: string;
  }
  
interface Option{
    name: string;
    funcion: ()=>void;
}


export const useTable = () => {
  
    const [header, setHeader] = useState<Array<HeaderTable>>([])

    const [teachers, setTeachers] = useState<Array<Teacher>>([])


    const [teacherOption, setTeacherOption] = useState<Array<Option>>([])

    const [isTeacherAdd, setIsTeacherAdd] = useState<boolean>(false)
    // const closeTeacherAdd= ()=>setIsTeacherAdd(false);

    const open1 = ()=>console.log('abriendo detalle');
    const open2 = ()=>console.log('abriendo editar');
    const open3 = ()=>console.log('abriendo curso');
    const open4 = ()=>console.log('abriendo deshabukutar');


    useEffect(() => {
      setHeader([
        {
            text: 'No.'
        },
        {
            text: 'Nombre.'
        },
        {
            text: 'Cursos.'
        },
        {
            text: 'Habilitar.'
        },
        {
            text: 'Acciones.'
        },
      ])
    
      setTeachers([
        {
           
            nombre: 'Luchito',
            apellido: 'Gonzales',
            estado: 'Habilitado'
        },
        // {
            
        //     nombre: 'Luchito',
        //     apellido: 'Gonzales',
        //     estado: 'Deshabilitado'
        // },
        // {
          
        //     nombre: 'Luchito',
        //     apellido: 'Gonzales',
        //     estado: 'Habilitado'
        // },
      ])

      setTeacherOption([
        {
            name: 'Detalle',
            funcion: open1

        },
        {
            name: 'Editar',
            funcion: open2

        },
        {
            name: 'Asignar curso',
            funcion: open3

        },
        {
            name: 'Deshabilitar',
            funcion: open4

        },
      ])

    }, [])
    
    return{
        header,
        teachers,
        teacherOption,
        isTeacherAdd,
    }
}
