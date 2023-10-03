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
    const openTeacherAdd = ()=>setIsTeacherAdd(true);
    // const closeTeacherAdd= ()=>setIsTeacherAdd(false);



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
            funcion: openTeacherAdd

        },
        {
            name: 'Editar',
            funcion: openTeacherAdd

        },
        {
            name: 'Asignar curso',
            funcion: openTeacherAdd

        },
        {
            name: 'Deshabilitar',
            funcion: openTeacherAdd

        },
      ])
      
    }, [])
    
    return{
        header,
        teachers,
        teacherOption,
        isTeacherAdd
    }
}
