import React, { useMemo,useState } from 'react'
import { Secdata } from './Secdata'
import { Todaydata } from './Todaydata';
import { Unuudur } from './Unuudur';

export const Section1 = () => {
    const [load,setload]=useState(4)
    const set=[];
   useMemo(()=>{
    for(let i=0;i<6;i++){
        set.push(<Secdata/>)
    }
   })
    const days=[];
   useMemo(()=>{
    for(let o=5;o>0;o--){
        days.push(<Todaydata too={o} />)
    }
   },[]) 
    function add(){
        setload(load+3)
    }
    const today=[]
    useMemo(()=>{
       for(let i=0;load>=i;i++){
        today.push(<Unuudur/>)
       }
    },
    [load]
    )

  return (
    <>
    <div>
    <div>
        <div className='mb-10'>
            <span className='text-xl'>GoGo <span className='bg-blue-300 text-white text-xl rounded-xl p-1'>СТОРИ</span> </span>
        </div>
        <div className='flex gap-3 mb-16'>
            {set}
        </div>
        <div className='flex gap-10'>
            <div>
                <p className='text-xl'>Өнөөдөр </p>
                <div>
                    <div className='bg-blue-400 h-2 w-20 rounded-2xl'> </div> 
                    <p>1 сарын 06</p> 
            </div>
            </div>
            <div className='flex gap-10 mt-7'>
                 {days}
            </div>
            
            </div>
            
        </div>
        {/* unuudur */}
        <div className='mb-10'>
            {
                today
            }
        </div>
        <div className='ml-[30%]'>
        <button onClick={add} className=' flex bg-slate-400  rounded-lg p-1'>
            Load more
        </button>
        </div>
      
    </div>
        
    </>
   
  )
}
