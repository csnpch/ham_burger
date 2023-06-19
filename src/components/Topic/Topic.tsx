import './Topic.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { _class } from '@/utils/functions/helper'


interface propsInterface {
  title: string,
  subTitle: string,
  classes?: {
    container?: string,
    title?: string,
    subTitle?: string
  }
}


export default function Topic(props: propsInterface) {
  return (
    <>
    
      <div className={_class(`
        topic-container 
        ${props.classes?.container || ''}
      `)}>
        
        {/* Title */}
        <div className={_class(`
          title 
          ${props.classes?.title || ''}
        `)}>
        
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>
            { props.title }
          </p>
        
        </div>
        
        {/* Sub Title */}
        <p className={_class(`
          sub-title 
          ${props.classes?.subTitle || ''}
        `)}>
          { props.subTitle }
        </p>

      </div>
    
    </>
  )
}