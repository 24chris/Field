import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Footer(){
    return(
        <footer className="">
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          from{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        <div className="flex justify-center text-sm">from</div>
        <span className="flex justify-center text-sm">The <span className="text-center text-red-500 mx-2">ICT</span> Labs</span>
        
      </footer>
    );
}