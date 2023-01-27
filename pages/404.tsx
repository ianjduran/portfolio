import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'

const PageNotFound: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen py-2 ">
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full px-20 ">
        <Navbar />
        <div className="flex flex-col mt-12 text-center font-titillium">
          <h1 className="text-7xl font-bold dark:text-white">
            {/* Hello <span className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg">There!</span> */}
            Oops!
          </h1>
          <p className="mt-4 text-lg dark:text-white">This Page doesn't exist</p>
        </div>

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

export default PageNotFound;
