import Image from 'next/image';
import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it"; // import the markdown-it library
import md from "markdown-it"; // import the markdown-it library
import path from "path";
import styles from '../components/Button.module.css';
import Head from 'next/head'
// The page for each post
export default function Post({frontmatter, content}) {
    const {title, seo, author, category, date, bannerImage, tags, img, info} = frontmatter

    return <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
  <Head>
    <title>{title}-雙龍體育blog</title>
    <meta name="description" content={`${title}-雙龍體育blog`} />
  </Head>     

        
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="pt-10 pb-16">
    <div className="text-sm font-medium text-gray-500">Product</div>
    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}

    </h1>
    <p className="mt-4 max-w-2xl text-xl text-gray-500">
             {seo}

    </p>
  </div>
  <div className="border-t border-blue-500 pt-10 pb-16">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={img}
          alt={author}
          className="h-10 w-10 rounded-full"
          height={40}
          style={{ aspectRatio: "40/40", objectFit: "cover" }}
          width={40}
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime="{date}">{date}</time>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-sm font-medium text-gray-900">
          作者介紹
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {info}
        </p>
      </div>
    </div>
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <div>
          <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
            <p>
    <div dangerouslySetInnerHTML={{ __html: content }} />
            </p>
          </div>
        </div>
      </header>
    </article>
  </div>
</div>
<div className="mt-[5rem] flex flex-col gap-6">
      <div className="h-stack flex-wrap gap-2 text-base">
        <p className="text-lg text-black dark:text-white">標籤</p>
          <Link
            href="#"
            className="bg-blue-100 px-2 py-1 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" >
            # {tag}
          </Link>
    
      </div>
      
        <a
          
          className="h-stack rounded-xl bg-zinc-100 p-4 dark:bg-zinc-900"
          href="#"
          target="_blank"
          rel="nofollow noreferrer"
        >
          {author.image_url != null && (
            <Image
              alt="avatar"
              src={img}
              width={60}
              height={60}
              className="rounded-full"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold">{autho}</h2>
            <p className="text-secondary text-lg">{info}</p>
          </div>
        </a>
      ))}
      <div
        className={clsx(
          "flex flex-col gap-3 rounded-xl p-4",
          "bg-gradient-to-br from-pink-50/50 via-pink-100 to-cyan-200/50",
          "dark:from-cyan-800/20 dark:to-purple-400/50"
        )}
      >
        <h2 className="font-extrabold">
          <span className="text-2xl max-sm:text-blue-400 sm:text-3xl">
            也想成為
          </span>
          <br className="sm:hidden" />
          <span className="text-3xl">內容創作者?</span>
        </h2>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
          通過 Github 為我們貢獻
        </p>
        <a
          href="https://github.com/ssangyongsportsorg/ssport-website"
          target="_blank"
          className="w-fit"
          rel="noreferrer"
        >
          <button className="rounded-lg bg-blue-400 px-4 py-2 font-bold text-white">
            加入我們
          </button>
        </a>
      </div>
    </div>
</main>

}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fullPath = path.join("posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
  // Disable header tags
  header: false,
    heading: false,
    plugins: [require('markdown-it-attrs')],


});
md.use(require('markdown-it-attrs'), {
    leftDelimiter: '[',
    rightDelimiter: ']',
  });
  const htmlContent = md.render(content);

  return {
  props: {
    frontmatter,
    content: htmlContent,
    },
  };
}  
