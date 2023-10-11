import { CoursesList } from '../../sections/CoursesList/CoursesList';
import { SectionsList } from '../../sections/SectionsList/SectionsList';
import './ConfigPage.scss'
import { useConfig } from './useConfig'
export const ConfigPage = () => {

  const {isOpenList,openListConfig,closeListConfig} = useConfig();

  return (
    <div className='config'>
      <ul className='config__links'>
        <li className='config__element' onClick={openListConfig}>Cursos</li>
        <li className='config__element' onClick={closeListConfig}>Salones</li>
      </ul>
      <span className='config__indicator'></span>
      <CoursesList isOpenList={isOpenList} />
      <SectionsList isOpenList={isOpenList}/>
    </div>
  )
}
