import { useEffect, useRef, useContext } from "react"
import { _class } from "@/common/utils/functions/helper"
import { dataTimelineInterface } from "./../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FullViewContext } from "@/common/data/context/fullViewContext"
import { media_md } from './../../../common/utils/functions/mediaQuery';
import ContentHover from "./ContentHover"



interface propsInterface {
  data: dataTimelineInterface
  classes?: {
    container?: string
    title?: string
    subTitle?: string
    description?: string,
    timeline?: {
      container?: string
      date_start?: string
      date_end?: string
      helper_text?: string
    }
  }
}



export default function CardExperience(props: propsInterface) {

  const oneRange = props.data.date.end === ''
  const refHover = useRef<HTMLDivElement>(null)
  const fullViewContext = useContext(FullViewContext)
  

  const handleClickViewMore = () => {
    fullViewContext.setDataFullPreviewProject({
      title: props.data.title,
      subTitle: props.data.subtitle || '-',
      description: props.data.description || '-',
      link: props.data.link || '',
      tools_used: props.data.tools_used || [],
      link_live_preview: props.data.link_live_preview || undefined,
      img_path: props.data.img_path || []
    })
    fullViewContext.setOnFullView(true)
  }


  useEffect(() => {
    
    refHover.current?.addEventListener('click', () => {
      const expContainHover = refHover.current?.querySelector('.exp-container-hover')
      expContainHover?.classList.toggle('active')      
    })

    refHover.current?.addEventListener('mouseenter', () => {
      const expContainHover = refHover.current?.querySelector('.exp-container-hover')
      expContainHover?.classList.add('active')
    })
    refHover.current?.addEventListener('mouseleave', () => {
      const expContainHover = refHover.current?.querySelector('.exp-container-hover')
      expContainHover?.classList.remove('active')
    })

  }, [])


  return (
    <>

    <div 
      ref={refHover}
      className={_class(`
        container-card-item relative
        ${props.classes?.container}
      `)}
      onClick={media_md() ? handleClickViewMore : undefined}
    >

        <ContentHover 
          toolsUsed={props.data.tools_used}
        />

        <div className={`line-group`}>
          <div className={`line`} />
          <div className={`space-line`} />
        </div>

        <div className={`card-item-group`}>

          <div
            className={`card-item`}
          >
            <div className={`title-container`}>
              <p className={_class(`
                title
                ${props.classes?.title}
              `)}>
                { props.data.title }
              </p>
              <p className={`sub-title`}>
                { props.data.subtitle }
              </p>
            </div>
            <p className={`description`}>
              { props.data.description }
            </p>
          </div>

          <div
            className={`more-detail`}
            onClick={handleClickViewMore}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>

        </div>

        <div
          className={_class(`
            timeline-item
            ${oneRange && 'one-range'}
          `)}
        >
          <p className={_class(`
            date date-start
            ${props.classes?.timeline?.date_start}
          `)}>
            { props.data.date.end }
          </p>
          {
            props.data.date.helper !== '' &&
            <p className={_class(`
              helper-text
              ${props.classes?.timeline?.helper_text}
              ${!oneRange && 'rotate'}
            `)}>
              { props.data.date.helper }
            </p>
          }
          <p className={_class(`
            date date-end
            ${props.classes?.timeline?.date_end}
          `)}>
            { props.data.date.start }
          </p>
        </div>

      </div>      
    
    </>
  )
}