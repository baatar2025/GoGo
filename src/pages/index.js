// import Image from 'next/image'

import { Nav } from '@/components/Nav'
import { Yriltslag } from '@/components/footer/Yriltslag'
import { Section1 } from '@/components/section/Section1'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className=' mx-[10%]'>
       <Nav/>
       <Section1/>
       <Yriltslag/>
    </main>
   
    </>
  )
}
