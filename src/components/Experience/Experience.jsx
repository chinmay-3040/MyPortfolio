import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

import skills from '../../data/skills.json';  /*This is an array variable(Json Object)*/
import history from '../../data/history.json';  /*This is an array variable(Json Object)*/


const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills and Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id) => {

                    return <div  className={styles.skill} key={id} >
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })


            }
            </div>
            {/* <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <li className={styles.historyItem} key={id}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.title} Logo`} />
                        <div className={styles.historyItemDetails}>
                            <h3>{ `${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                            <ul>{
                                historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>
                                        {experience}
                                    </li>
                                })
                            }</ul>

                        </div>
                    </li>
                })


            }
            </ul> */}

            <ul className={styles.history}>
                
                     <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Data Structures and Algorithms</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Web Developement</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Competitive Programming</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Object Oriented Programming</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Database Management Systems</h3>
                        </div>
                    </li>
            </ul>

        </div>
    </section>
  )
}

export default Experience
