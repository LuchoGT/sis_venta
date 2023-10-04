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

interface Courses{
    curso:string,
    estado:string,
}

interface OptionCourse{
    name: string;
}



export const useTable = () => {
  
    const [header, setHeader] = useState<Array<HeaderTable>>([])

    const [teachers, setTeachers] = useState<Array<Teacher>>([])
    const [teacherOption, setTeacherOption] = useState<Array<Option>>([])


    const open1 = ()=>console.log('abriendo detalle');
    const open2 = ()=>console.log('abriendo editar');
    const open3 = ()=>console.log('abriendo curso');
    const open4 = ()=>console.log('abriendo deshabukutar');

    /*CONFIG -- CURSOS */

    const [headerCourse, setHeaderCourse] = useState<Array<HeaderTable>>([])

    const [courses, setCourses] = useState<Array<Courses>>([])

    const [courseOption, setCourseOption] = useState<Array<OptionCourse>>([])




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

      setHeaderCourse([
        {
            text: 'No'
        },
        {
            text: 'Curso'
        },
        {
            text: 'Habilitar'
        },
        {
            text: 'Acciones'
        },
      ])

      setCourses([
        {
            curso: 'Matematicas',
            estado: 'Habilitado'
        },
        {
            curso: 'Fisica',
            estado: 'Habilitado'
        },
        {
            curso: 'Lengua',
            estado: 'Habilitado'
        },
      ])

      setCourseOption([
        {
            name:'Deshabilitar'
        }
      ])
    

    }, [])
    
    return{
        header,
        teachers,
        teacherOption,
        headerCourse,
        courses,
        courseOption,
    }
}
