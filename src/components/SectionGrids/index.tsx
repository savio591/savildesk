import { SectionConsulting } from '../SectionConsulting'
import { SectionFilials } from '../SectionFilials'
import { SectionMapIframe } from '../SectionMapIframe'
import { SectionPartners } from '../SectionPartners'
import styles from './sectionGrids.module.scss'

export function SectionGrids(): JSX.Element {
  return (
    <div className={`w-100 ${styles.container}`}>
      <div className="d-flex flex-column flex-md-row-reverse w-100">
        <SectionFilials />
        <SectionConsulting />
      </div>
      <SectionPartners />
      <SectionMapIframe />
    </div>
  )
}
