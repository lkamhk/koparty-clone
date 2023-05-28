import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import bgJpg from '../public/image/thebg_good4.jpg'

// const [clientWidth,setClientWidth] = useState(0);

// const gradientLoop = () => {
//   let arr = []
//   for (let i = 0; i <= 100; i++) {

//     arr.push(<div className={`inline absolute w-[${i}%] h-[100%] bg-gradient-to-r from-white to-transparent`}></div>)

//   }
//   return arr
// }

// useEffect(() =>{
//   setClientWidth(window.innerWidth)

// })


const Intro = () => {
  return (
    <div className='w-full h-full flex flex-col items-center  justify-center px-32px py-64px '>



      <div className='w-full h-full relative  '>
        {/* banner context */}
        <div className='absolute left-[21%] z-20  top-[35%] lg:top-[10%] xs:top-[3%]'>
          <h1 className='text-[56px] z-10 mt-[8px] '>全港最好玩既Private派對 (示範頁面)</h1>
          <div className='mb-[36px] text-[1.25rem] font-light ' style={{ fontFamily: 'open sans', }}>
            生活悶悶地？加入我們一齊玩啦！
          </div>
          <button className='btn bg-[#f05f5c] text-[1.25rem]  w-[136px] h-[44px] px-7px py-28px text-white rounded-[20px] focus:border-box focus:border-[#bfdeff] focus:border-[5px]'>參加派對</button>
        </div>
        <div className='absolute h-[70vh]  w-[100%] z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.99)_20%,rgba(255,255,255,0.7)_70%,rgba(255,255,255,0)_95%)]' ></div>

        <Image src={bgJpg} className='h-[70vh]  w-full bg-center object-cover' alt='promo image' fixed='true' />
      </div>




    </div>

  )
}

export default Intro