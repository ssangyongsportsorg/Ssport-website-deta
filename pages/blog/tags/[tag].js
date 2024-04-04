// pages/tags/[tag].js
import { getAllTags, getPostsByTag } from '../../../lib/posts'

import PostList from '../../components/PostList'

export default function TagPage({ posts, tag }) {
  return (
    <div>
      <h1>Posts tagged with {tag}</h1>
         <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <h2>{title}</h2>
              <p>{date}</p>
            </a>
          </Link>
         
        </div>
      ))}
    </div>
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