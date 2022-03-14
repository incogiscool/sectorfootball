import React from 'react';
import Link from 'next/link';
import styles from './../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <nav className={styles.navcontainer}>
            <ul className={styles.ul}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about-us'>
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href='/enroll'>
                        <a className={styles.enroll}>Enroll</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <Link href='/'>
            <a className={styles.logo}><img src="https://i.postimg.cc/bvHC8g36/29-294550-image-description-football-player-logo-png.png" width="50px" /></a>
        </Link>
    </div>
  )
}

export default Navbar