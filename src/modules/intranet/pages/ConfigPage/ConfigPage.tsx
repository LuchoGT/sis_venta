import { CoursesList } from '../../sections/CoursesList/CoursesList';
import { SectionsList } from '../../sections/SectionsList/SectionsList';
import './ConfigPage.scss'
import { useConfig } from './useConfig'
export const ConfigPage = () => {

  const {openCourse,closeCourse,isCourseOpen} = useConfig();

  return (
    <div className='config'>
      <ul className='config__links'>
        <li className='config__element' onClick={openCourse}>Cursos</li>
        <li className='config__element' onClick={closeCourse}>Salones</li>
      </ul>
      <span className='config__indicator'></span>
      <CoursesList isCourseOpen={isCourseOpen} />
      <SectionsList isCourseOpen={isCourseOpen} />
    </div>
  )
}
