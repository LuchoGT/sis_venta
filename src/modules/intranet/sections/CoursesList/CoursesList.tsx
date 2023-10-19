import { useState } from "react";
import './CoursesList.scss'
import { PopupAdd } from "../PopupAdd/PopupAdd";
import { CourseAdd } from "./CourseAdd";



export const CoursesList = () => {

  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  
  const tooglePopUp=()=>{
    setIsOpenPopUp(!isOpenPopUp);
  }
  return (
    <>
      <div className='courses'>
          <div className='courses__add'>
              <div onClick={tooglePopUp}>Agregar</div>
          </div>
        <p>Estas en Cursos</p>
      </div>
      {
      isOpenPopUp && 
      <PopupAdd tooglePopUp={tooglePopUp} title="Agregar curso">
        <CourseAdd tooglePopUp={tooglePopUp}/>
      </PopupAdd>
      }
    </>
    
  )
}
