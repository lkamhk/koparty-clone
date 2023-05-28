import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
// import { Roboto } from 'next/font/google';
import {Noto_Sans_TC} from 'next/font/google'
import {Open_Sans} from 'next/font/google'
import Intro from '@/components/Intro'
import Danny from '@/components/Danny'
import Footer from '@/components/Footer'

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', // <-- here
  // weight:['400','700'],
  variable: '--font-noto-sans-tc',
})

const OpenSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-open-sans',
});
 

export default function App({ Component, pageProps }) {
  return (

<main className={`${notoSansTC.variable} ${OpenSans.variable}`}>
<NavBar />

<Component {...pageProps} />
<Footer/>
</main>

    
  )
  
 

}
