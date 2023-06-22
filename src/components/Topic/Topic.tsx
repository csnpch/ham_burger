import './Topic.sass'

import { _class } from '@/utils/functions/helper'


interface propsInterface {
  title: string,
  subTitle: string,
  icon?: React.ReactNode,
  classes?: {
    container?: string,
    title?: string,
    subTitle?: string,
    icon?: string,
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
          
          {
            props.icon &&
            <div className={_class(`${props.classes?.icon}`)}>
              { props.icon }
            </div>
          }
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