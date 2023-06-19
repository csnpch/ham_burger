import Topic from '@/components/Topic/Topic'
import './Experience.sass'
import ExperienceBanner from '@/assets/img/experience_banner.svg'
import { dataTimeline } from './data'
import { _class } from '@/utils/functions/helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


interface propsInterface {}


export default function Experience({}: propsInterface) {

  
  return (
    <>
   
      <section className={`experience-container`}>
        
        {/* right or bottom content */}
        <div className={`exp-content-container`}>

          <Topic
            title={`EXPERIENCE`}
            subTitle={`Experience may be minimal but definitely full of heart.`}
          />

          <div className={`timeline-container`}>
            
            <div className={`card-container`}>
              {
                dataTimeline.map((item, index) => {

                  const oneRange = item.date.end === ''

                  return (
                    <div className={`container-card-item`}>

                      <div className={`line-group`}>
                        <div className={`line`} />
                        <div className={`space-line`} />
                      </div>

                      <div className={`card-item-group`}>

                        <div
                          key={index}
                          className={`card-item`}
                        >
                          <div className={`title-container`}>
                            <p className={_class(`
                              title
                              ${index === 0 && 'color-secondary'}
                            `)}>
                              { item.title }
                            </p>
                            <p className={`sub-title`}>
                              { item.subtitle }
                            </p>
                          </div>
                          <p className={`description`}>
                            { item.description }
                          </p>
                        </div>

                        <div className={`more-detail`}>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                      
                      </div>

                      <div
                        key={index} 
                        className={_class(`
                          timeline-item
                          ${oneRange && 'one-range'}
                        `)}
                      >
                        <p className={_class(`
                          date date-start
                          ${index === 0 && 'color-secondary'}
                        `)}>
                          { item.date.start }
                        </p>
                        {
                          item.date.helper !== '' &&
                          <p className={_class(`
                            helper-text
                            ${ !oneRange && 'rotate' }
                          `)}>
                            { item.date.helper }
                          </p>
                        }
                        <p className={`date date-end`}>
                          { item.date.end } 
                        </p>
                      </div>

                    </div>
                  )
                })
              }
            </div>

          </div>
                  
        </div>
          
        {/* left or top content */}
        <div className={`banner-img`}>
          <img src={ExperienceBanner} alt="#" width={'100%'} height={'100%'} />
        </div>

      </section>
   
    </>
  )

}