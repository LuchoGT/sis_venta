import { useState } from "react"

export const useTeacher = () => {
  
    const [isTeacherAdd, setIsTeacherAdd] = useState<boolean>(false)
    const openTeacherAdd = ()=>setIsTeacherAdd(true);
    const closeTeacherAdd= ()=>setIsTeacherAdd(false);

    return{
        isTeacherAdd,
        openTeacherAdd,
        closeTeacherAdd
    }
}
