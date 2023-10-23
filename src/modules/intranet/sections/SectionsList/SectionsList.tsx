import { PopupAdd } from "../PopupAdd/PopupAdd";
import { usePopup } from "../../hooks/usePopup";
import { RoomAdd } from "../../components/RoomAdd/RoomAdd";
import './SectionList.scss'

export const SectionsList = () => {

 const {isOpenPopUp,tooglePopUp} = usePopup();

  return (
    <>
      <div className="sectionList">
        <div className="sectionList__container">
          <div onClick={tooglePopUp} className="sectionList__button">Agregar</div>
        </div>
      </div>
      {
        isOpenPopUp && 
        <PopupAdd title="Agregar salon" tooglePopUp={tooglePopUp}>
          <RoomAdd  tooglePopUp={tooglePopUp} />
        </PopupAdd>
      }
    </>
  )
}
