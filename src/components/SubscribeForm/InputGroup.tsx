// ! About this component:
// Inputgroup function component will catch each input on children and these will to be groupped with labels;
// The label name will use the Placeholder props for the input.
// Styles also appear here.
// ! Put only <input> as children here.

import { ReactNode, Children, InputHTMLAttributes, ReactElement } from 'react'

import styles from './subscribeForm.module.scss'

interface InputGroupProps {
  children?: ReactNode | ReactElement<HTMLInputElement>[] | null
}

type ChildrenProps = {
  props: InputHTMLAttributes<HTMLInputElement>
}[]

const InputGroupBase = ({ children }: InputGroupProps) => {
  const props = Children.map(children, (element) => element) as ChildrenProps

  return (
    <>
      {props.map(({ props }) => {
        return (
          <div key={props.id} className="mt-3 px-4 w-100">
            <label className="visually-hidden form-label" htmlFor={props.id}>
              {props.placeholder}
            </label>
            <input {...props} className={`${styles.input} form-control`} />
          </div>
        )
      })}
    </>
  )
}

export function InputGroup({ children }: InputGroupProps): JSX.Element {
  return <InputGroupBase>{children}</InputGroupBase>
}
