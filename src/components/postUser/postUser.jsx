import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '@/lib/data'

// const getData = async (userID) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
//   if (!res.ok) {
//     throw new Error('Somthing went wrong')
//   }
//   return res.json()
// }

const PostUser = async ({userId}) => {
  const user = await getUser(userId)
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  )
}

export default PostUser