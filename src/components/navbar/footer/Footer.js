import React from 'react'
import {GrClose} from "react-icons/gr"
import styles from './Footer.module.css'

    
const Footer = () => {
  return (
    <div>
    <footer className={styles.footer_distributed}>
    
                <div className={styles.footer_left}>
    
                <img src="https://www.edustoke.com/assets/uploads-new/apl-global-school-1501588135-1.jpg" alt="APL" style={{ height:70 }}/>
    
                    <p className={styles.footer_links}>
                        <a href="#">Home</a>
                        <br/>

                        <a href="#">About</a>
                        <br/>

                        <a href="#">Contact</a>
                    </p>
    
                    <p className={styles.footer_company}>APL Global school © 2023</p>
    
                    <div className={styles.footer_icons}>
    
                        <a href="#"><i className={styles.fa_fa_facebook}></i></a>
                        <a href="#"><i className={styles.fa_fa_twitter}></i></a>
                        <a href="#"><i className={styles.fa_fa_instagram}></i></a>
                        <a href="#"><i className={styles.fa_fa_linkedin}></i></a>
    
                    </div>
    
                </div>
    
    
            </footer>
    </div>
  )
}

export default Footer
