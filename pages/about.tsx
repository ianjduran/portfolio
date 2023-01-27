import Navbar from "../components/Navbar";

export default function AboutPage(){
    return <div className="min-h-screen">
        <Navbar/>
        <div className="flex flex-col mt-12 text-center font-titillium ">
          <h1 className="text-5xl font-bold dark:text-white">
            {/* Hello <span className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg">There!</span> */}
            This Page is Under Construction
          </h1>
          <p className="mt-4 text-lg dark:text-gray-200">Thank your for your patience =)</p>
        </div>
    </div>
} 