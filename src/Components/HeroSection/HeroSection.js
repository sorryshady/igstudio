import React from 'react'
import styles from './HeroSection.module.css'
import message from '../../Assets/Message.png'
import heroImg from '../../Assets/Hero.png'
const HeroSection = () => {
  return (
    <div className={styles.heroContainer} id='#home'>
      <div className={styles.infoContainer}>
        <p className={styles.titleOne}>You don't have to</p>
        <p className={styles.titleTwo}>Fight them Alone.</p>
        <p className={styles.summary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          pellentesque ligula. In imperdiet condimentum urna, ac facilisis augue
          blandit sit amet. Nam vitae gravida metus. Sed at enim lacinia, mattis
          dolor ut, condimentum ex.
        </p>
        <div className={styles.cta}>
          <div className={styles.mailContainer}>
            <img src={message} alt='mail' className={styles.mail} />
            <input
              type='email'
              placeholder='Enter your email address'
              className={styles.mailInp}
            />
            <button className={styles.mailBtn}>Let's Talk</button>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={heroImg} alt='heroImg' className={styles.image} />
      </div>
    </div>
  )
}

export default HeroSection
