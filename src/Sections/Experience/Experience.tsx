import './Experience.sass'
import './components/CardExperience.sass'
import './components/ContentHover.sass'

import Topic from '@/components/Topic/Topic'
import ExperienceBanner from '@/assets/img/experience_banner.svg'
import { dataTimeline } from './data'
import { _class } from '@/utils/functions/helper'
import CardExperience from './components/CardExperience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'


interface propsInterface {}


export default function Experience({}: propsInterface) {

  const ListItemExperience = dataTimeline.map((item, index) => (
    <CardExperience 
      key={index}
      data={item}
      classes={{
        title: _class(`${index === 0 && 'color-secondary'}`),
        timeline: {
          date_start: _class(`${index === 0 && 'color-secondary'}`),
        }
      }}
    />
  ))

  
  return (
    <>
   
      <section className={`experience-container`}>
        
        {/* right or bottom content */}
        <div className={`exp-content-container`}>

          <Topic
            icon={<FontAwesomeIcon icon={faFigma} />}
            title={`EXPERIENCE`}
            subTitle={`Experience may be minimal but definitely full of heart.`}
          />

          <div className={`timeline-container`}>
            
            <div className={`card-container`}>
              { ListItemExperience }
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