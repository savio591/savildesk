import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <main className="d-flex flex-column min-vh-100 bg-info">{children}</main>
}

export default Container
