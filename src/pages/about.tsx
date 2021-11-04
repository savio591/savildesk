import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Container from '../components/Container'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <Container>
      <NextSeo title="About" />
      <div className="max-w-xl mx-auto">
        <h1 className={styles.title}>About</h1>
        <figure>
          <Image src="/logo@2x.png" width={1472} height={642} alt="NextSSS" />
        </figure>
        <p className="mt-4">
          NextSSS is a Next.js static site starter including full setup for
          TypeScript, Tailwind CSS, Google Analytics, Next SEO, etc.
        </p>
      </div>
    </Container>
  )
}

export default About
