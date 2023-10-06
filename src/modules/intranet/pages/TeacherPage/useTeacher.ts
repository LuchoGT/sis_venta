import { useEffect, useState } from "react"

export const useTeacher = () => {
  
    const [isView, setIsView] = useState<boolean>(false);

    const openViewAdd = ()=>setIsView(true);
    const closeViewAdd = ()=>setIsView(false);
    useEffect(() => {
     
    }, [])
    

    return{
        isView,
        openViewAdd,
        closeViewAdd,
    }
}
