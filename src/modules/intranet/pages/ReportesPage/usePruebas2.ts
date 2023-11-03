import {useState} from 'react'

export const usePruebas2 = () => {
    const [header2] = useState<Array<string>>(["Nombre", "Apellidos", "Acciones"]);
  
    return{
        header2
    }
}
