import React from 'react'
import styles from './AboutUs.module.css'
import AboutCard from './AboutCard/AboutCard'
const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer} id='#about'>
      <div className={styles.intro}>
        <div className={styles.introTitle}>
          Let's Introduce
          <br />
          Ourself
        </div>
        <div className={styles.info}>
          <p className={styles.infoTitle}>Criminal Lawyer</p>
          <p className={styles.infoSummary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tristique nec augue ac porttitor. Nullam interdum nisi eget nisl.
          </p>
        </div>
      </div>
      <div className={styles.salesPitch}>
        <p className={styles.pitchTitle}>Why Choose us?</p>
        <div className={styles.aboutCards}>
          <AboutCard value='98' />
          <AboutCard value='100' />
          <AboutCard value='85' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
