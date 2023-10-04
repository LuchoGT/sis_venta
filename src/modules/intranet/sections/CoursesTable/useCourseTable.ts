import { HeaderTable } from "@/interfaces/interfaces"
import { useEffect, useState } from "react"

interface Courses{
    curso:string,
    estado:string,
}

interface Option{
    name: string;
}


export const useCourseTable = () => {

    const [header, setHeader] = useState<Array<HeaderTable>>([]);

    const [courses, setCourses] = useState<Array<Courses>>([])

    const [courseOption, setCourseOption] = useState<Array<Option>>([])


    useEffect(() => {
        setHeader([
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
          ]);

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
        courses,
        courseOption
    }
}
