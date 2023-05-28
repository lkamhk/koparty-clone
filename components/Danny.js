import React from 'react'
import Image from 'next/image'
import DannyImg from '../public/image/dt4.jpg'
const Danny = () => {
  return (
    <div className='w-full h-[586px] flex items-center justify-center overflow-hidden'>
      <div className='w-[1140px] h-[426px] flex items-center justify-center'>
        <div className='w-[760px] h-[426px] grid text-center'>
          <div className='w-full h-full  grid-cols-12'>
          <h3 className='text-[2rem] mb-[70px]'>加入K.O. Party，一起去狂歡</h3>  
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
    </div>
  )
}

export default Danny