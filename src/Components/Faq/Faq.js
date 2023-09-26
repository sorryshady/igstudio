import React from 'react'
import styles from './Faq.module.css'
import Accordion from './Accordion/Accordion'
const Faq = () => {
  const faq = [
    'Do I need a personal injury report?',
    'How much is my case worth?',
    'What should I do right after a car accident?',
    'How long will the contract last?',
  ]
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>FAQ</div>
      <div className={styles.sectionContainer}>
        <div className={styles.faqDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nibh
          dui.
          <br />
          Nulla facilisi. Ut ullamcorper bibendum pulvinar.
        </div>
        <div className={styles.accordionContainer}>
          {faq.map((question, index) => (
            <Accordion question={question} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
