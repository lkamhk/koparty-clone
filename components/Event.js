import React from 'react'
import Image from 'next/image'
import joinBG from '../public/image/e1.jpg'
import joinBG2 from '../public/image/e2.jpg'
import joinBG3 from '../public/image/e3.jpg'
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiTimeFive } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Event = () => {
  return (
    <div>
    

  <div className='pt-[80px] pb-[70px] flex w-full items-center justify-center bg-[#f8f8f8] hideEvent:hidden'>
        <div className='w-[1140px] h-[609px]  '>
          <h3 className='w-full  text-[2rem] font-semibold text-center' style={{ fontFamily: 'Open Sans' }}>最新派對</h3>
          <div className='grid h-full grid-cols-3  gap-[16px] mt-[50px] md:mt-[30px] '>



          <div className='block h-[501px] shadow-md row-span-1 mx-[8px] ' >
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG}alt="cover" className='absolute h-auto w-[95%] top-[10px] left-[10pxauto w-[95%] top-[10px] left-[10px]' />

                  <span className='px-[16px] py-[5px] absolute bottom-[43%]
                    md:bottom-[50%] 
                    left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    border-box

                    '>
                    可報名
                  </span>

                    <h4 className=' absolute bottom-[35%] left-5
                   w-[auto]  
                   p-1 rounded-[5px]
                   text-[19px] font-[550]
                   text-[white]
                   bg-[black]
                  
                   lg:text-[16px]  md:text-[12px] 

                    '>
                       &nbsp; 男：HKD380  女：HKD280 &nbsp;
                    </h4>
                

                

                <div className='absolute w-full pl-[22px] bottom-[0%] bg-white'>
                  <h3 className='text-[21px] my-[22px] lg:my-[15px] font-[550] 
                  lg:text-[19px] md:text-[12px]
                  '>狂歡派對（旅行篇） - 11月</h3>
                  <div className='w-full text-[16px] 
                  md:text-xs flex flex-row items-center justify-center '>
                    <span className='mr-[22px]  text-black 
                    text-[1rem] opacity-80'> 
                    <FaMapMarkerAlt className='inline mr-[5px]' />
                      香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                    </span>
                  </div>
                  <span className='inline text-black opacity-80

                  '>
                    <BiTimeFive className='inline text-black  opacity-80' />
                    Nov 03, 2018 08:00PM </span>
                </div>

                </div>
              </Link>
              
            </div>

            <div className='block h-[501px] shadow-md row-span-1 mx-[8px] ' >
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG2}alt="cover" className='absolute h-auto w-[95%] top-[10px] left-[10px]' fixed />

                  <span className='px-[16px] py-[5px] absolute bottom-[43%]
                    md:bottom-[50%] 
                    left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    border-box

                    '>
                    可報名
                  </span>

                    <h4 className=' absolute bottom-[35%] left-5
                     w-[auto]  
                     p-1 rounded-[5px]
                     text-[19px] font-[550]
                     text-[white]
                     bg-[black]
                    
                     lg:text-[16px]  md:text-[12px] 
                    '>
                      &nbsp; 男：HKD380  女：HKD280 &nbsp;
                    </h4>
                

                

                <div className='absolute w-full pl-[22px] bottom-[0%] bg-white'>
                  <h3 className='text-[21px] my-[22px] lg:my-[15px] font-[550] 
                  lg:text-[19px] md:text-[12px]
                  '>背包客派對 - 12月</h3>
                  <div className='w-full text-[16px] 
                  md:text-xs flex flex-row items-center justify-center '>
                    <span className='mr-[22px]  text-black 
                    text-[1rem] opacity-80'> 
                    <FaMapMarkerAlt className='inline mr-[5px]' />
                      香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                    </span>
                  </div>
                  <span className='inline text-black opacity-80

                  '>
                    <BiTimeFive className='inline text-black  opacity-80' />
                    Dec 07, 2018 07:00PM </span>
                </div>

                </div>
              </Link>
              
            </div>
            <div className='block h-[501px] shadow-md row-span-1 mx-[8px] ' >
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG3}alt="cover" className='absolute h-auto w-[95%] top-[10px] left-[10px]' fixed />

                  <span className='px-[16px] py-[5px] absolute bottom-[43%]
                    md:bottom-[50%] 
                    left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    border-box
                    '>
                    可報名
                  </span>

                    <h4 className=' absolute bottom-[35%] left-5
                     w-[auto]  
                     p-1 rounded-[5px]
                     text-[19px] font-[550]
                     text-[white]
                     bg-[black]
                    
                     lg:text-[16px]  md:text-[12px] 
                    '>
                      男：HKD380  女：HKD280
                    </h4>
                

                

                <div className='absolute w-full pl-[22px] bottom-[0%] bg-white'>
                  <h3 className='text-[21px] my-[22px] lg:my-[15px] font-[550] 
                  lg:text-[19px] md:text-[12px]
                  '>失戀派對 - 1月</h3>
                  <div className='w-full text-[16px] 
                  md:text-xs flex flex-row items-center justify-center '>
                    <span className='mr-[22px]  text-black 
                    text-[1rem] opacity-80'> 
                    <FaMapMarkerAlt className='inline mr-[5px]' />
                      香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                    </span>
                  </div>
                  <span className='inline text-black opacity-80

                  '>
                    <BiTimeFive className='inline text-black  opacity-80' />
                    Jan 11, 2018 07:00PM </span>
                </div>

                </div>
              </Link>
              
            </div>

          </div>
        </div>
      </div>

      {/* // moblie  */}
      <section className='hideMobileEvent:hidden'>
      <h3 className='block w-full  bg-[#f8f8f8] text-[2rem] font-semibold pt-[70px] text-center ' style={{ fontFamily: 'Open Sans' }}>最新派對</h3>
      <div className='flex w-full h-full  items-center justify-center bg-[#f8f8f8] pb-[30px]'>
       
        <div className='flex h-full  items-center justify-center'>
        
          <div className='grid h-full w-full grid-rows-3 gap-[16px] mt-[70px] '>



            <div className='block mx-[15px] h-[580px] shadow-md row-span-1 col-span-1' >
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG} alt="cover" className='w-[100%] h-[70%] ' />

                  <span className='px-[16px] py-[5px] absolute bottom-[45%]
                  left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    
                    border-box
                    '>
                    可報名
                  </span>

                  <div className=' w-100 flex flex-row text-center items-center'>
                    <h4 className=' absolute bg-white bottom-[38%] right-[80px]  w-[auto]  text-[19px] font-[550] rounded-[5px] p-1 xs:right-[150px]'>
                     男：HKD380 女：HKD280 
                    </h4>
                  </div>



                  <div className='absolute ml-[22px] bottom-[5%]'>
                    <h3 className='text-[21px] my-[22px] font-[550] '>狂歡派對（旅行篇） - 11月</h3>
                    <div className='w-full text-[16px] flex flex-row items-center justify-center '>
                      <span className='mr-[22px] text-black text-[1rem] opacity-80'> <FaMapMarkerAlt className='inline mr-[5px]' />
                        香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                      </span>
                    </div>
                    <span className='inline text-black opacity-80'><BiTimeFive className='inline text-black  opacity-80' />  Nov 03, 2018 08:00PM </span>
                  </div>

                </div>
              </Link>
            </div>

            <div className='block mx-[15px] h-[580px] shadow-md row-span-1 col-span-1'>
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG2} alt="cover" className='w-100 h-[70%]' />

                  <span className='px-[16px] py-[5px] absolute bottom-[45%]
                  left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    border-box
                    '>
                    可報名
                  </span>

                  <div className=' w-100 flex flex-row text-center items-center'>
                    <h4 className=' absolute bottom-[38%] right-[200px]  w-[auto] h-[22px] text-[19px] font-[550] xs:right-[50px]'>
                      男：HKD380  女：HKD280
                    </h4>
                  </div>



                  <div className='absolute ml-[22px] bottom-[5%]'>
                    <h3 className='text-[21px] my-[22px] font-[550] '>背包客派對 - 12月</h3>
                    <div className='w-full text-[16px] flex flex-row items-center justify-center '>
                      <span className='mr-[22px] text-black text-[1rem] opacity-80'> <FaMapMarkerAlt className='inline mr-[5px]' />
                        香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                      </span>
                    </div>
                    <span className='inline text-black opacity-80'><BiTimeFive className='inline text-black  opacity-80' />  Dec 07, 2018 07:00PM </span>
                  </div>

                </div>
              </Link>
            </div>

            <div className='block mx-[15px] h-[580px] shadow-md row-span-1 col-span-1'>
              <Link href={'/single'}>
                <div className='w-[100%] h-[100%] relative'>
                  <Image src={joinBG3} alt="cover" className='w-100 h-[70%]' />

                  <span className='px-[16px] py-[5px] absolute bottom-[45%]
                  left-[30px] bg-[#e4e4e4] rounded-[30px] w-[auto] h-[auto]
                    font-noto_sans_TC font-medium text-[16px]
                    border-box
                    '>
                    可報名
                  </span>

                  <div className=' w-100 flex flex-row text-center items-center'>
                    <h4 className=' absolute bottom-[38%] right-[80px]  w-[100%] h-[22px] text-[19px] font-[550] xs:right-[10px]'>
                      男：HKD380  女：HKD280
                    </h4>
                  </div>



                  <div className='absolute ml-[22px] bottom-[5%]'>
                    <h3 className='text-[21px] my-[22px] font-[550] '>單身派對 - 1月</h3>
                    <div className='w-full text-[16px] flex flex-row items-center justify-center '>
                      <span className='mr-[22px] text-black text-[1rem] opacity-80'> <FaMapMarkerAlt className='inline mr-[5px]' />
                        香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
                      </span>
                    </div>
                    <span className='inline text-black opacity-80'><BiTimeFive className='inline text-black  opacity-80' />  Jan 11, 2018 07:00PM </span>
                  </div>

                </div>
              </Link>
            </div>

          </div>
        </div>
        </div>
       
      </section>
     
    </div>
  )
}

export default Event