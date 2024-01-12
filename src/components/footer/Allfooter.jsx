import React, { useMemo } from 'react'
import { Hevmayg } from './Hevmayg';
import { Footers } from './Footers';

export const Allfooter = () => {
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
    <div>
          <div className='flex flex-col'>
           <div className=' flex gap-2 mb-5 mt-10'>
            <h1>GoGo</h1>
            <button className=' rounded-lg bg-blue-300 text-white p-1'>ХЭВ МАЯГ</button>
           </div>
           <div className='flex gap-10'>
              {set}
           </div>
          
       </div>

       <div className='flex flex-col'>
           <div className=' flex gap-2 mb-5 mt-10'>
            <h1>tehnik</h1>
            {/* <button className=' rounded-lg bg-blue-300 text-white p-1'>ХЭВ МАЯГ</button> */}
           </div>
           <div className='flex gap-10'>
              {set}
           </div>
          
       </div>
       <div className='flex flex-col'>
           <div className=' flex gap-2 mb-5 mt-10'>
            <h1>Komic</h1>
            {/* <button className=' rounded-lg bg-blue-300 text-white p-1'>ХЭВ МАЯГ</button> */}
           </div>
           <div className='flex gap-10'>
              {set}
           </div>
          
       </div> 
       
       {/* <div>
        <div className='mt-32' >
              <h1 className=' font-bold text-2xl mb-5'>Үзэх</h1> 
              <div className='flex gap-9'>
                {fset}
              </div>
          </div>
          <div className='mt-10' >
              <h1 className=' font-bold text-2xl mb-5'>Үзэх</h1> 
              <div className='flex gap-9'>
                {fset}
              </div>
          </div>
     </div> */}
    </div>
  )
}
