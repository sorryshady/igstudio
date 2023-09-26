import React from 'react'
import styles from './TestimonialCard.module.css'
const TestimonialCard = ({ client }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={client.img} alt='gift' className={styles.img} />
      </div>
      <p className={styles.cardTitle}>{client.name}</p>
      <p className={styles.cardSubTitle}>Ceo of Hunt</p>
      <p className={styles.cardSummary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique
        nec augue ac porttitor. Nullam interdum nisi eget nisl congue, a tempus.
      </p>
    </div>
  )
}

export default TestimonialCard
