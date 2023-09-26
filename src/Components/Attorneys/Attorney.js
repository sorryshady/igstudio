import React from 'react'
import styles from './Attorney.module.css'
import member1 from '../../Assets/Member1.png'
import member2 from '../../Assets/Member2.png'
import member3 from '../../Assets/Member3.png'
import member4 from '../../Assets/Member4.png'
import member5 from '../../Assets/Member5.png'
import member6 from '../../Assets/Member6.png'
import AttorneyCard from './AttorneyCard/AttorneyCard'
const Attorney = () => {
  const team = [
    { img: member1, name: 'Daniel Def', cases: 301 },
    { img: member2, name: 'Sanfole', cases: 850 },
    { img: member3, name: 'Cesforilla', cases: 470 },
    { img: member4, name: 'Colleen', cases: 180 },
    { img: member5, name: 'Haldone', cases: 212 },
    { img: member6, name: 'Nik Jeo', cases: 350 },
  ]
  return (
    <div className={styles.attorneyContainer}>
      <div className={styles.attorneyTitle}>Our Team</div>
      <div className={styles.teamContainer}>
        {team.map((member) => (
          <AttorneyCard member={member} />
        ))}
      </div>
    </div>
  )
}

export default Attorney
