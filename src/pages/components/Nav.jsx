import React from 'react'
import { Navdata } from './Navdata';
import { Navimg } from './Navimg';

export const Nav = () => {
  const data=[
    {
      title:"Мэдээ",
      data:[
       " Улс төр",
        "Эдийн засаг",
       " Эрүүл мэнд",
        "Соёл урлаг",
        "Спорт",
       " Нийгэм",
        "Бизнес",
        "Боловсрол",
       ' Дэлхийд',
        "Технологи",
        'Монгол наадам',
        'GOGO тойм',
        'SOS',
        'Нягтлав',
       ' Нүүрсний хулгай',
       ' Мэддэг мэдээлдэг байя'
      ]
    },
    {
      title:"GoGo булан",
      data:[
       ' GoGo Cafe',
        'Гарааны бизнес',
        'Соёлын довтолгоо',
        'СEO',
       ' Элчин сайд',
        'GoGo асуулт',
       ' МЕГА ТӨСӨЛ',
      '  ГУТАЛ',
        'Хүний түүх'
      ]
    },
    {
      title:"Үзэх",
      data:[
        'Фото',
       ' Видео',
       ' Зурган өгүүлэмж'

      ]
    },
    {
      title:"Хэв маяг",
      data:[
        'Подкаст',
       ' Хүмүүс',
        'Гэртээ тогооч',
        'Аялал',
        'Зөвлөгөө',
       ' Хоолзүйч',
        'Миний санал болгох кино',
       ' Миний санал болгох ном'
      ]
    },
    {
      title:"English",
      data:[""]
    },
  ]
    const set =[];
    data.forEach((e)=>{
      set.push( <Navdata title={e?.title} data={e?.data} />)
    })
    const sets=[];
    for(let i=0;i<4;i++){
      sets.push(<Navimg/>)
    }
  return (
    <>
    <div className='flex gap-20 '>
          <div className='flex gap-10'>
              <div className=' w-28 h-28'>
                <img src="/img/gogo-logo.345096b3.png" alt="gogo" className='' />
              </div>
                  {set}
              <div>
                  <i class="fa-solid fa-magnifying-glass"></i>  
              </div>
          </div>      
            
              <div className='flex gap-3'>
                    <div>
                        <p className=' text-sm'>Цаг агаар</p>
                        <div>
                        <i class="fa-regular fa-sun"></i>-19
                        </div>
                    </div>
                    <div>
                        
                        <p className=' text-sm'>Зурхай </p>  
                        
                        <div>
                          <i class="fa-solid fa-calendar-week"></i> 1.05
                        </div>
                    </div>
                    <div>
                        <p className=' text-sm'> Валютын ханш</p>
                        <div>
                            <p> <i class="fa-solid fa-dollar-sign"></i> <span>3550</span></p>

                        </div>
                    </div>
                  
              </div>  
    </div>
    <div className=' w-[100%] flex flex-col h-[50%] mb-10'>
        <div className='flex mb-8'>
              <div className=' w-[50%] bg-white rounded-xl shadow-xl p-10'>
                    <button className=' bg-orange-600 p-1 hover: rounded-xl mb-4'>
                    Хүний түүх
                    </button>
                    <h1 className=' text-2xl mb-4'>ХҮНИЙ ТҮҮХ: Статистик миний өдрийн тутмын амьдралтай салшгүй холбоотой</h1>
                    <p className=' mb-4'>
                    Төрийн байгууллагаас ажлын гараагаа эхэлж, олон улсын байгууллага цаашлаад хувийн салбарт ч хүч сорьж буй О.Энх-Ариунаагийн ажлын түүхийг тодорхойлоход “туршлага” гэдэг үг чухал үүрэг гүйцэтгэнэ
                    </p>
              </div>
              <div  className=' w-[50%] bg-white rounded-xl shadow-xl'>
                <img src="/img/Navimg.jpeg" alt="" className=' w-[100%] rounded-xl' />
              </div>
      </div>
        <div className='flex'> 
          {sets}
        </div>
    </div>
    </>
  )
}