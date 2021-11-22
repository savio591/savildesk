import { FaSearch } from 'react-icons/fa'

export function SearchBox(): JSX.Element {
  return (
    <div className="input-group px-md-5">
      <div className="input-group-prepend">
        <span className="input-group-text h-100 bg-transparent border-0 fw-light">
          <FaSearch color="white" />
        </span>
      </div>
      <input
        type="text"
        className="form-control border-0 bg-transparent h-100"
        aria-label="search"
      />
    </div>
  )
}
