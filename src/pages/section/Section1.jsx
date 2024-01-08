import React, { useMemo,useState } from 'react'
import { Secdata } from './Secdata'
import { Todaydata } from './Todaydata';
import { Unuudur } from './Unuudur';
import { Ontsloghdata } from './Ontsloghdata';
import { Trend } from './Trend';

export const Section1 = () => {
    const [load,setload]=useState(10)
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
   },[load]) 
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
    const ontsloh=[];
    useMemo(()=>{
        for(let e=0;e<4;e++){
            ontsloh.push(<Ontsloghdata/>)
        }
    },[load])
     const trend=[]
     useMemo(()=>{
        for(let d=1;d<=10;d++){
            trend.push(<Trend too={d} />)
        }
     })

  return (
    <>
     <div className='mb-10'>
        <span className='text-xl'>GoGo <span className='bg-blue-300 text-white text-xl rounded-xl p-1'>СТОРИ</span> </span>
    </div>
    <div className='flex gap-3 mb-16'>
        {set}
    </div>
    <div className='flex'>
        <div className='flex'> 
            <div>
                <div className='flex gap-10 mb-10'>
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
                     {/* unuudur */}
                <div>
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
               
            </div>



          
          <div >
                <div className=' border-l pl-12 flex flex-col gap-5 '>
                    <h1 className=' font-black flex justify-center mb-7'>Онцлох мэдээ</h1>
                            {ontsloh}
                </div> 
                <div className='ml-0'>

                </div>
                <div className=' bg-orange-100'>
                <div className='flex justify-center mb-10'>
                    <p className=' font-semibold text-2xl'>
                    Тренд мэдээ
                    </p>
                </div>
                        {trend  }
                </div>  
          </div>
        
        </div>
        
              
    </div>
        
    </>
   
  )
}
