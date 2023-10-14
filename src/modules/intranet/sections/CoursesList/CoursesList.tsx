import './CoursesList.scss'
import { Table } from '../../components/Table/Table';
import { PopupAdd } from '../PopupAdd/PopupAdd';
import { usePopup } from '../PopupAdd/usePopup';

interface props{
  isOpenList:boolean
}
export const CoursesList = ({isOpenList}:props) => {


  const {isOpenPopUp,openPopUp,closePopUp} = usePopup()
  
  return (
    <div className={`${isOpenList ?  'courses': 'hidden-courses'}`}>
        <div className='courses__add'>
            <div onClick={openPopUp} >Agregar</div>
        </div>
        <PopupAdd 
          isOpenPopUp={isOpenPopUp}
          closePopUp={closePopUp}
          title="Agregar curso"/>
    </div>
  )
}
