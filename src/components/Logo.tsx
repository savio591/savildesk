import { ReactElement } from 'react'
import Image from 'next/image'

type Format = 'square' | 'wide'

interface LogoBaseProps {
  className?: string
  format: Format
}

interface LogoProps {
  format: Format
  inABoxDiv?: boolean
}

type LogoBaseElement = ({ format, ...rest }: LogoBaseProps) => ReactElement

const LogoBase: LogoBaseElement = ({ ...rest }) => {
  return (
    <Image src="logo-w-c.svg" width={48} height={44} alt="logo" {...rest} />
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Logo({ format, inABoxDiv }: LogoProps): JSX.Element {
  if (inABoxDiv) {
    return (
      <div
        className="bg-dark d-flex align-items-center justify-content-center h-100"
        style={{width: '8rem', maxWidth: '8rem'}}
      >
        <LogoBase format={format} />
      </div>
    )
  }
  return <LogoBase format={format} />
}
