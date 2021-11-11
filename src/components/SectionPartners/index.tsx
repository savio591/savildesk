import { FaRegCalendar } from 'react-icons/fa'
import { Button } from '../Button'

import styles from './sectionPartners.module.scss'

export function SectionPartners(): JSX.Element {
  return (
    <div className={`bg-dark px-3 py-4 px-lg-5 py-lg-5 ${styles.container}`}>
      <h2>Procuramos parcerias</h2>
      <p>
        Curabitur quis massa efficitur, viverra neque vel, sollicitudin ex.
        Vivamus in feugiat mauris, id consequat sem. In in urna eu enim mollis
        maximus eu at nibh. Donec ultrices malesuada felis a consequat. Maecenas
        tristique neque lacus, at volutpat lorem lacinia scelerisque. Fusce in
        dignissim mi. Quisque ultricies dolor ut orci cursus, id suscipit est
        porttitor. Aenean lorem turpis, posuere eget bibendum sed, congue vel
        urna. Aliquam lorem arcu, cursus ac dolor in, porta tempus ipsum.
        Curabitur sed finibus ante, non semper sem. Nam non pretium erat. Etiam
        commodo eros ac sem tincidunt, ac semper quam interdum. Phasellus tempor
        porttitor nulla.
      </p>
      <Button className="mx-auto d-flex align-items-center gap-1" >
        <FaRegCalendar />
        Faça-nos uma visita
      </Button>
    </div>
  )
}
