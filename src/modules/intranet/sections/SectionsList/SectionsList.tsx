import { PopupAdd } from "../PopupAdd/PopupAdd";
import { SectionAdd } from "./SectionAdd";
import './SectionList.scss'
import { useState } from "react";

export const SectionsList = () => {

  const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false)
  
  const tooglePopUp=()=>{
    setIsOpenPopUp(!isOpenPopUp);
  }
  return (
    <>
      <div className="">
        <h1>Secciones</h1>
        <div onClick={tooglePopUp}>
          Agregar
        </div>
      </div>
      {
        isOpenPopUp && 
        <PopupAdd title="Agregar salon" tooglePopUp={tooglePopUp}>
          <SectionAdd  tooglePopUp={tooglePopUp} />
        </PopupAdd>
      }
    </>
  )
}
