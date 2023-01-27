import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import { FiGlobe } from "react-icons/fi";

import Navbar from "../../components/Navbar";

const components = {};

export default function projectDetails({ frontMatter, mdxSource }: any) {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="items-center content-center justify-center object-center mx-auto  dark:text-white font-oxygen md:w-full">
        <button
          onClick={() => router.back()}
          className="py-2 text-lg font-bold dark:text-white"
        >
          {" "}
          ← Go back
        </button>
        <h1 className="text-4xl font-bold dark:text-white font-titillium">
          {frontMatter.title}
        </h1>
        <h2 className="mt-1 ml-4 text-sm font-bold tracking-wider uppercase dark:text-white font-oxygen">
          {frontMatter.date}
        </h2>

        {/* <h2>Brief Description</h2> */}
        <p className="mt-4 text-gray-600 dark:text-gray-400">{frontMatter.description}</p>
        {frontMatter?.repoUrl && (
          <a
            href={frontMatter?.repoUrl}
            className={" dark:text-white flex flex-row items-center group font-semibold hover:font-bold"}
          >
            <FiGlobe />
            <span className={` ml-2 text-sm tracking-wider`}>
              Repository/Website{" "}
            </span>{" "}
            <span className={` relative ml-2 -translate-x-1 group-hover:translate-x-0 transition-transform ease-out`}>›</span>
          </a>
        )}

          <div className="w-full max-w-5xl justify-center content-center mt-8 prose text-justify dark:text-white dark:prose-headings:text-white">
            <MDXRemote {...mdxSource} />
          </div>
      </main>
    </div>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "projects"));

  const paths = files.map((filename) => {
    return {
      params: {
        slug: filename.split(".")[0],
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "projects", slug + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
