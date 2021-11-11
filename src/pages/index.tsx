import { NextSeo } from 'next-seo'
import Article from '../components/Article'
import Container from '../components/Container'
import Header from '../components/Header'
import { SectionHero } from '../components/SectionHero'
import { SectionJobs } from '../components/SectionJobs'
import { SectionGrids } from '../components/SectionGrids'
import Footer from '../components/Footer'

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
        <Article>
          <SectionHero />
          <SectionJobs />
          <SectionGrids />
        </Article>
        <Footer />
      </Container>
    </>
  )
}

export default Home
