import { PopupAdd } from "../PopupAdd/PopupAdd";
import './SectionList.scss'
import { usePopup } from "../PopupAdd/usePopup";
interface props{
  isOpenList:boolean
}
export const SectionsList = ({isOpenList}:props) => {

  const {isOpenPopUp,openPopUp,closePopUp} = usePopup()
  return (
    <div className={`${isOpenList ? 'hidden-sections' : ''}`}>
      <h1>Secciones</h1>
      <div onClick={openPopUp}>
        Agregar
      </div>
      <PopupAdd 
        isOpenPopUp={isOpenPopUp}
        closePopUp={closePopUp}
        title="Agregar salon"/>
    </div>
  )
}
