import React, { useState } from 'react'
import styles from './HeroSection.module.css'
import message from '../../Assets/Message.png'
import heroImg from '../../Assets/Hero.png'
const HeroSection = () => {
  const [email, setEmail] = useState('')
  let timerId
  const [status, setStatus] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setStatus(true)
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      setStatus(false)
    }, 2000)
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
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
          <form className={styles.mailContainer} onSubmit={handleSubmit}>
            <img src={message} alt='mail' className={styles.mail} />
            <input
              type='email'
              placeholder='Enter your email address'
              className={styles.mailInp}
              value={email}
              onChange={emailChange}
              required
            />
            <button className={styles.mailBtn}>Let's Talk</button>
          </form>
          {status && (
            <div className={styles.statusMsg}>We will contact you shortly</div>
          )}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={heroImg} alt='heroImg' className={styles.image} />
      </div>
    </div>
  )
}

export default HeroSection
