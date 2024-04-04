import { getAllTags, getPostsByTag } from '../../lib/posts'
import Layout from '../../components/Layout'
import PostList from '../../components/PostList'
import Head from 'next/head'

export default function TagPage({ posts, tag }) {
  return (
    <Layout>
      <Head>
        <title>标签: {tag} - 雙龍體育部落格</title>
        <meta
          name="description"
          content={`查看所有標記為 "${tag}" 的文章`}
        />
      </Head>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              標記為 "{tag}" 的文章
            </h2>
          </div>
          <PostList posts={posts} />
        </div>
      </div>
    </Layout>
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