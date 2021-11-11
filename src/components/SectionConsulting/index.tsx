import {
  RiAwardLine,
  RiBarChart2Line,
  RiGlobalLine,
  RiStackLine,
} from 'react-icons/ri'

import styles from './sectionConsulting.module.scss'

export function SectionConsulting(): JSX.Element {
  return (
    <div className={`px-3 py-4 w-100 px-lg-5 py-lg-5 ${styles.flexContainer}`}>
      <h2>Somos também uma consultoria especializada</h2>
      <div className="d-flex flex-column">
        <div className="d-flex gap-3">
          <RiStackLine size={48} className={styles.icon} />
          <section>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              eros commodo, varius dui at, suscipit felis.
            </h3>
          </section>
        </div>
        <div className="d-flex gap-3">
          <RiGlobalLine size={48} className={styles.icon} />
          <section>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              eros commodo, varius dui at, suscipit felis.
            </p>
          </section>
        </div>
        <div className="d-flex gap-3">
          <RiAwardLine size={48} className={styles.icon} />
          <section>
            <h3>Consectetur adipiscing elit. </h3>
            <p>Varius dui at, suscipit felis.</p>
          </section>
        </div>
        <div className="d-flex gap-3">
          <RiBarChart2Line size={48} className={styles.icon} />
          <section>
            <h3>In non eros commodo.</h3>
            <p>
              Varius dui at, suscipit felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{' '}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
