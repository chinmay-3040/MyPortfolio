import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Chinmay!</h1>
            <p className={styles.description}>I am persuing my Btech from Indian Institute  of Technology, Indore.</p>
            <div className={styles.resume}>
                <a className={styles.contactBtn} href="mailto: chinmaydawalbaje129@gmail.com">Contact me</a>
                <a id={styles.resumeBtn} className={styles.contactBtn} href="https://drive.google.com/file/d/1W7-ldjii5x4TQg-xIfGn_7kwR62-h7pq/view?usp=sharing" target='blank'>Resume</a>
            </div>
            
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage2.png")}  alt="My Image"></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
