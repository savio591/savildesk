import Link from 'next/link'

import { FaFilm, FaKaaba, FaRegImage, FaRegMap } from 'react-icons/fa'
import styles from './sectionNavList.module.scss'

interface SectionNavListProps {
  bgTransparent?: boolean;
  noPadding?: boolean;
  className?: string;
}

export function SectionNavList({
  bgTransparent,
  noPadding,
  className,
}: SectionNavListProps): JSX.Element {
  return (
    <div
      className={`w-100 d-flex flex-wrap align-items-center justify-content-between ${!noPadding && 'px-3 py-3'} ${
        bgTransparent ? 'bg-transparent' : 'bg-white'
      } ${styles.container} ${className} `}
    >
      <Link href="/">
        <a className={`${styles.button} btn btn-primary`}>
          <FaRegImage />
          Galeria
        </a>
      </Link>
      <Link href="/">
        <a className={`${styles.button} btn btn-primary`}>
          <FaKaaba />
          Moveis
        </a>
      </Link>
      <Link href="/">
        <a className={`${styles.button} btn btn-primary`}>
          <FaRegMap />
          Mapa
        </a>
      </Link>
      <Link href="/">
        <a className={`${styles.button} btn btn-primary`}>
          <FaFilm />
          Videos
        </a>
      </Link>
    </div>
  )
}
