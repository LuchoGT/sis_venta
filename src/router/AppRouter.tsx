import { LoginPage } from "@/modules/auth/pages/Login/LoginPage"
import { Routes,Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<p>Hola</p>} /> */}
        <Route path="/" element={<LoginPage/>}/>
    </Routes>
  )
}
