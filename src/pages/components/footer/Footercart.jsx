import React from 'react'

export const Footercart = (props) => {
  return (
    <div className='relative w-[40% ] p-6'>
        <img src="/img/Navimg.jpeg" alt="mhn" className={`rounded-lg w-${props.hemjee}`} />
        <div className='absolute bottom-10 '>
            <button className=' bg-blue-400 text-white rounded-xl p-1'>ХҮНИЙ ТҮҮХ</button>
            <p className={`text-black text-xl w-[100%] h-${props.h}`}>
                Статистик миний өдөр тутмын амьдралтай салшгүй холбоотойХҮНИЙ ТҮҮХ

            </p>
        </div>     
    </div>
  )
}
// text-black text-xl w-[100%]