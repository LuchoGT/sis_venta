import { useState,useEffect } from "react";
interface contenido{
    label:string,
    placeholder:string,
    style: string,
    minLength:number | null,
}
export const useProbando = () => {

    const [content, setContent] = useState<Array<contenido>>([]);

    useEffect(() => {
      
        setContent([
            {
                label:'nombre',
                placeholder:'Ingrese nombre',
                style: 'teacher-add__content',
                minLength: 4
            },
            {
                label:'apellidos',
                placeholder:'Ingrese apellidos',
                style: 'teacher-add__content',
                minLength: 4


            },
            {
                label:'dni',
                placeholder:'Ingrese dni',
                style: 'teacher-add__content teacher-add__content--min',
                minLength: 8


            },
            {
                label:'celular',
                placeholder:'Ingrese celular',
                style: 'teacher-add__content teacher-add__content--min',
                minLength: 9

            },
            {
                label:'correo',
                placeholder:'Ingrese correo',
                style: 'teacher-add__content',
                minLength: null
            },
            {
                label:'usuario',
                placeholder:'Ingrese usuario',
                style: 'teacher-add__content',
                minLength: 3
            },
            {
                label:'contra',
                placeholder:'Ingrese contra',
                style: 'teacher-add__content',
                minLength: 8

            },
        ])
    }, [])
    
    return{
        content
    }
}
