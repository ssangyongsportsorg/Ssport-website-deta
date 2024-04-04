// lib/posts.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allPostsData
}

export async function getAllTags() {
  const postsData = getPostsData()
  const allTags = new Set()

  postsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => allTags.add(tag))
    }
  })

  return Array.from(allTags)
}

export async function getPostsByTag(tag) {
  const postsData = getPostsData()
  const filteredPosts = postsData.filter((post) => post.tags && post.tags.includes(tag))

  return filteredPosts
}