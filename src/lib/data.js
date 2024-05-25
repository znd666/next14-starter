import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.log('一覧ページエラー')
    throw new Error(error)
  }
}

export const getPost = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findOne({slug})
    return post
  } catch (error) {
    console.log('ブログ個別ページエラー')
    throw new Error(error)
  }
}

export const getUser = async (id) => {
  noStore()
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log('名前取得エラー')
    throw new Error(error)
  }
}

export const getUsers = async () => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (error) {
    console.log('Usersエラー')
    throw new Error(error)
  }
}