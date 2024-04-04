// pages/tags/[tag].js
import { getAllTags, getPostsByTag } from '../../lib/posts'

import PostList from '../../components/PostList'

export default function TagPage({ posts, tag }) {
  return (
    <div>
      <h1>Posts tagged with "{tag}"</h1>
      <PostList posts={posts} />
    </div>
  )
}

export async function getStaticPaths() {
  const tags = await getAllTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { tag } = params
  const posts = await getPostsByTag(tag)

  return {
    props: {
      posts,
      tag,
    },
  }
}