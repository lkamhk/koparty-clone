import React from 'react'

const email = () => {
  return (
    <div className='w-full h-[380px] flex items-center justify-center '>


      <div className='h-[178px] flex flex-col items-center justify-center '>
        <h3 className='font-semibold text-[28px]'>加入K.O. Party的Email List</h3>

        <div className='h-[178px] flex flex-col flex-wrap mb-[80px] text-center '>
          <div className='mb-[16px] text-start mt-[40px] text-[#707070]'>
            讓我們有最新派對便通知你吧！
          </div>

          <input type="email" name="email" id="email-input" placeholder="你的電郵"
           
            className='block w-[800px] md:w-[500px] xs:w-[350px] h-[48px] mb-[10px] p-[0.5rem]
               shadow-[#ced4da] border-[1px] border-[#ced4da] rounded-[4.8px]
               focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400
               focus:border-[3px]
               ' />
          <button className='btn text-[1rem] w-[88px] h-[38px] text-[#ffffff] bg-[#f05f5c] rounded-[20px] focus:border-box focus:border-[#bfdeff] focus:border-[5px]' >
            提交
          </button>
        </div>
      </div>

    </div>




  )
}

export default email