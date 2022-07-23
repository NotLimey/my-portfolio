import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import WelcomeSection from '../common/components/sections/WelcomeSection'
import useMousePosition from '../common/hooks/useMousePosition'

const Home: NextPage = () => {
  return (
    <div className='mx-8'>
      <WelcomeSection />
    </div>
  )
}

export default Home
