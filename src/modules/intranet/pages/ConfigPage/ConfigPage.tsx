import { CoursesList } from '../../sections/CoursesList/CoursesList';
import { SectionsList } from '../../sections/SectionsList/SectionsList';
import './ConfigPage.scss'
import { useConfig } from './useConfig'
export const ConfigPage = () => {

  const {isPopUpOpen,openPopUp,closePopUp} = useConfig();

  return (
    <div className='config'>
      <ul className='config__links'>
        <li className='config__element' onClick={openPopUp}>Cursos</li>
        <li className='config__element' onClick={closePopUp}>Salones</li>
      </ul>
      <span className='config__indicator'></span>
      <CoursesList isPopUpOpen={isPopUpOpen} />
      <SectionsList isPopUpOpen={isPopUpOpen}/>
    </div>
  )
}
