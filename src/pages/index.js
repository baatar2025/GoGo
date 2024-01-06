// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Nav } from './components/Nav'
import { Section1 } from './section/Section1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className=' mx-[10%] my-[5%]'>
         <Nav/>
         <Section1/>
    </main>
   
    </>
  )
}
