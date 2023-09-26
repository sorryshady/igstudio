import React, { useState } from 'react'
import styles from './Accordion.module.css'
import { ReactComponent as Expand } from '../../../Assets/expand.svg'
const Accordion = ({ question, index }) => {
  const last = index === 3 ? styles.last : ''
  const [expand, setExpand] = useState(false)
  return (
    <div className={`${styles.accordion} ${last}`}>
      <div
        className={styles.accordionHeader}
        onClick={() => setExpand(!expand)}
      >
        <div className={styles.accordionQuestion}>{question}</div>
        <div className={styles.expandContainer}>
          <Expand />
        </div>
      </div>
      {expand && (
        <div className={styles.accordionBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nibh
          dui. Nulla facilisi. Ut ullamcorper bibendum pulvinar. Nunc mollis
          lacus lacus, ornare bibendum eros consectetur sed. Etiam tristique
          ornare dui sit amet finibus. Sed in erat est. Sed sit amet urna et
          tortor ornare commodo. Quisque vel ligula luctus,
        </div>
      )}
    </div>
  )
}

export default Accordion
