import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={"/blogImgs/post.png"} alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa minus dolorum asperiores doloribus excepturi magni a perferendis similique nulla nostrum nesciunt eligendi explicabo ducimus quasi aliquam rerum, facere quis.</p>
        <Link className={styles.link} href={"/blog/post"} >READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard