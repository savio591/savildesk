import { ReactElement } from 'react'
import Image from 'next/image'

type Format = 'square' | 'wide'

interface LogoBaseProps {
  className?: string
  format: Format
  variation: 'dark' | 'light'
}

interface LogoProps {
  format: Format
  inABoxDiv?: boolean
  variation?: 'dark' | 'light'
}

type LogoBaseElement = ({ format, ...rest }: LogoBaseProps) => ReactElement

const LogoBase: LogoBaseElement = ({ format, variation, ...rest }) => {
  const formatAbvr = format === 'square' ? 's' : 'w'
  const variationAbvr = variation === 'dark' ? 'd' : 'l'
  return (
    <Image
      src={`/logo-${formatAbvr}-${variationAbvr}.svg`}
      width={format === 'square' ? 40: 194}
      height={37}
      alt="logo"
      {...rest}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Logo({ format, inABoxDiv, variation }: LogoProps): JSX.Element {
  if (inABoxDiv) {
    return (
      <div
        className="bg-dark d-flex align-items-center justify-content-center h-100"
        style={{ width: '8rem', maxWidth: '8rem' }}
      >
        <LogoBase variation={variation ?? 'dark'} format={format ?? 'square'} />
      </div>
    )
  }
  return (
    <LogoBase variation={variation ?? 'dark'} format={format ?? 'square'} />
  )
}
