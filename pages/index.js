import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom'




export default function Home() {
  return (
    // <div className={styles.container}>
    //   <Navbar/>

    //   <main className={styles.main}>


    //   </main>

    //   <Footer/>
    // </div>
    <>
    <Navbar/>
    <div className="w-64 shadow-md px-2 ml-3 py-2 pl-8 font-sans ">
      We encourage you to watch the entire video
      {/* <span className="shadow-md float-right">x</span> */}
    </div>
    <div className="w-64 shadow-md ml-3 px-2 mt-3 py-4 pl-8 font-sans ">
      or read from the links below
      {/* <span className="shadow-md float-right">x</span> */}
    </div>
    <div className="flex flex-col content-center items-center ">
      <section className="text-gray-700 body-font">
        <div className="pt-0">
        <iframe width="400" 
        height="180" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        </div>
        <h2 className="pt-0 font-semibold mb-2">INTRO TO FIELD SIMPLIFIED</h2>
      </section>
      <div className="container mx-auto shadow-sm">   
       <div className="flex flex-row space-x-4 justify-center">
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
          <figcaption className="font-medium">
            <div className="text-gray-500">
              Why Simplified
           </div>
          </figcaption>
          </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              About Internship
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              Other Programs
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              About Supervision
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              Fields Covered
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              Need Help?
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="80" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
         </iframe>
        <figcaption className="font-medium">
            <div className="text-gray-500">
              Demo
           </div>
          </figcaption>
        </div>
        </div>
      </div>    
    </div>
    
    <Bottom/>
    <Footer/>
    </>
    
  )
}
