import React from 'react'
import styles from './Gallery.module.css'

const Card = ({image, description}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt ="/" />
      <p> 
        {description} 
      </p>
    </div>
  )
}

export default Card
