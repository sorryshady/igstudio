import React from 'react'
import styles from './Practice.module.css'
import business from '../../Assets/business law.png'
import partnership from '../../Assets/partnership law.png'
import realEstate from '../../Assets/realEstate law.png'
import inheritance from '../../Assets/inheritance law.png'
import landlord from '../../Assets/landlord dispute.jpg'
import elder from '../../Assets/Elder abuse.jpg'
const Practice = () => {
  return (
    <div className={styles.practiceContainer}>
      <p className={styles.practiceTitle}>Area of Practices</p>
      <div className={styles.gridContainer}>
        <div className={`${styles.item1} ${styles.pictures}`}>
          <img
            src={business}
            alt='business law'
            className={styles.practiceImg}
          />
          <p className={styles.subText}>Business Law</p>
        </div>
        <div className={`${styles.item2} ${styles.pictures}`}>
          <img
            src={partnership}
            alt='partnership law'
            className={styles.practiceImg}
          />
          <p className={styles.subText}>Partnership Law</p>
        </div>
        <div className={`${styles.item3} ${styles.pictures}`}>
          <img
            src={realEstate}
            alt='realEstate law'
            className={styles.practiceImg}
          />
          <p className={styles.subText}>Real Estate Law</p>
        </div>
        <div className={`${styles.item4} ${styles.pictures}`}>
          <img
            src={inheritance}
            alt='inheritance law'
            className={styles.practiceImg}
          />
          <p className={styles.subText}>Inheritance Law</p>
        </div>
        <div className={`${styles.item5} ${styles.pictures}`}>
          <img
            src={landlord}
            alt='landlord Disputes'
            className={styles.practiceImg}
          />
          <p className={styles.subText}>Landlord Disputes</p>
        </div>
        <div className={`${styles.item6} ${styles.pictures}`}>
          <img src={elder} alt='Elder Abuse' className={styles.practiceImg} />
          <p className={styles.subText}>Elder Abuse</p>
        </div>
      </div>
    </div>
  )
}

export default Practice
