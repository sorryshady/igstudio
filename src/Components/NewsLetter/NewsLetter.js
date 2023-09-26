import React, { useState } from 'react'
import styles from './NewsLetter.module.css'
const NewsLetter = () => {
  let timerId
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageState, setMessageState] = useState(false)
  const nameChange = (e) => {
    setName(e.target.value)
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const submitHandle = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessageState(true)
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      setMessageState(false)
    }, 2000)
  }
  return (
    <div className={styles.newsLetterContainer}>
      <div className={styles.newsLetter}>
        <div className={styles.newsLetterTitle}>
          Subscribe to our Newsletter
        </div>
        <form className={styles.newsLetterCta} onSubmit={submitHandle}>
          <input
            className={styles.ctaName}
            value={name}
            type='text'
            placeholder='Name:'
            required
            onChange={nameChange}
          />
          <input
            className={styles.ctaEmail}
            value={email}
            type='text'
            placeholder='Enter your email:'
            required
            onChange={emailChange}
          />
          <button className={styles.ctaBtn}>Send</button>
        </form>
        {messageState && (
          <div className={styles.statusMsg}>
            You have subscribed to the Newsletter.
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsLetter
