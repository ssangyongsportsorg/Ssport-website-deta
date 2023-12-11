import fs from 'fs';
import matter from 'gray-matter';

export default function TagPage({ tag, posts }) {
  return (
    {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
              const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter
    <div>
      <h1>Tag: {tag}</h1>
      <ul>
        {posts.map((post) => (
          <li key={slug}>
            <a href={`/blog/${slug}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const tagsSet = new Set();

  files.forEach((fileName) => {
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    const { tags } = frontmatter;

    if (tags) {
      tags.forEach((tag) => tagsSet.add(tag));
    }
  });

  const tags = Array.from(tagsSet);
  const paths = tags.map((tag) => ({ params: { tag } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { tag } = params;

  const files = fs.readdirSync('posts');
  const posts = [];

  files.forEach((fileName) => {
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    const { tags } = frontmatter;

    if (tags && tags.includes(tag)) {
      posts.push({
        slug: fileName.replace('.md', ''),
        frontmatter,
      });
    }
  });

  return {
    props: {
      tag,
      posts,
    },
  };
}
