import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch'
import { ButtonAdd } from '../../components/ButtonAdd/ButtonAdd'
import { SelectYearSection } from '../../components/SelectYearSection/SelectYearSection'
import { AlumnMatriculate } from '../../components/AlumnMatriculate/AlumnMatriculate'

export const AlumnList = () => {
  return (
    <div className="teacher-list">
      <h1 className="teacher-list__title">Alumnos</h1>
      <div className="teacher-list__buttons">
        <AlumnMatriculate/>
        <SelectYearSection/>
        <ButtonSearch />
        <ButtonAdd 
          title='Crear alumno'/>
      </div>
      {/* <Table/> */}
    </div>
  )
}
