import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Logo from "../images/logo.png";
import {Link, NavLink} from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";



const Header = () => {

    const links = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "Find a Doctor",
            path: '/find-a-doctor'
        },
        {
            name: "Appointments",
            path: '/appointments'
        },
        {
            name: "Blog",
            path: '/blog'
        }
    ]

    const [togglenav, setTogglenav] = useState(window.innerWidth > 1100 ? true : false);
    
    if(window.innerWidth <= 1100){
        if(togglenav){
            window.addEventListener("scroll", () => {
                setTogglenav(false)
            })
        }
    }

    const removeNav = () => {
        if(window.innerWidth <= 1100){
            setTogglenav(false)
        }
    }

  return (
    <header>
        <div className="header-container container">
            <Link to="/">
                <div className="logo">
                    <div className="logo-image">
                        <img src={Logo} alt="" />
                    </div>
                    <h2><span>MEDI</span>CARE</h2>
                </div>
            </Link>
            {togglenav && <nav className='header-nav'>
                <AiOutlineClose size={28} className="sidebar-close" onClick={() => setTogglenav(!togglenav)}/>
                <ul>
                    {links.map(({name, path}, index) => {
                       return <li key={index} onClick={removeNav}><NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink></li>
                    })}
                </ul>
            </nav>}
            <div className="header-icons">
                <Link to={"/notifications"}>
                    <div className="notification">
                        <FaRegBell size={28}/>
                        <p><span>07</span></p>
                    </div>
                </Link>
                <Link to={"/profile"}><FaRegCircleUser size={28}/></Link>
                {/* <Link to={"/login"}><FaRegCircleUser size={28}/></Link> */}
                <HiMiniBars3BottomRight size={32} className="bar" onClick={() => setTogglenav(!togglenav)} />
            </div>
        </div>
    </header>
  );
}

export default Header;
