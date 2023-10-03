import { useAuth } from "@/hooks/useAuth";
import { LoginPage } from "@/modules/auth/pages/Login/LoginPage"
import { IntranetRoutes } from "@/modules/intranet/routes/IntranetRoutes"
import { Routes,Route, Navigate } from "react-router-dom"

export const AppRouter = () => {

  const {isLoggedIn} = useAuth();

  return (
    <Routes>
      {/* {
        isLoggedIn ?
        <Route path="/*" element={<IntranetRoutes/>}/>
        :
        <Route path="/" element={<LoginPage/>}/>
      }
      <Route path='/*' element={ <Navigate to='/' />  } /> */}

      <Route path="/*" element={<IntranetRoutes/>}/>
      <Route path="/" element={<LoginPage/>}/>

    </Routes>
  )
}
