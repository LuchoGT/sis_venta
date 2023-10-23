import { CoursesList } from '../../sections/CoursesList/CoursesList';
import { SectionsList } from '../../sections/SectionsList/SectionsList';
import { ConfigMenu } from '../../components/ConfigMenu/ConfigMenu';
import { useConfig } from './useConfig';
import './ConfigPage.scss'


export const ConfigPage = () => {

  const {selectedTab,handleTabClick} = useConfig();

  return (
    <div className='config'>
      <ul className='config__links'>
        <ConfigMenu tabName="Cursos" selectedTab={selectedTab} handleTabClick={handleTabClick}/>
        <ConfigMenu tabName="Salones" selectedTab={selectedTab} handleTabClick={handleTabClick}/>
      </ul>
      <span className='config__bar'></span>
      {selectedTab === 'Cursos' && <CoursesList />}
      {selectedTab === 'Salones' && <SectionsList />}
    </div>
  )
}
