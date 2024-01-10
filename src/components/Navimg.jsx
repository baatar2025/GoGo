import React from 'react'

export const Navimg = () => {
  return (
    <div className=' flex flex-col w-80 p-5 bg-slate-50 rounded-xl'>
               <img src="/img/gogostorys.jpeg" alt=""  className=' w-80 h-44 rounded-xl'/>
            
            <p className='mb-4'>Ч.Хүрэлбаатар: Банкны салбарт гадаадын хөрөнгө оруулалтыг оруулж ирмээр байна</p>
            <div className='flex gap-5'>
                <i class="fa-solid fa-share"></i>100
                <i class="fa-regular fa-message"></i>12
            </div>
   </div>
  )
}
