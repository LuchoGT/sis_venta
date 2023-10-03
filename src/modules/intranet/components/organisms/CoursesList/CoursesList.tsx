import './CoursesList.scss'
import { CoursesTable } from '../CoursesTable/CoursesTable'

interface props{
  isCourseOpen:boolean
}
export const CoursesList = ({isCourseOpen}:props) => {
  return (
    <div className={`${isCourseOpen ?  'courses': 'hidden'}`}>
        <div className='courses__add'>
            <div>Agregar</div>
        </div>
        <CoursesTable/>
    </div>
  )
}
