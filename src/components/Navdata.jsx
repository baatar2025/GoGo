import React from 'react'

export const Navdata = (props) => {
  const set =[];
  props.data.forEach((e)=>{
     set.push(<li className=' hover:text-blue-600'>{e}</li>)
  });
  return (
    <div className=''>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className=' relative group '>
            <div className='hover:bg-slate-500 '>
              <h2 className=' text-xl'>{props.title} <i class="fa-solid fa-angle-down"></i> </h2>
            </div>     
            <div className='absolute group-hover:block hidden ' id='Nav'>
                    <div className=' grid grid-cols-3 bg-white shadow-2xl rounded-xl p-3 w-[340px] h-fit items-center text-center'>
                      {set}
                    </div>
            </div>
        </div>
    </div>
  )
}
