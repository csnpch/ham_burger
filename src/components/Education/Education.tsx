import './Education.sass'
import EduBanner from '@/assets/img/education_banner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { dataEducation } from './data'
import { _class } from '@/utils/functions/helper'



export default function Education() {


  return (
    <>

      <section className={`education-container`}>
        
          {/* left or top content */}
          <div className={`banner-img`}>
            <img src={EduBanner} alt="#" width={'100%'} height={'100%'} />
          </div>

          {/* right or bottom content */}
          <div className={`content-container`}>
            
            <div className={`topic-container`}>
              <div className={`title`}>
                <FontAwesomeIcon icon={faGraduationCap} />
                <p>MY EDUCATION</p>
              </div>
              <p className={`sub-title`}>
                Education Is Not The Learning Of Facts, But The Training Of The Mind To Think. 
              </p>
            </div>

            <div className={`edu-card-container`}>
              {
                dataEducation.map((item, index) => (
                  <div 
                    key={index}
                    className={`edu-card-item`}
                  >
                    {/* left */}
                    <div className={`timeline-group`}>
                      <p className={_class(`
                        timeline
                        ${index === 0 && 'color-secondary'}
                      `)}>
                        { item.timeline }
                      </p>
                      <p className={`status`}>
                        { item.status }
                      </p>
                    </div>
                    {/* right */}
                    <div className={`detail-group`}>
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
                  </div>
                ))
              }
            </div>

          </div>

      </section>

    </>
  )

}