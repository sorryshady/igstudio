import React from 'react'
import styles from './AttorneyCard.module.css'
const AttorneyCard = ({ member }) => {
  return (
    <div className={styles.card}>
      <img src={member.img} alt={member.name} className={styles.memberImg} />
      <div className={styles.memberInfo}>
        <p className={styles.memberName}>{member.name}</p>
        <p className={styles.memberStats}>{member.cases} cases</p>
      </div>
    </div>
  )
}

export default AttorneyCard
