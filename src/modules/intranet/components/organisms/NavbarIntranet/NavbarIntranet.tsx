import logo from '@assets/image/logo.png'
import './NavbarIntranet.scss'
import { Link } from 'react-router-dom'
import { useNavbarIntranet } from './useNavbarIntranet'

export const NavbarIntranet = () => {
    const {links} = useNavbarIntranet();
  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <figure className='navbar__figure'>
                <img src={logo} alt="" className='navbar__image'/>
            </figure>
        </div>
        <div className='navbar__menu'>
            <ul className='navbar__links'>
                {
                    links.map((item,index)=>(
                        <li className='navbar__item' key={index}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
