import React from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

    
const Footer = () => {
  return (
    <div className={styles.footer_basic}>
        <footer>
              <div className={styles.social}><a href="https://www.facebook.com/APL-Global-School-155685594531951/"><FaFacebookF className={styles.icon_ion_social_instagram}/></a><a href="#"><FaInstagram className={styles.icon_ion_social_snapchat}/></a></div>
              <ol class="list-inline">
                  <li className={styles.list_inline_item}><a href="#"></a></li>
                  <li className={styles.list_inline_item}><a href="http://aplglobalschool.com/" target='_blank'>Website</a></li>
              </ol>
              <p className={styles.copyright} >Company Name © 2018</p>
          </footer>
      </div>
  )
}

export default Footer
