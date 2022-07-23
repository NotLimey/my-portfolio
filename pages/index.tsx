import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../common/components/sections/AboutSection'
import WelcomeSection from '../common/components/sections/WelcomeSection'
import useMousePosition from '../common/hooks/useMousePosition'

const Home: NextPage = () => {
  return (
    <div className=' overflow-x-hidden px-8'>
      <WelcomeSection />
      <AboutSection />
    </div>
  )
}

export default Home
