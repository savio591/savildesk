import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/about/">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
