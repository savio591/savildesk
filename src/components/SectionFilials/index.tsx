import { useMemo, useState } from 'react'

export function SectionFilials(): JSX.Element {
  const [filial, setFilial] = useState(0)

  const filialLink = useMemo(() => {
    switch (filial) {
      case 0:
        return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255347.96967892197!2d-51.236949589752555!3d0.10177199579903738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e5e06b4b1a37%3A0x56357df330df0f97!2zTWFjYXDDoSwgU3RhdGUgb2YgQW1hcMOh!5e0!3m2!1sen!2sbr!4v1636592141541!5m2!1sen!2sbr'
      case 1:
        return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467688.89495119266!2d-46.5952992!3d-23.6824124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1636593051368!5m2!1sen!2sbr'
      default:
        return 'about:blank'
    }
  }, [filial])

  return (
    <div className="px-3 py-4 px-lg-5 py-lg-5 w-100">
      <h2 className="text-white">Nossas filiais</h2>
      <div
        className="d-flex gap-3 w-100 mt-4 justify-content-between"
        role="group"
        aria-label="Selecionar Cidade"
      >
        <input
          type="radio"
          className="btn-check"
          name="Macapá-AP"
          id="btnradio1"
          autoComplete="off"
          checked={filial === 0}
          onChange={() => {
            setFilial(0)
          }}
        />
        <label
          className="btn btn-outline-primary w-100 savilButton"
          htmlFor="btnradio1"
        >
          Macapá-AP
        </label>

        <input
          type="radio"
          className="btn-check"
          name="São_Paulo-SP"
          id="btnradio2"
          autoComplete="off"
          checked={filial === 1}
          onChange={() => {
            setFilial(1)
          }}
        />
        <label
          className="btn btn-outline-primary w-100 savilButton"
          htmlFor="btnradio2"
        >
          São Paulo-SP
        </label>
      </div>
      <iframe
        title="Mapa da filial"
        src={filialLink}
        allowFullScreen={false}
        loading="lazy"
        className="w-100 mt-4"
      />
    </div>
  )
}
