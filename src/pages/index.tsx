import { NextSeo } from 'next-seo'
import Article from '../components/Article'
// import Image from 'next/image'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import styles from '../styles/Home.module.scss'
// import logo from '../public/logo@2x.png'

const Home: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Savil Desk - Loja de Móveis"
        description="Conheça a melhor loja de moveis do Brasil!"
        openGraph={{
          type: 'website',
        }}
      />
      <Container>
        <Header />
        <Article>A</Article>
        <Footer />
      </Container>
    </>
  )
}

export default Home
