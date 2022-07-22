import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import WelcomeSection from '../common/components/sections/WelcomeSection'

const Home: NextPage = () => {
  return (
    <div>
      <WelcomeSection />
    </div>
  )
}

export default Home
