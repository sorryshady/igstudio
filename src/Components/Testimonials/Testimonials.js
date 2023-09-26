import React from 'react'
import styles from './Testimonials.module.css'
import { ReactComponent as LeftButton } from '../../Assets/leftArrow.svg'
import { ReactComponent as RightButton } from '../../Assets/rightArrow.svg'
import client1Img from '../../Assets/client1.png'
import client2Img from '../../Assets/client2.png'
import client3Img from '../../Assets/client3.png'
import TestimonialCard from './TestimonialCard/TestimonialCard'
const Testimonials = () => {
  const clientInfo = [
    { img: client1Img, name: 'Devon Lane' },
    { img: client2Img, name: 'Jane Cooper' },
    { img: client3Img, name: 'Robert Fox' },
  ]
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.headSection}>
        <div className={styles.testimonialsTitle}>
          What says our
          <br /> happy Clients
        </div>
        <div className={styles.btnGrp}>
          <button className={styles.buttons}>
            <LeftButton />
          </button>
          <button className={styles.buttons}>
            <RightButton />
          </button>
        </div>
      </div>
      <div className={styles.contentSection}>
        {clientInfo.map((client, index) => (
          <TestimonialCard client={client} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
