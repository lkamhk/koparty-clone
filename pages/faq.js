import React, { useState } from 'react'
import Link from 'next/link'





const Faq = () => {

  const [clickED, setClickED] = useState(true)
  const [clickED2, setClickED2] = useState(false)
  const [clickED3, setClickED3] = useState(false)

  function showList () {
    clickED ? setClickED(false) : setClickED(true)
    setClickED2(false)
    setClickED3(false)
  }
  function showList2 () {
    clickED2 ? setClickED2(false) : setClickED2(true)
    setClickED(false)
    setClickED3(false)

  }
  function showList3 () {
    clickED3 ? setClickED3(false) : setClickED3(true)
    setClickED2(false)
    setClickED(false)
  }



  function checkClick (n) {
    let check
    switch (n) {
      case 'a':
        check = clickED
        break
      case 'b':
        check = clickED2
        break
      case 'c':
        check = clickED3
        break
    }
    if (check) {
      return ''
    } else {
      return 'hidden'
    }
  }


  return (
    <>
    <div className='w-full h-full flex items-center justify-center py-64px bg-[#f8f8f8]'>
      <div className="h-full w-full ">
        <div className='w-full relative mt-[85px] mb-[30px]   '>
          <h3 className='text-[28px] font-semibold ml-[10%]'>常見問題</h3>
          <Link href="#"> <span className='block absolute right-[10%] top-[10%]'> 主頁 &#62; 常見問題 </span> </Link>

          <div className='grid grid-cols-1  text-justify w-[80%] mt-[100px] m-auto'>
            <div className='grid-span-1 border-[1px]  '>
              <button onClick={showList} className='px-[32px] py-[10px] hover:underline hover:opacity-80 notoSansTC font-bold ' > Collapsible Group Item #1</button>
            </div>

            <div className={`block  bg-white border-[1px] p-[32px] ${checkClick('a')} `} style={{ animation: 'example 0.3s' }}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>


            <div className='grid-span-1 h-[70px] border-[1px] p-[32px] '>
              <button onClick={showList2} className='hover:underline hover:opacity-80 notoSansTC font-bold '> Collapsible Group Item #2</button>
            </div>
            <div className={`block bg-white border-[1px] p-[32px] ${checkClick('b')} `} style={{ animation: 'example 0.3s' }}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>

            <div className='grid-span-1 h-[70px] border-[1px] p-[32px] '>
              <button onClick={showList3} className='hover:underline hover:opacity-80 notoSansTC font-bold '> Collapsible Group Item #3</button>
            </div>
            <div className={`block bg-white border-[1px] p-[32px] ${checkClick('c')} `} style={{ animation: 'example 0.3s' }}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Faq