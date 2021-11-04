import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Article: React.FC<Props> = ({ children }) => {
  return <article className="flex-grow-1">{children}</article>
}

export default Article
