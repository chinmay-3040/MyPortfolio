import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage2.png')} alt="Me sitting with laptop"></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    {/* <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" /> */}
                    <div className={styles.aboutItemText}>
                        <h3>coder-explorer-sportsman</h3>
                        <p>Hola ! I'm Chinmay Dawalbaje, student at IIT Indore 
                        in the department of Mechanical Enginering. I'm from Nanded Maharashtra. 
                        I like to play Cricket, Batminton, Table-Tenis. And I'm passionate about coding.
                        I love to explore movies/web-series and new places. I am always eager to  learn new technology,language or framework.
                        I'm looking forward to improve my skills as much I can do. <br/> Thank You !
                        </p>
                    </div>
                </li>

                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cpu icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend developer</h3>
                        <p>I am Backend developer. I am Backend developer.I am Backend developer.</p>
                    </div>
                </li> */}

                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have </p>
                    </div>
                </li> */}

            </ul>
        </div>
    </section>
  )
}

export default About
