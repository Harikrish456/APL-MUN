import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.jpg'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

const Navbar = () => {


  return (
    <header className={styles.navbar}>
    <img src={Logo} alt="APL" style={{ height:70 }}/>
      <nav> 
        <ul className={styles.menu}>
            <li>
                <a href = "/"> Learn More </a>
            </li>
            <li>
                <a href = "/"> About </a>
            </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar
