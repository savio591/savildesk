// import { HTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'
import { maskPhone } from '../../utils/maskPhone'
import { Button } from '../Button'
import { Form } from './Form'
import { InputGroup } from './InputGroup'
import styles from './subscribeForm.module.scss'

export function SubscribeForm(): JSX.Element {
  const [phone, setPhone] = useState('')

  return (
    <div className={`${styles.container}`}>
      <div className="card-body">
        <p className={`${styles.p1} text-center`}>
          Fique por dentro de
          <br />
          todos os lançamentos!
        </p>
        <p className="card-subtitle text-center">
          Inscreva-se na Newsletter da Savil Desk{' '}
        </p>
      </div>
      <Form>
        <InputGroup>
          <input
            placeholder="E-mail"
            id="email"
            required
            inputMode="email"
            type="email"
            minLength={3}
          />
          <input
            placeholder="Nome"
            id="name"
            type="text"
            minLength={2}
            maxLength={40}
            required
          />
          <input
            placeholder="Telefone(opcional)"
            onInput={(newValue) => {
              setPhone(maskPhone(newValue.currentTarget.value, phone))
            }}
            value={phone}
            id="phone"
            type="tel"
            inputMode="tel"
            minLength={11}
            maxLength={15}
          />
        </InputGroup>
        <Button className="mt-3">Inscreva-se</Button>
      </Form>
    </div>
  )
}
