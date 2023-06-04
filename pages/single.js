import React from 'react'
import Email from '@/components/Email'
import Image from 'next/image'
import DannyImg from '../public/image/dt4.jpg'
import bgJpg from '../public/image/thebg_good4.jpg'
import { BiTask } from 'react-icons/bi'
const Single = () => {
  return (
    <>

      {/* <Intro/> */}
      {/* <div className='w-full h-full flex flex-col items-center  justify-center px-32px py-64px '>



        <div className='w-full h-full relative  '>
        
        
          <div className='absolute h-[55vh]  w-[100%] z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.99)_20%,rgba(255,255,255,0.7)_70%,rgba(255,255,255,0)_95%)]' ></div>

          <Image src={bgJpg} className='h-[55vh]  w-full bg-center object-cover' alt='promoimage'  />
        </div>



      </div> */}
      {/* main */}
      <div className='w-full h-full pt-[80px]'>

        <div className='w-full'>
        <div className='absolute h-[70vh]  w-[100%] z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.99)_20%,rgba(255,255,255,0.7)_70%,rgba(255,255,255,0)_95%)]' ></div>

<Image src={bgJpg} className='h-[70vh]  w-full bg-center object-cover' alt='promo image' fixed='true' />
        </div>
     
        <div className='w-[100%] h-full flex items-center justify-center md:flex-col'>
          <div className='w-[720px] h-full lg:w-[510px] xs:w-[300px]'>
            <div><h1 className='inline notoSansTC text-[40px] xs:text-[30px]'>狂歡派對（旅行篇） - 11月</h1>
              <span className='inline md:inline-block m-[15px] px-[15px]  py-[10px] border-[2px]
               border-red-400 text-red-400 rounded-full cursor-default'>可報名
               </span>
               </div>

            <p className='opacity-80 mt-5'>
              地址： 香港銅鑼灣怡和街2-6號 英光大廈 7樓全層
              <br></br>
              日期： Nov 03, 2018
              <br></br>
              開始時間： 08:00PM
              <br></br>
              結束時間： 11:00PM
              <br></br>
              原價： 男： HKD380 / 女：HKD280</p>
            <h3 className='mt-[50px]  font-[400] text-[20px]'>簡介</h3>
            <p className='inline-block  text-[#707070]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.
            </p>
            <p className='inline-block  text-[#707070] my-[15px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
              d do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis
              i ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

          </div>

          <div className=' w-[380px] lg:w-[210px] md:w-[300px] h-[520px] 
           flex flex-col items-center justify-center ml-[15px]
           md:hidden       
           '>
            <div className='w-[350px] lg:w-[210px] h-[214px] 
            flex flex-col items-center justify-center bg-[#f9f9f9]
            md:h-full md:w-100 
            '>
              <div className='font-bold text-[#212529] leading-24 text-[24px] ml-[30px] 
              self-start flex items-center justify-center'> 
              <BiTask className='inline '/><h2 className='inline text-[18px]'>立即報名</h2></div>
              <hr className='bg-black w-[80%] mt-[10px] mb-[50px] md:mb-0'/>
              <button className='px-[40px] py-[10px] border-[1px] bg-red-400 text-white rounded-full'>立即報名</button>
            </div>

            <div className='h-full w-full flex  flex-col items-center justify-center'>
            <p className='font-[300]'>有問題? 歡迎聯絡我們!</p>
              <button className='font-[300] px-[40px] py-[10px] border-[1px] rounded-full'>聯絡我們: (852) 1234-1234</button>
            </div>
             
          </div>

          <div className='w-[540px]  h-[520px] 
           flex flex-col items-center justify-center ml-[15px]
           mmd:hidden  xs:w-[300px]       
           '>
            <div className='w-[510px]  h-[214px]   xs:w-[370px] 
            flex flex-col items-center justify-center bg-[#f9f9f9]
           
            '>
              <div className='font-bold text-[#212529] leading-24 text-[24px] ml-[30px] self-start flex items-center justify-center'> <BiTask className='inline '/><h2 className='inline text-[18px]'>立即報名</h2></div>
              <hr className='bg-black w-[80%] mt-[10px] mb-[50px] md:mb-0'/>
              <button className='m-[44px] px-[120px] py-[8px] border-[1px] bg-red-400 text-white rounded-full'>立即報名</button>
            </div>

            <div className='mt-[90px] flex  flex-col items-center justify-center'>
            <p className='font-[300]'>有問題? 歡迎聯絡我們!</p>
              <button className='font-[300] px-[40px] py-[10px] border-[1px] rounded-full'>聯絡我們: (852) 1234-1234</button>
            </div>
             
          </div>






        </div>


      </div>


      {/* <Danny/> */}
      {/* <div className='w-full h-[586px] flex items-center justify-center overflow-hidden'>
        <div className='w-[1140px] h-[426px] flex items-center justify-center'>
          <div className='w-[760px] h-[426px] grid text-center'>
            <div className='w-full h-full  grid-cols-12'>
              <h3 className='text-[2rem] mb-[70px]'>搞手的話</h3>
            </div>

            <div className='flex flex-row grid-cols-12'>
              <div className='inline w-[253px] h-[318px] grid-cols-4 '>
                <Image src={DannyImg} width={108} height={108} alt="cover" className='inline rounded-full ' />
                <h5 className='mt-[22px]'>
                  搞手Danny
                </h5>

              </div>
              <div className='inline w-[476px] h-[318px] grid-cols-6 text-[#707070]'>
                <p className='text-justify mb-[1rem] text-[#000000]'>
                  無論你是單身一人，或是一班朋友想去狂歡，只要你是Cool Guys/ Girls, 都歡迎加入我們這個大家庭！
                </p>
                <p className='text-justify mb-[1rem]'>
                  你好！我叫Danny！是K.O.Party的活動搞手之一。記得5年前我在加拿大畢業後，剛剛回來香港，朋友並不多。為了擴闊生活圈子，我嘗試舉辦各式各樣的派對。今天，我已經舉辦過超過100場不同形式的派對。除了結識到很多不同圈子的朋友，也度過了一段非常充實的狂歡歲月。
                </p>
                <p className='text-justify'>

                  人生的美妙在於遇見不同的人，遇到不同的事。如果你也想擴闊生活圈子，為生命留下深刻烙印，不妨考慮參加我們的派對，與我們一起去狂歡！
                </p>
              </div>
            </div>

          </div>
        </div>
      </div> */}


      {/* <Email /> */}


    </>

  );
};

export default Single;