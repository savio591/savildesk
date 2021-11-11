import { FaChevronLeft } from 'react-icons/fa'
import { SubscribeForm } from '../SubscribeForm'
import styles from './sectionHero.module.scss'

export function SectionHero(): JSX.Element {
  return (
    <div className={`${styles.container} min-vh-100 h-100 d-flex`}>
      <i
        className={`${styles.bgImage} min-vh-100 h-100 w-100`}
        role="figure"
        aria-label="Imagem de uma mesa grande de vidro e madeira com 6 cadeiras, um notebook e de frente com o mar."
      />
      <section className={`${styles.copy} w-100 d-flex flex-column min-vh-100`}>
        <p className={`align-self-xl-baseline text-xl-start ${styles.p1}`}>
          Para reuniões com resultados, qualidade e conforto
        </p>
        <h1 className="text-white align-self-xl-baseline text-xl-start">
          Savildesk
          <br />
          meeting
        </h1>
        <p className={`align-self-xl-baseline text-xl-start ${styles.p2}`}>NOSSO PRIMEIRO LANÇAMENTO</p>
        <div className="flex-grow-1 d-flex flex-column justify-content-end align-items-center">
          <p className={`align-self-xl-baseline text-xl-start ${styles.p3}`}>
            POR APENAS
            <br />
            R$ 800,00 REAIS
          </p>
          <a
            href="about:blank"
            role="button"
            className="btn savilButton btn-primary align-self-center"
          >
            Compre agora
          </a>
          <p className={styles.p4}>
            Tamanho único
            <br />
            160X90X120cm(CLA)
          </p>
          <FaChevronLeft
            color="white"
            className="m-2"
            style={{ transform: 'rotate(270deg)' }}
          />
        </div>
      </section>
      <SubscribeForm />
    </div>
  )
}
