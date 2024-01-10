import React from 'react'

export const Trend = (props) => {
  return (
    <div className=' mb-10'>
        <div className=' px-10 w-[100%]'>
            
                
            <div className='flex gap-3 mb-2'>
                <p className=' font-bold text-5xl h-6 text-red-500'>
                    {props.too}
                    </p>
                
                <p>
                Жоди Фостер: Z үеийнхэнтэй 
            ажиллах үнэхээр төвөгтэй
                </p>
            </div>
            <p className='text-gray-500'>
            <i class="fa-solid fa-share"></i>2015  <i class="fa-solid fa-message"></i> 80 <i class="fa-regular fa-clock"></i> Дөнгөж сая
            </p>
        </div>
    </div>
  )
}
