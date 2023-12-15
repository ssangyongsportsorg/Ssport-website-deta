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

    return <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
        
 <div key="1" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-16">
          <div className="text-sm font-medium text-gray-500">Product</div>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    {title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500">
                    {seo}

          </p>
          <div className="mt-6">
            <img
              alt="{author}"
              className="rounded-lg bg-black"
              height="700"
              src="/{img}"
              style={{
                aspectRatio: "900/700",
                objectFit: "cover",
              }}
              width="900"
            />
          </div>
        </div>
        <div className="border-t border-blue-500 pt-10 pb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
                    <img
            alt="{title}"
            className="w-full h-auto"
            height="400"
            src="/{bannerImage}"
            style={{
              aspectRatio: "1449/400",
              objectFit: "cover",
            }}
            width="1449"
          />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{author}</p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="{date}">{date}</time>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">介紹作者</p>
              <p className="mt-1 text-sm text-gray-500">
                 {info}
                    </p>
            </div>
          </div>
                    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 ">
             <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        </div>
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
