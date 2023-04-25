import React from 'react'
import styles from './Gallery.module.css'
import{ Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card'
import { useRef } from 'react'

const Gallery = () => {

    const width = useRef(window.innerWidth);
    const heigth = useRef(window.innerHeight)
  return (
    <div className={styles.gallery}> 

        <div className={styles.heading}> 
            <h1> News </h1>
            <div className={styles.text_bg}> 
            <p> 
                <span>Recent events here, at APL MUN </span>
            </p>
            </div>

         </div>

         <div className={styles.slider_container}> 
         <Swiper
         modules={{Navigation, Pagination, Scrollbar, A11y, EffectFade}}
            effect='fade'
            spaceBetween={10}
            slidesPerView={5}
            pagination={{clickable: true}}
            breakpoints={{
                340: {
                    width: 200,
                    slidesPerView: 1,
                },

                768: {
                    width: 768,
                    slidesPerView: 4,
                },
                1040: {
                    width: 1040,
                    slidesPerView: 5
                }

            }}
             onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        > 
        <SwiperSlide> 
            <Card className={styles.slider} image="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" description="This our recent APL MUN!"> </Card>
        </SwiperSlide>

        <SwiperSlide> 
        <Card className = {styles.slider} image ="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" description="Registrations for this year's MUN is open!"> </Card>
        </SwiperSlide>

        <SwiperSlide >
        <Card className = {styles.slider} image="https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" description="This is our amazing crew!"> </Card>
        </SwiperSlide>
        </Swiper>
         </div>
      
    </div>
  )
}

export default Gallery
