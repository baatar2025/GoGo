// import Image from 'next/image'

import { Nav } from '@/components/Nav'
import { Allfooter } from '@/components/footer/Allfooter'
import { Footers } from '@/components/footer/Footers'
import { Hevmayg } from '@/components/footer/Hevmayg'
import { Yriltslag } from '@/components/footer/Yriltslag'
import { Section1 } from '@/components/section/Section1'
import { Inter } from 'next/font/google'
import { useMemo } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const set=[];
  useMemo(()=>{
    for(let i=0;i<4;i++){
      set.push( <Hevmayg/>)
    }
  },[])
  const fset=[]
  useMemo(()=>{
    for(let a=0;a<4;a++){
      fset.push(<Footers/>)
    }
  },[])
  return (
    <>
    <main className=' mx-[10%]'>
       <Nav/>
       <Section1/>
       <Yriltslag/>
       <Allfooter/>
   
    </main>
   
    </>
  )
}
