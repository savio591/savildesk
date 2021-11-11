import { FormEvent, ReactNode, useEffect, useRef } from "react";

interface FormProps {
  children: ReactNode;
}

export function Form({children}: FormProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    /* It is a hack for validation pass when no using Javascript */
    formRef.current?.toggleAttribute('novalidate', true)
  })

  function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    if (!formEvent.currentTarget.checkValidity()) {
      formEvent.preventDefault()
      formEvent.stopPropagation()
    }

    formEvent.currentTarget.classList.add('was-validated')
  }

  return (
    <form
      action="/"
      method="post"
      className="d-flex flex-column w-100 h-100 align-items-center needs-validation"
      ref={formRef}
      onSubmit={handleSubmit}
      // noValidate={noValidate}
    >
      {children}
    </form>
  )
}
