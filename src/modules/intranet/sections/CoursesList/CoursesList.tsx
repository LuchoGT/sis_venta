import './CoursesList.scss'
import { useState } from "react";
import { CoursesAdd } from '../CoursesAdd/CoursesAdd';
import { Table } from '../../components/Table/Table';

interface props{
  isCourseOpen:boolean
}
export const CoursesList = ({isCourseOpen}:props) => {

  const [isCourseAdd, setIsCourseAdd] = useState<boolean>(false);

  const openCourse = ()=>setIsCourseAdd(true);
  const closeCourse = ()=>setIsCourseAdd(false);
  
  return (
    <div className={`${isCourseOpen ?  'courses': 'hidden'}`}>
        <div className='courses__add'>
            <div onClick={openCourse} >Agregar</div>
        </div>
        <Table/>
        <CoursesAdd isCourseAdd={isCourseAdd}/>
    </div>
  )
}
