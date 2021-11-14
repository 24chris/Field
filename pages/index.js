import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'




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
    <div className="flex flex-col content-center items-center ">
      <section className="text-gray-700 body-font">
        <div className="pt-6">
        <iframe width="714" 
        height="402" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        </div>
        <h2 className="pt-3 font-semibold mb-2">INTRO TO FIELD SIMPLIFIED</h2>
      </section>
      <div className="container mx-auto shadow-sm">   
       <div className="flex flex-row space-x-4 justify-center">
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
          <figcaption class="font-medium">
            <div class="text-gray-500">
              Why Simplified
           </div>
          </figcaption>
          </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              About Internship
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              Other Programs
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              About Supervision
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              Fields Covered
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              Need Help?
           </div>
          </figcaption>
        </div>
          <div>
          <iframe width="150" 
        height="100" 
        src="https://www.youtube.com/embed/tyn3ydrh9Rk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
         </iframe>
        <figcaption class="font-medium">
            <div class="text-gray-500">
              Demo
           </div>
          </figcaption>
        </div>
        </div>
      </div>
      <div className="container mx-auto bg bg-gray-500 shadow-sm pt-5">
        <div className="flex flex-row bg space-x-20 justify-start">
        <div>
          <button className="flex mx-auto px-8 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Why field simplified
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-8 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            About Internship
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-8 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            About Supervision
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-8 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            About Skills Training
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-8 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            About Field Solutions
          </button>
        </div>
        </div>
      </div>
      <div className="container mx-auto bg bg-gray-500 shadow-sm pt-5">
        <div className="flex flex-row bg space-x-20 justify-start">
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Follow Us
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
           Views
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Contact Us
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Pricing
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Demo
          </button>
        </div>
        <div>
          <button className="flex mx-auto px-10 text-black bg-gray-500 border-0 focus:outline-none hover:bg-red-200 rounded text-lg">
            Partners
          </button>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}
