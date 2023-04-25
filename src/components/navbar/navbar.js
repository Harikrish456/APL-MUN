import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/logo.jpg'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

const Navbar = () => {


  return (
    <header className={styles.navbar}>
      <nav> 
        <ul className={styles.menu}>
            <li>
                <a href = "/"> About </a>
            </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar
