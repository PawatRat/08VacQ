'use client'
import styles from "./banner.module.css"
import Image  from "next/image"
import { useState } from "react"
import {useRouter} from "next/navigation"

export default function Banner() {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [ index, setIndex ] = useState(0)
  const router = useRouter()

  return (
    <div className={styles.banner} onClick={ ()=>setIndex(index+1) }>
      <Image src={covers[index % covers.length]} 
      alt='cover' 
      fill={true} 
      priority
      objectFit='cover' />
      <div className={styles.bannerText}>
          <h1 className='text-4xl font-bold	bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-white'>Vaccine Service Center</h1>
          <h3 className='text-2xl font-serif antialiased text-cyan-100'>vaccine is a good choice</h3>
      </div>
      <button className="bg-cyan-500 text-white border border-transparent font-semibold py-2 px-2 m-2 absolute bottom-0 right-0
      hover:bg-white hover:text-cyan-600 border-cyan-600 z-30 rounded-md shadow-lg shadow-blue-500/50" 
      onClick={(e)=> {e.stopPropagation(); router.push('/hospital') }}>
          Select Hospital
      </button>
    </div>
  )
}