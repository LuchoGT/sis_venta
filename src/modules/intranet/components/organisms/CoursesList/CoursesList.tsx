import { Table } from '@/modules/common/Table/Table'
import './CoursesList.scss'

interface props{
  isCourseOpen:boolean
}
export const CoursesList = ({isCourseOpen}:props) => {
  return (
    <div className={`${isCourseOpen ?  'courses': 'hidden'}`}>
        <div className='courses__add'>
            <div>Agregar</div>
        </div>
        <Table/>
    </div>
  )
}
