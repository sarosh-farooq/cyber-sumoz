import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Header/Header'
import Detail from '../components/ShortDetail/Detail'
import { Container } from '@mui/material'
import Intro from '../components/Intro/Intro'
import Collection from '../components/Collection/Collection'
import Characters from '../components/Characters/Characters'
import RoadMap from '../components/RoadMap/RoadMap'
import Team from '../components/Team/Team'
import FAQS from '../components/FAQS/FAQS'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <Detail />
        <Intro />
      </Container>
      <Collection />
      <Container>
        <Characters />
        <RoadMap />
        <Team />
        <FAQS />
      </Container>
      <Footer />
    </div>
  )
}
