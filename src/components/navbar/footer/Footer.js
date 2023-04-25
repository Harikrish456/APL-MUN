import React from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

    
const Footer = () => {
  return (
    <div className={styles.footer_basic}>
        <footer>
              <div className={styles.social}><a href="https://www.facebook.com/APL-Global-School-155685594531951/"><FaFacebookF/></a><a href="#"><FaInstagram /></a></div>
              <ul class="list-inline">
                  <li className={styles.list_inline_item}><a href="#"></a></li>
              </ul>
              <p className={styles.copyright} >Company Name © 2018</p>
          </footer>
      </div>
  )
}

export default Footer
