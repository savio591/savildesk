import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../Button'
import { SectionNavList } from '../SectionNavList'

import styles from './sectionJobs.module.scss'

export function SectionJobs(): JSX.Element {
  return (
    <div className={`position-relative d-flex flex-column ${styles.container}`}>
      <SectionNavList className={styles.sectionNavOut} />
      <div className="px-3 py-4 px-md-5 py-md-5 px-sm-4 d-sm-flex">
        <Image
          src="/jana-sabeth-oQQEXoG8Oqc-unsplash.jpg"
          width={1500}
          height={954}
          alt="Homem marceneiro cortando madeira com maquita."
          className={`${styles.image}`}
        />
        <div className="px-2 px-sm-3 px-md-4 px-lg-5">
          <SectionNavList
            bgTransparent
            noPadding
            className={styles.sectionNavIn}
          />
          <h2 className="mt-md-4 mt-xl-5 mt-4">
            Nossos incríveis marceneiros contam com ferramentas de última
            geração!
          </h2>
          <p className="mt-md-3 mt-xl-4 mt-3">
            Você de outra área, gostaria de entregar produtos e serviços de
            qualidade baseados em geração de valor? Temos{' '}
            <span>
              vagas disponíveis para marceneiros, engenheiros, designers,
              arquitetos, e programadores.
            </span>
          </p>
          <Button className="mx-auto d-flex mt-xl-5 mb-4 mt-4 mb-sm-0 align-items-center gap-2">
            <FaWhatsapp />
            Fale com nossa equipe
          </Button>
        </div>
      </div>
    </div>
  )
}
