import React from 'react'
import styles from './Testimonials.module.css'
import { ReactComponent as LeftButton } from '../../Assets/leftArrow.svg'
import { ReactComponent as RightButton } from '../../Assets/rightArrow.svg'
const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.headSection}>
        <div className={styles.testimonialsTitle}>
          What says our happy Clients
        </div>
        <div className={styles.btnGrp}>
          <button>
            <LeftButton />
          </button>
          <button>
            <RightButton />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
