import { UserIcon } from "@/assets/icon/UserIcon"
import './HeaderIntranet.scss';
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";



export const HeaderIntranet = () => {

  const {onLogout} = useAuth()
  const navigate = useNavigate();


  const handleLogout = () => {
    onLogout(); 
    navigate('/')   
  };

  return (
    <header className="header">
      <div className="header__container">
        <figure className="header__figure">
          <UserIcon/>
        </figure>
        <div className="header__logout" onClick={handleLogout}>
          Cerrar sesión
        </div>
      </div>
    </header>
  )
}
