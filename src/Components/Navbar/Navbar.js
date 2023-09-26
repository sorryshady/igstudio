import React from 'react'
import styles from './Navbar.module.css'
import { ReactComponent as Logo } from '../../Assets/Logo.svg'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href='#'>
        <Logo className={styles.logo} />
      </a>
      <ul className={styles.navLinks}>
        <a href='#home' className={styles.navLink}>
          <li>Home</li>
        </a>
        <a href='#attorneys' className={styles.navLink}>
          <li>Attorneys</li>
        </a>
        <a href='#practice' className={styles.navLink}>
          <li>Practice Areas</li>
        </a>
        <a href='#about' className={styles.navLink}>
          <li>About Us</li>
        </a>
      </ul>
      <button className={styles.contact}>Contact Now</button>
    </nav>
  )
}

export default Navbar
