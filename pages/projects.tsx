import fs from 'fs'
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

import Navbar from "../components/Navbar";

export default function ProjectsPage({projects}:  any){
    return <div className='min-h-screen'>
        <Navbar/>
        <h1 className='text-5xl font-bold tracking-tight font-titillium mb-8 dark:text-white '>Projects</h1>
        <div className='grid flex-wrap gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

        {projects.map((project: any, index: number) => {
          return (
            <div key={index} className={`inline-flex flex-col p-8 my-3 transition-all ease-out rounded-2xl hover:shadow-lg  ${index%2==1?' bg-[#D7E1E7]' : ' bg-slate-700 text-white'}`}>
              <h3 className="text-2xl font-bold">{project.frontMatter.title}</h3>
              <div className="flex flex-col w-full ">
                <p className="text-lg">
                  {project.frontMatter.description}
                </p>
                <Link href={`/projects/${project.slug}`} passHref>
                  <button className="self-end block mr-8 font-bold ">
                    Saber más {"›"}
                  </button>
                </Link>
              </div>
            </div> 
          );
        })}
        </div>
    </div>
} 

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
        projects,
      },
    };
  };