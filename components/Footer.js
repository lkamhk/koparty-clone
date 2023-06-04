import React from 'react'
import Image from 'next/image'
import logo from '../public/image/logo.jpg'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <span> <hr className='w-full'></hr> </span>

      <div className='md:hidden w-full md:w-auto h-[314px] flex flex-row items-center 
        justify-center px-[16px] text-[16px] xs:text-xs
      '>

        <div className='w-[380px] h-[153px]'>
          <Image src={logo} alt="cover" width={85}></Image>
          <p className='mt-[30px] opacity-70'>K.O. Party舉辦全港最好玩既Private派對。生活悶悶地？加入我們一齊玩啦！</p>
        </div>
        <div className='grid  grid-cols-2 w-[380px] h-[153px] mx-[15px] gap-y-0 gap-x-0'>
          <h4 className='col-span-2 h-[16px] text-[20px] xs:text-xs font-weight'>連結</h4>

          <div className='grid grid-cols-2 w-[207px]  '>
            <ul className='row-span-1 mt-[35px] opacity-70 w-[64px] h-[68px]'>
              <li><Link href='/'>主頁</Link></li>
              <li className='my-[12px]'><Link href='/all'>最新派對</Link></li>
            </ul>
            <ul className=' row-span-1 mt-[35px] opacity-70 w-[64px] h-[68px]'>
              <li><Link href='/faq'>常見問題</Link></li>
              <li className='my-[12px]'><Link href='/contact'>聯絡我們</Link></li>
            </ul>
          </div>



        </div>
        <div className='w-[380px] h-[153px] xs:w-[300px]'>
          <h4 className='w-100 '>聯絡我們</h4>
          <p className='mt-[35px] opacity-70'>
            銅鑼灣謝斐道535號Tower 535 20樓
            <br />
            Phone: (852) 6761-3714
            <br />
            E-mail:&nbsp;<Link href='mailto:xxx@gmail.com' ><span className='text-[#f05f5c]'>xxx@gmail.com</span></Link>
          </p>
        </div>
      </div>

      <div className='w-full h-full flex flex-col items-center
        justify-center mt-[100px] pb-[100px] text-[16px] 
        mmd:hidden '>

        <div className='w-[90%]'>

          <div className=' h-[153px]'>
            <Image src={logo} alt="cover" width={85}></Image>
            <p className='mt-[15px] opacity-70'>K.O. Party舉辦全港最好玩既Private派對。生活悶悶地？加入我們一齊玩啦！</p>
          </div>

          <div className='grid  grid-cols-2  h-[153px] '>
            <h4 className='col-span-2 h-[16px] text-[20px]  font-weight'>連結</h4>

            <div className='grid grid-cols-2   '>
              <ul className='row-span-1 opacity-70 w-[64px] h-[68px]'>
                <li><Link href='/'>主頁</Link></li>
                <li className='my-[12px]'><Link href='/all'>最新派對</Link></li>
              </ul>
              <ul className=' row-span-1 opacity-70 w-[64px] h-[68px]'>
                <li><Link href='/faq'>常見問題</Link></li>
                <li className='my-[12px]'><Link href='/contact'>聯絡我們</Link></li>
              </ul>
            </div>
          </div>

          <div className='w-[380px] h-[153px] xs:w-[350px]'>
            <h4 className='w-100 '>聯絡我們</h4>
            <p className='mt-[15px] opacity-70'>
              銅鑼灣謝斐道535號Tower 535 20樓
              <br />
              Phone: (852) 6761-3714
              <br />
              E-mail:&nbsp;<Link href='mailto:xxx@gmail.com' ><span className='text-[#f05f5c]'>xxx@gmail.com</span></Link>
            </p>
          </div>

        </div>

      </div>

    </>

  )


}

export default Footer