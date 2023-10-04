import { IconsNavBar } from "@/interfaces/interfaces";
import { useEffect, useState } from "react"

export const useNavbarIntranet = () => {

    const [links, setLinks] = useState<Array<IconsNavBar>>([])

    useEffect(() => {
      setLinks([
        {
            title:'Docente',
            link: '/dash/docente'
        },
        {
            title:'Alumnos',
            link: '/dash/alumno'
        },
        {
            title:'Configuracion',
            link: '/dash/config'
        },
        {
            title:'Reportes',
            link: '/dash/reportes'
        },
      ])
    
     
    }, [])
    
    return{
        links
    }
}
