import { HeaderTable } from "@/interfaces/interfaces"
import { useEffect, useState } from "react"

interface Teacher {
    nombre: string;
    apellido: string;
    estado: string;
  }
  
interface Option{
    name: string;
    // fn:Function
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
 


    // const open1 = ()=>console.log('abriendo detalle');
    const open2 = ()=>console.log('abriendo editar');
    const open3 = ()=>console.log('abriendo curso');
    const open4 = ()=>console.log('abriendo deshabukutar');


    /*CONFIG -- CURSOS */

    const [headerCourse, setHeaderCourse] = useState<Array<HeaderTable>>([])

    const [courses, setCourses] = useState<Array<Courses>>([])

    const [courseOption, setCourseOption] = useState<Array<OptionCourse>>([])


    const options = [
        { title: 'Detalle', ct: 'Contenido de la Opción 1', sub: 'Detalle docente'},
        { title: 'Editar', ct: 'Contenido de la Opción 2', sub: 'Editar docente' },
        { title: 'Asignar curso', ct: 'Contenido de la Opción 3', sub: 'Asignar curso' },
        { title: 'Deshabilitar', ct: 'Contenido de la Opción 3' },
    ];
    

      const [showCard, setShowCard] = useState<boolean[]>([false, false, false]);

      const openCard = (index: number) => {
        const updatedShowCard = [...showCard];
        updatedShowCard[index] = true;
        setShowCard(updatedShowCard);

        if (index===0) {
            console.log('detalle');
        }
        else if(index===1){
            console.log('editar cod');
        }else if(index===2){
            console.log('asignar curso');
        }else{
            console.log('deshanbilitar');
            
        }
      };
    
      const closeCard = (index: number) => {
        const updatedShowCard = [...showCard];
        updatedShowCard[index] = false;
        setShowCard(updatedShowCard);
      };
    

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
           
            nombre: 'Nombre',
            apellido: 'Apellido',
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
            // fn: open1

        },
        {
            name: 'Editar',
            // fn: open2

        },
        {
            name: 'Asignar curso',
            // fn: open3

        },
        {
            name: 'Deshabilitar',
            // fn: open4

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
        options,
        openCard,
        closeCard,
        showCard
    }
}
