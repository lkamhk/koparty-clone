import Intro from '@/components/Intro'
import Danny from '@/components/Danny'
import Email from '@/components/Email'
import Event from '@/components/Event'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import joinBG from '../public/image/inner.png'
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiTimeFive } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function Home () {


  return (
    <main>


      <Intro />
      <Danny />

      <Event/>

      <Email />

    </main>
  )
}
