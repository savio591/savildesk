import { useState } from 'react'

import styles from './menu.module.scss'

export function Menu(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true)

  function handleCollapse(collapsed: true | undefined | null = undefined): void {
    // if the action trigger comes from the active close button, collapse will work
    setIsCollapsed((previousState) => collapsed || !previousState)
  }

  return (
    <nav className="navbar bg-dark navbar-dark h-100">
      <button
        className="navbar-toggler d-flex flex-row align-items-center gap-1 border-0"
        type="button"
        role="menu"
        onClick={() => {
          // more code, but more perfomatic. will be not send the element events to handler.
          handleCollapse()
        }}
      >
        <span className="navbar-toggler-icon"></span>
        <span>Menu</span>
      </button>

      <div
        className={`${
          isCollapsed && 'collapse '
        }navbar-collapse bg-dark fixed-top`}
        id="collapsibleNavbar"
      >
        <button  // Close button
          type="button"
          className={`${styles.closeButton} btn btn-close-white`}
          aria-label="Fechar"
          onClick={() => {
            handleCollapse(true)
          }}
        >
          {' '}
          <span aria-hidden="true" className={styles.closeIcon}>&times;</span>
        </button>
        <ul className="navbar-nav d-flex align-items-start align-items-sm-end px-5 py-5 flex-sm-row gap-4">

          <li className="nav-item">
            <a className="nav-link" href="about:blank">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about:blank">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about:blank">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
