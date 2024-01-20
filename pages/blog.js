import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import styles from './components/Button.module.css';


// The Blog Page Content
export default function Blog({posts}){
    return <main>
        <div>
        <section>
  <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        From the blog
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
  </div>
</div>
<Head>
        <title>雙龍體育blog</title>
        <meta name="description" content="任何關於雙龍體育的任何關於雙龍體育的消息和公告,就上雙龍體育blog" />
      </Head>
</section>
        </div>
                
        
  

        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

            //JSX for individual blog listing
            return <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article className="flex max-w-xl flex-col items-start justify-between" key={title}>
  <div className="flex items-center gap-x-4 text-xs">
    <time dateTime="{date}" className="text-gray-500">
      {date}
    </time>
    <a
      href="#"
      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    >
         {tags}
    </a>
  </div>
  <div className="group relative">
    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      <Link href={`/blog/${slug}`}>
        <span className="absolute inset-0" />
                    {title}
      </Link>
    </h3>
    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
      {seo}
    </p>
  </div>
  <div className="relative mt-8 flex items-center gap-x-4">
    <Image
      src={img}
      alt={author}
      className="h-10 w-10 rounded-full bg-gray-50"
    />
    <div className="text-sm leading-6">
      <p className="font-semibold text-gray-900">
        <a href="#">
          <span className="absolute inset-0" />
           {author}
        </a>
      </p>
      <p className="text-gray-600"> {info}</p>
    </div>
  </div>
</article>
 </div>

        })}
</main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts in descending order based on the date property
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      posts,
    },
  };
}
