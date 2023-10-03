import { useState,useEffect } from "react";
interface contenido{
    label:string,
    placeholder:string,
    style: string,
}
export const useProbando = () => {

    const [content, setContent] = useState<Array<contenido>>([]);

    useEffect(() => {
      
        setContent([
            {
                label:'nombre',
                placeholder:'Ingrese nombre',
                style: 'teacher-add__content'
            },
            {
                label:'apellidos',
                placeholder:'Ingrese apellidos',
                style: 'teacher-add__content'

            },
            {
                label:'dni',
                placeholder:'Ingrese dni',
                style: 'teacher-add__content teacher-add__content--min'

            },
            {
                label:'celular',
                placeholder:'Ingrese celular',
                style: 'teacher-add__content teacher-add__content--min'

            },
            {
                label:'correo',
                placeholder:'Ingrese correo',
                style: 'teacher-add__content'

            },
            {
                label:'usuario',
                placeholder:'Ingrese usuario',
                style: 'teacher-add__content'

            },
            {
                label:'contra',
                placeholder:'Ingrese contra',
                style: 'teacher-add__content'

            },
        ])
    }, [])
    
    return{
        content
    }
}
