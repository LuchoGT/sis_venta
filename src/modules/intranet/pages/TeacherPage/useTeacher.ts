import { useEffect, useState } from "react"

export const useTeacher = () => {
  
    const [isView, setIsView] = useState<boolean>(false);

    const openView = ()=>setIsView(true);
    const closeView = ()=>setIsView(false);
    useEffect(() => {
     
    }, [])
    

    return{
        isView,
        openView,
        closeView,
    }
}
