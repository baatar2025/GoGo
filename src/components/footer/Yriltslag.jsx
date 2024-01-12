import React from 'react'
import { Footercart } from './Footercart'

export const Yriltslag = () => {
  const set=[];
  for(let h=0;h<4;h++){
    set.push(<Footercart hemjee={42} h={10} />)
  }
  return (
    <div>
        <div>
          <h1 className='flex text-center'>
            <img src="/img/yriltslagmice.png" className=' w-8 h-8' />
            Ярилцлага
            </h1>
        </div>
        <div className='flex'>
           <div className=''>
              <div className='relative mt-7'>
                  <img src="/img/Navimg.jpeg" alt="mhn" className=' w-[450px] h-[530px] rounded-lg' />
                  <div className='absolute bottom-10 '>
                      <button className=' bg-blue-400 text-white rounded-xl p-1'>ХҮНИЙ ТҮҮХ</button>
                      <p className={`text-black text-xl w-[100%]`}>
                          Статистик миний өдөр тутмын амьдралтай салшгүй холбоотойХҮНИЙ ТҮҮХ
                          ХҮНИЙ ТҮҮХ: Статистик миний өдөр тутмын амьдралтай салшгүй холбоотой
                      </p>
                  </div>     
              </div>
            </div>

            <div className='grid grid-cols-2'>
              {set}
            </div>

        </div>
    </div>
  )
};
