import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import fs from "fs";
import matter from "gray-matter";

import Navbar from "../components/Navbar";
import path from "path";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const socialMedia = [
  {
    name: "Github",
    icon: AiFillGithub,
    href: "https://github.com/ianjduran",
  },
  {
    name: "Instagram",
    icon: GrInstagram,
    href: "http://instagram.com/ianjduran",
  },
  {
    name: "Linkedin",
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/ianjduran/",
  },
];

const Home: NextPage = ({ projects }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('../public/gradient-1.png')] bg-contain bg-no-repeat bg-top">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar/> */}
      <Navbar/>
      <main className="flex-inline flex-col ">
        <div className="flex flex-col mt-8 text-center font-titillium">
          <h1 className="text-6xl font-bold tracking-tight bg-clip-text bg-[length:200%] bg-gradient-to-r from-[#e96274] via-purple-300 to-[#43adde] text-transparent animate-gradient-move ">
            {/* Hello <span className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg">There!</span> */}
            Hey There!
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 ">
          {/* <div className="relative col-span-4 px-8 py-4 transition-all duration-500 ease-out rounded-lg hover:shadow-md font-titillium bg-gradient-to-r to-blue-50 via-purple-50 from-red-50"> */}
          <div className="relative md:col-span-4 px-8 py-4 rounded-lg hover:shadow-xl transition-all ease-out duration-500 font-titillium bg-[url('../public/gradient-2.png')] bg-cover z-auto">
            <h2 className="mt-4 text-3xl font-bold font-oxygen">
              Ian Javier Duran Román
            </h2>
            <h2 className="mt-1 text-lg">
              Robotics and Digital Systems Engineering Student
            </h2>

            <p className="mt-6 text-xl font-oxygen">
              I'm a student who keeps looking to grow and expand his knowledge
              about technology and to share his passion with people in his
              community. As a Robotics student I look forward on creating and
              developing different machines that improve people's quality of
              life.
            </p>
            <button className="inline-block px-12 py-3 my-4 font-bold text-white transition-transform ease-out bg-black rounded-full hover:bg-zinc-900 font-oxygen active:scale-95">
              <a href="https://drive.google.com/file/d/1KXRZaNrpHVHZFRE-Amym2TTo8yk1ao07/view">
                Get Resume
              </a>
            </button>
            {/* <Image fill alt="" src={'/gradient-2.png'}/> */}
          </div>
          <div className=" items-center md:items-start flex flex-col gap-4 md:gap-0 w-full justify-between col-auto px-8 py-4 transition-all duration-500 ease-out rounded-lg md:col-span-2 bg-slate-100 hover:shadow-xl">
            <h2 className="mt-4 text-3xl font-bold font-titillium ">
              External Links
            </h2>
            <div className="flex flex-row gap-4 mb-4">
              {socialMedia.map((element, i) => {
                const Icon = element.icon
                return (
                  <i key={i}>
                    <a href={element.href}>
                      <Icon className="w-8 h-8 text-gray-600 hover:text-slate-700"/>
                    </a>
                  </i>
                )
              })}
            </div>
          </div>
        </div>

        <h2 className="mt-12 mb-4 text-4xl font-bold dark:text-white">
          Latest Projects
        </h2>
        {/* <div className="flex-wrap max-w-4xl mt-6 sm:w-full bg-slate-100"> */}
        <div className="grid flex-wrap md:grid-cols-3 gap-6">
          {projects?.slice(0, 3).map((project: any, index: number) => {
            return (
              <div
                key={index}
                className={`flex flex-wrap w-full p-8 text-white transition-all ease-out duration-500 sm:w-full rounded-2xl hover:shadow-xl ${
                  index == 1
                    ? " bg-[#003459] text-white"
                    : " bg-[#E2F0F3] text-slate-900"
                }`}
              >
                <h3 className="text-2xl font-bold">
                  {project?.frontMatter.title}
                </h3>
                <div className="flex flex-col w-full ">
                  <p className="text-lg">{project?.frontMatter.description}</p>
                  <Link href={`/projects/${project?.slug}`} passHref>
                    <button className="self-end block mr-8 font-bold ">
                      Saber más {"›"}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <button className="inline-block px-12 py-3 my-4 font-bold text-white transition-all ease-out bg-black rounded-full hover:bg-zinc-900 font-oxygen active:scale-95 group-hover ">
          <Link href={"/projects"} className="">
            Ver más projectos{" "}
            <span className="-translate-x-8 group-hover:translate-x-0">→</span>
          </Link>
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "projects"));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "projects", filename)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  }).sort((a,b)=>{
    if(a.frontMatter.date > b.frontMatter.date)
      return 1;
    else
      return -1;

  });


  return {
    props: {
      projects
    },
  };
};
