import './CoursesList.scss'
import { useState } from "react";
import { Table } from '../../components/Table/Table';
import { PopupAdd } from '../PopupAdd/PopupAdd';

interface props{
  isPopUpOpen:boolean
}
export const CoursesList = ({isPopUpOpen}:props) => {

  const [isCourseAdd, setIsCourseAdd] = useState<boolean>(false);

  const openCourse = ()=>setIsCourseAdd(true);
  const closeCourse = ()=>setIsCourseAdd(false);
  
  return (
    <div className={`${isPopUpOpen ?  'courses': 'hidden'}`}>
        <div className='courses__add'>
            <div onClick={openCourse} >Agregar</div>
        </div>
        <Table/>
        <PopupAdd isCourseAdd={isCourseAdd}/>
    </div>
  )
}
