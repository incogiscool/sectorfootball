import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <h1 className={styles.titleH1}>Sector Football Team</h1> */}
      <center>
        <div className={styles.coverPhoto}>
          <h1 className={styles.titleH1}>Sector Football Academy</h1>
          <img src='https://i.postimg.cc/HkJ1pqy6/jannik-skorna-m-Y2-ZHBU6-GRk-unsplash.jpg' width="1000px" />
        </div>
        <div className={styles.desc}>
          <h2 className={styles.descTitle}>What is Sector?</h2>
          <p className={styles.mainDesc}>Sector is a great place for kids of all ages to learn more about the infamous sport of Football.
            <br></br>
            Kids aged 5-17 are encouraged to join the club. We schedule matches against other teams weekly to refine our
            <br></br>
            kids Football skills.
            <br></br>
            Enroll Now <span className={styles.enrollLink}><Link href="/enroll"><a>Here.</a></Link></span>
          </p>
        </div>
      </center>
    </div>
  )
}
