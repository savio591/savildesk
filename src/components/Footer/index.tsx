import { Logo } from '../Logo'
import styles from './footer.module.scss'

export function Footer(): JSX.Element {
  return (
    <footer className={`d-flex flex-column py-5 px-5 ${styles.footer}`}>
      <Logo format="wide" variation="light" />
      <div
        className="px-3 mt-3 w-100 m-0"
        style={{ borderBottom: '1px solid #151513' }}
      />
      <div className="d-md-flex w-100 mt-5 align-items-center gap-md-1">
        <p className="text-center text-md-end w-100 m-0 w-100">
          © 2021 - Savio Henrique dos Santos Castelo -
        </p>
        <p className="text-center text-md-start w-100 m-0 w-100">
          Savil Experiments | Macapá -AP | Brasil
        </p>
      </div>
    </footer>
  )
}

export default Footer
