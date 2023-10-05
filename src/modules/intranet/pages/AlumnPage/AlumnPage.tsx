import { AlumnList } from '../../sections/AlumnList/AlumnList'
import './AlumnPage.scss'

export const AlumnPage = () => {
  return (
    <>
    <div className="teacher">
      <AlumnList/>
      {/* <TeacherAdd
        isView={isView}
        closeView={closeView}
        title="Agregar"
        /> */}
    </div>
  </>
  )
}
