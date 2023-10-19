import { useState } from 'react';
import './ConfigPage.scss'
import { CoursesList } from '../../sections/CoursesList/CoursesList';
import { SectionsList } from '../../sections/SectionsList/SectionsList';
import { ConfigMenu } from '../../components/ConfigMenu/ConfigMenu';
export const ConfigPage = () => {

  const [selectedTab, setSelectedTab] = useState('Cursos');

  const handleTabClick = (tabName:string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className='config'>
      <ul className='config__links'>
        <ConfigMenu tabName="Cursos" selectedTab={selectedTab} handleTabClick={handleTabClick}/>
        <ConfigMenu tabName="Salones" selectedTab={selectedTab} handleTabClick={handleTabClick}/>
      </ul>
      {/* <span className='config__indicator'></span> */}
      {selectedTab === 'Cursos' && <CoursesList />}
      {selectedTab === 'Salones' && <SectionsList />}
    </div>
  )
}
