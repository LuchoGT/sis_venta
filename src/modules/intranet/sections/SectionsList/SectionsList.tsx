import { useState } from "react";
import { PopupAdd } from "../PopupAdd/PopupAdd";

interface props{
  isPopUpOpen:boolean
}
export const SectionsList = ({isPopUpOpen}:props) => {

  const [isCourseAdd, setIsCourseAdd] = useState<boolean>(false);

  const openCourse = ()=>setIsCourseAdd(true);
  const closeCourse = ()=>setIsCourseAdd(false);
  
  return (
    <div className={`${isPopUpOpen ? 'hidden' : ''}`}>
      <h1>Secciones</h1>
      <div onClick={openCourse}>
        Agregar
      </div>
      <PopupAdd 
        isCourseAdd={isCourseAdd}
        closeCourse={closeCourse}
        title="Agregar salon"/>
    </div>
  )
}
