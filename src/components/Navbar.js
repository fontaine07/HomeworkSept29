import React, {useState} from "react";
import "../css/Navbar.css";
import {BiHomeCircle} from 'react-icons/bi';
import {HiOutlineUser} from 'react-icons/hi';
import {CiViewTimeline} from 'react-icons/ci';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
// import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        // <SideNav onSelect = {(selected) => {console.log(selected);}} className="navbar">
        //     <SideNav.Toggle/>
        //     <SideNav.Nav defaultSelected="home">
        //         <NavItem className="d-flex align-items-center">
        //             <NavIcon><BiHomeCircle className="nav-icon"/></NavIcon>
        //             <NavText>Home</NavText>
        //         </NavItem>
                
        //     </SideNav.Nav>
        // </SideNav>
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    );
}
export default Navbar;