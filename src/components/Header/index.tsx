import { Logo } from '../Logo'
import { Menu } from './Menu'
import { SearchBox } from './SearchBox'

import styles from './menu.module.scss'

const Header: React.FC = () => {
  return (
    <header
      className={`${styles.header} bg-dark bg-opacity-75 d-flex flex-row align-items-center position-absolute w-100`}
    >
      <Logo inABoxDiv={true} format="square" variation="dark" />
      <SearchBox />
      <Menu />
    </header>
  )
}

export default Header
