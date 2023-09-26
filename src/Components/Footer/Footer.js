import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../../Assets/Logo.svg'
import { ReactComponent as Facebook } from '../../Assets/facebookIcon.svg'
import { ReactComponent as Instagram } from '../../Assets/instagramIcon.svg'
import { ReactComponent as Pinterest } from '../../Assets/pinterestICon.svg'
import { ReactComponent as Twitter } from '../../Assets/twitterIcon.svg'
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.navbar}>
        <a href='#home'>
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
        <div className={styles.socials}>
          <Facebook className={styles.logo} />
          <Instagram className={styles.logo} />
          <Pinterest className={styles.logo} />
          <Twitter className={styles.logo} />
        </div>
      </nav>
      <div className={styles.legalInfo}>
        <p>&copy; 2020 Acme.All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer
