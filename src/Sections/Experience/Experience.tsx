import './Experience.sass'
import './components/CardExperience.sass'
import './components/ContentHover.sass'

import Topic from '@/common/components/Topic/Topic'
import ExperienceBanner from '@/common/assets/img/experience_banner.svg'
import { dataTimeline } from './data'
import { _class } from '@/common/utils/functions/helper'
import CardExperience from './components/CardExperience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import Reveal from '@/common/components/Animation/Reveal'


interface propsInterface {}


export default function Experience({}: propsInterface) {

  const ListItemExperience = dataTimeline.map((item, index) => (
    <Reveal
      key={index}
      properties={{
        duration: 0.6
      }}
    >
      <CardExperience 
        data={item}
        classes={{
          title: _class(`${index === 0 && 'color-secondary'}`),
          timeline: {
            date_start: _class(`${index === 0 && 'color-secondary'}`),
          }
        }}
      />
    </Reveal>
  ))

  
  return (
    <>
   
      <section id='experience' className={`experience-container`}>
        
        {/* right or bottom content */}
        <div className={`exp-content-container`}>

          <Reveal
            properties={{
              duration: 0.6
            }}
          >
            <Topic
              icon={<FontAwesomeIcon icon={faFigma} />}
              title={`EXPERIENCE`}
              subTitle={`Experience may be minimal but definitely full of heart.`}
            />
          </Reveal>
     

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