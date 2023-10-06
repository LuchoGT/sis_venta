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

    const [abrirPopUp, setAbrirPopUp] = useState<boolean>(false);

    const Open=()=>setAbrirPopUp(true);

    const Close=()=>setAbrirPopUp(false);


    const open1 = ()=>console.log('abriendo detalle');
    const open2 = ()=>console.log('abriendo editar');
    const open3 = ()=>console.log('abriendo curso');
    const open4 = ()=>console.log('abriendo deshabukutar');

    /**PRUEBAS */

    const [isViewEdit, setIsViewEdit] = useState<boolean>(false);

  const openEdit=()=>setIsViewEdit(true);
  const closeEdit=()=>setIsViewEdit(false);


  const [isViewDetail, setIsViewDetail] = useState<boolean>(false);

  const openDetail=()=>setIsViewDetail(true);
  const closeDetail=()=>setIsViewDetail(false);

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
            funcion: openDetail

        },
        {
            name: 'Editar',
            funcion: openEdit

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
