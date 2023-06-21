import './CardEducation.sass'

import { _class } from "@/utils/functions/helper"
import { TimelineEducationInterface } from "../data"



interface propsInterface {
  data: TimelineEducationInterface,
  classes?: {
    timeline?: string,
    status?: string,
    title?: string,
    subtitle?: string
  }
}


export default function CardEducation(props: propsInterface) {
  
  return (
    <>
      <div 
        className={`edu-card-item`}
      >
        {/* left */}
        <div className={`timeline-group`}>
          <p className={_class(`
            timeline
            ${props.classes?.timeline || ''}
          `)}>
            { props.data.timeline }
          </p>
          <p className={_class(`
            status
            ${props.classes?.status || ''}
          `)}>
            { props.data.status }
          </p>
        </div>
        {/* right */}
        <div className={`detail-group`}>
          <p className={_class(`
            title
            ${props.classes?.title || ''}
          `)}>
            { props.data.title }
          </p>
          <p className={_class(`
            sub-title
            ${props.classes?.subtitle || ''}
          `)}>
            { props.data.subtitle }
          </p>
        </div>
      </div>
    </>
  )

}