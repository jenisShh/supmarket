import React, {useState} from 'react'
// import {Button} from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import './Dropdown.css';
import Dropdown from './Dropdown';
import {FaTimes} from '../../node_modules/react-icons/fa'
import {FaBars} from '../../node_modules/react-icons/fa'
import {FaCaretDown} from '../../node_modules/react-icons/fa'



export default function NaviBar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }
    return (
        <>
        <nav className="navbar" >
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
        </Link>
            <div className="menu-icon" onClick={handleClick} >
                <i className={click ? <FaTimes/> : <FaBars/>}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home</Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to='/groceries' className='nav-links' onClick={closeMobileMenu}> Groceries <i> <FaCaretDown/> </i> </Link>
                {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}> Contact</Link>
                </li>
            </ul>
        </nav>
            
        </>
    )
}