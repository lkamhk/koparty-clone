import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import bgJpg from '../public/image/thebg_good4.jpg'
import {AiTwotonePhone , AiOutlineMail} from 'react-icons/ai'




const contact = () => {

  // useEffect(() =>{

  //   function toggleButton(element) {
  //     // Check to see if the button is pressed
  //     var pressed = (element.getAttribute("aria-pressed") === "true");
  //     // Change aria-pressed to the opposite state
  //     element.setAttribute("aria-pressed", !pressed);
  //   }
  
  //   function handleBtnClick(event) {
  //     toggleButton(event.target);
  //   }
  
  // });
  
  return (
    <div className='w-full'>

     
      <div className='w-full h-full flex flex-col items-center  justify-center px-32px py-64px'>
        <div className='w-full h-[40%] relative'>
          <div className='absolute h-full w-[100%] z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.99)_20%,rgba(255,255,255,0.7)_70%,rgba(255,255,255,0)_95%)]' ></div>
          <div className='absolute h-full right-0 w-[600px] md:w-[500px] z-10 bg-black opacity-80' >
            <div className='h-full flex flex-col items-center justify-center text-white'>
              <h1 className='notoSansTC font-bold text-[2.5rem]'>
                聯絡我們
              </h1>
              <hr className='w-[86px] border-[1px] mt-[24px] mb-[25px] border-red-500' />
              <p className='openSans opacity-90'>銅鑼灣謝斐道535號Tower 535 20樓
                <br />
                電話: (852) 6761-3714</p>
            </div>
          </div>
          <Image src={bgJpg} alt="cover" className='h-[400px] w-full bg-center object-cover' fixed />
        </div>
      </div>

      <div className='h-[650px] w-full flex items-center justify-center'>

        <div className='md:hidden'>
        <div className=' h-[489px] px-[15px]'>
            <h3 className='notoSansTC mb-[40px] text-[28px] font-600'>聯絡方法</h3>
            <p className='openSans opacity-70'>如有任何查詢, 歡迎致電或電郵我們。</p>
            <span className='inline-block my-[16px] openSans opacity-70'><AiTwotonePhone className='inline'/>&nbsp;電話: (852) 1234-5678</span>
            <br />
            <span className='inline-block openSans opacity-70'> <AiOutlineMail className='inline'/>&nbsp;電郵: <a href='mailto:xxx@gmail.com' className='text-red-500'>xxx@gmail.com</a></span>
        </div>

        </div>
    

        <div className='w-[730px] h-[489px] [&>input]:w-full px-[15px]'>
            <h3 className='notoSansTC mb-[40px] text-[28px] font-600'>查詢表單</h3>
            <input type="text" name="" id="" placeholder='你的名字' className='border-[1px] h-[40px] pl-[15px]
            focus:outline-none focus:border-[#bfdeff] focus:ring-1 focus:ring-[#bfdeff]
            focus:border-[2px] rounded-md
            '/>
            <input type="text" name="" id="" placeholder='你的電郵' className=' my-[16px]
            border-[1px] h-[40px] pl-[15px]
            focus:outline-none focus:border-[#bfdeff] focus:ring-1 focus:ring-[#bfdeff]
            focus:border-[2px] rounded-md
            '/>
            <input type="text" name="" id="" placeholder='你的電話'
            className='border-[1px] h-[40px] pl-[15px]
            focus:outline-none focus:border-[#bfdeff] focus:ring-1 focus:ring-[#bfdeff]
            focus:border-[2px] rounded-md
            ' />
            <textarea placeholder='你的查詢' className='my-[16px] focus:outline-none border-[1px]
            focus:border-[5px] p-[15px] w-full h-[200px] focus:caret-[#bfdeff] focus:ring-[#bfdeff]
            focus:border-[#bfdeff] rounded-md
            '/>
            <a href='#' role="button"  className='btn openSans  cursor-pointer border-[2px]  bg-red-500 text-white text-[1.25rem] opacity-90 px-[28px] py-[7px] rounded-[20px] leading-[1.5] focus:border-[#bfdeff] focus:border-[5px]'>提交</a>
        </div>
      </div>


    </div>
  )
}
export default contact