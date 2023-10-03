import { Navigate, Route, Routes } from "react-router-dom"
import { TeacherPage } from "../pages/TeacherPage/TeacherPage"
import { IntranetTemplate } from "../template/IntranetTemplate"
import { AlumnPage } from "../pages/AlumnPage/AlumnPage"
import { ConfigPage } from "../pages/ConfigPage/ConfigPage"
import { ReportesPage } from "../pages/ReportesPage/ReportesPage"

export const IntranetRoutes = () => {
  return (
    <Routes>
      <Route path="dash" element={<IntranetTemplate/>}>
        <Route path="/dash/docente" element={<TeacherPage/>}/>
        <Route path="/dash/alumno" element={<AlumnPage/>}/>
        <Route path="/dash/config" element={<ConfigPage/>}/>
        <Route path="/dash/reportes" element={<ReportesPage/>}/>
      </Route>

      <Route path="/*" element={ <Navigate to="/dash/docente" /> } />
    </Routes>
  )
}
