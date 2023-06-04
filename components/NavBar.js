import React, { useEffect, useState } from 'react'
import logo from '../public/image/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'







const NavBar = () => {

  const [isOpen, setisOpen] = useState(false)




  const CustomMobileLink = ({ href, title, className = '', toggle }) => {

    const router = useRouter()
  
    const handelClickB = () => {
      router.push(href)
      setisOpen(false)
      // toggle()
    }
  
  
    return (
  
      <button href={href} className={`${className} relative group my-1`} onClick={handelClickB}>
        {title}
      </button>
  
    )
  }
  


  useEffect(() => {

    const updateHidden = () => {
      setisOpen(false)
    }

    window.addEventListener('resize', updateHidden)





  })

  function handleClick () {

    setisOpen(!isOpen)

  }



  return (
    <>
      <div className='w-full h-[94px] px-[15px] box-border lg:hidden fixNavbar:w-[900px]'>

        <div className='flex flex-row items-center justify-center '>
          <div className='w-[1140px]  h-[94px] pl-[15px] flex items-start justify-start fixNavbar:w-[900px]'>
            <div className='w-[1140px]  h-[94px] flex py-[0.5rem] px-[1rem] fixNavbar:w-[900px]'>
              <Link href='/' className='inline items-end justify-end py-[5px] mr-[6px]'>
                <Image src={logo} alt='logo' width={155} className='inline justify-start m-0 p-0' />
              </Link>

              <div className='w-[907px]  h-[40px] flex mt-[19px] ml-[16px] items-start justify-start'>
                <nav className='w-[392px] h-[40px] 
              list-none flex flex-row items-center justify-center 
              [&>li]:h-[40px]  [&>li]:text-center [&>li]:p-[8px] cursor-pointer '>
                  <li key="navbar-1" className='opacity-[0.5] hover:opacity-70 ' style={{ width: '48px !important' }}><Link href="/" className='m-0 p-0'>主頁</Link></li>
                  <li key="navbar-2" className='opacity-[0.5] hover:opacity-70 mx-[26px]  '><Link href="/all" className='m-0 p-0'>最新派對</Link></li>
                  <li key="navbar-3" className='opacity-[0.5] hover:opacity-70 mr-[26px]  '><Link href="/faq" className='m-0 p-0'>常見問題</Link></li>
                  <li key="navbar-4" className='opacity-[0.5] hover:opacity-70 mr-[13px]  '><Link href="/contact" className='m-0 p-0'>聯絡我們</Link></li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* moblie menu */}
      <div className=' h-full w-[510px] xs:w-[205px] ml-[60px] mb-[10px] px-[15px] mlg:hidden'>
        <button onClick={handleClick} className='absolute right-[15%] top-[3%]  p-[8px]'>
          <div className='flex-col self-end justify-center items-center ' >
            <span className='block bg-black border-1px border-black w-6 h-0.5 rounded-sm -translate-y-1'></span>
            <span className='block bg-black border-1px border-black w-6 h-0.5 rounded-sm '></span>
            <span className='block bg-black border-1px border-black w-6 h-0.5 rounded-sm translate-y-1'></span>
          </div>
        </button>

        <div className='inline items-end justify-end py-[5px] mr-[6px] '>
          <Image src={logo} alt='logo' width={155} className='inline justify-start ' />
        </div>

        <div className={`
               flex flex-col items-start justify-start 
                 [&>li]:text-center [&>li]:p-[8px]  
               translate-y-2 translate-x-2
            
              ${isOpen ? 'animate-rollToDown h-[160px]' : '  hidden'} 
   
              `}  >
          <CustomMobileLink href='/' title='主頁' className='opacity-[0.5] hover:opacity-70'  />
          <CustomMobileLink href='/all' title='最新派對' className='opacity-[0.5] hover:opacity-70'  />
          <CustomMobileLink href='/faq' title='常見問題' className='opacity-[0.5] hover:opacity-70'  />
          <CustomMobileLink href='/contact' title='聯絡我們' className='opacity-[0.5] hover:opacity-70'  />
        </div>
      </div>



    </>

  )
}

export default NavBar