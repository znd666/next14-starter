import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde repellat non iusto expedita, odit dolorem. Molestias quasi, aperiam corrupti consequatur repellat doloremque cumque hic expedita possimus aliquam placeat nam sit!</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3 className={styles.num}>10 K+</h3>
            <p>Year of exprience</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.num}>10 K+</h3>
            <p>Year of exprience</p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.num}>10 K+</h3>
            <p>Year of exprience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="Pic" fill className={styles.img} />
      </div>
    </div>
  )
}

export default AboutPage