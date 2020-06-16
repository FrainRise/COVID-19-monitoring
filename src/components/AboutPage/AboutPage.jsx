import React from 'react'

import styles from './AboutPage.module.css'
import ceoImage_male from '../../assets/images/Andrew.png'
import ceoImage_female from '../../assets/images/Annie.png'

const AboutPage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.containerUp}> 
                <h2 className={styles.titleMission}> - Our Mission - </h2>
                <p className={styles.descriptionMission}>  
                    We want to open the eyes to the world on the COVID-19 pandemic so that people begin to 
                    take care of themselves.
                </p>
                <h2 className={styles.titleAbout}> About </h2>
                <p className={styles.descriptionAbout}>
                    Hawk Eye app isn't about researhing COVID or helping to find cure. <strong style={{color: '#000000'}}>The main goal</strong> of our app is show the <strong style={{color: '#000000'}}>REAL</strong> statistics of amount of people, who were infected by COVID-19.
                    It should help uninfected people to stay safe and care about their friends and families and of course themselves.
                </p>
                <p className={styles.descriptionAbout}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                </p>    
            </div>
            <div className={styles.containerDown}>
                <h2 className={styles.titleTeam}> Leadership </h2>
                <div className={styles.wrapper}>
                    <div className={styles.personCard}>
                        <img src={ceoImage_male} alt="imageCEO" className={styles.personImg} />
                        <h3 className={styles.personName}> Andrew Kovalenko </h3>
                        <h6 className={styles.personPosition}> 
                            CO-FOUNDER & CEO
                        </h6>
                        <p className={styles.personDescr}>
                            Idea generator and main front-end developer of Hawk Eye.
                            He drives Hawk Eye's strategic vision and manages investor relations.
                            Also he designs and develops UI for all projects he has.
                        </p>
                    </div>
                    <div className={styles.personCard}>
                        <img src={ceoImage_female} alt="imageCEO" className={styles.personImg} />
                        <h3 className={styles.personName}> Annie Rolling </h3>
                        <h6 className={styles.personPosition}> CO-FOUNDER & CEO</h6>
                        <p className={styles.personDescr}>
                            Idea inspiration and main back-end developer of Hawk Eye.
                            She solves the main issues of back-end side of Hawk Eye and participate negotiations with the customer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;