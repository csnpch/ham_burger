import './Education.sass'
import EduBanner from '@/assets/img/education_banner.svg'
import { dataEducation } from './data'
import { _class } from '@/utils/functions/helper'
import Topic from '@/components/Topic/Topic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import CardEducation from './components/CardEducation'
import { media_md } from '@/utils/functions/mediaQuery'



export default function Education() {

  const isMd = media_md()

  const ListItemEducation = dataEducation.map((item, index) => (
    <CardEducation 
      key={index}
      data={item}
      classes={{
        timeline: `${index === 0 && 'color-secondary'}`,
        title: `${index === 0 && 'color-secondary'}`,
      }}
    />
  ))


  return (
    <>

      <section className={`education-container`}>
        
          {/* left or top content */}
          <div className={`banner-img`}>
            <img src={EduBanner} alt="#" width={'100%'} height={'100%'} />
          </div>

          {/* right or bottom content */}
          <div className={`edu-content-container`}>
            
            <Topic
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              title={`MY EDUCATION`}
              subTitle={`Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.`}
              classes={{
                title: _class(`
                  ${!isMd && 'justify-center'}
                `),
                subTitle: _class(`
                  ${!isMd && 'text-center'}
                `)
              }}
            />

            <div className={`edu-card-container`}>
              { ListItemEducation }
            </div>

          </div>

      </section>

    </>
  )

}