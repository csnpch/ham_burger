import './Education.sass'
import EduBanner from '@/common/assets/img/education_banner.svg'
import { dataEducation } from './data'
import { _class } from '@/common/utils/functions/helper'
import Topic from '@/common/components/Topic/Topic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import CardEducation from './components/CardEducation'
import { media_md } from '@/common/utils/functions/mediaQuery'
import Reveal from '@/common/components/Animation/Reveal'
import { motion } from 'framer-motion'
import { configStepFadeIn } from '@/common/utils/framerMotion'


export default function Education() {

  const isMd = media_md()

  const ListItemEducation = dataEducation.map((item, index) => (
    <Reveal 
      key={index}
      className='w-full'
      properties={{
        duration: 0.6
      }}
    >
      <CardEducation 
        data={item}
        classes={{
          timeline: `${index === 0 && 'color-secondary'}`,
          title: `${index === 0 && 'color-secondary'}`,
        }}
      />
    </Reveal>
  ))


  return (
    <>

      <section id='education' className={`education-container`}>
        
          {/* left or top content */}
          <div className={`banner-img fade-in-left`}>
            <img src={EduBanner} alt="#" width={'100%'} height={'100%'} />
          </div>

          {/* right or bottom content */}
          <div className={`edu-content-container`}>
            
            <Reveal>
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
            </Reveal>


            <Reveal
              properties={{
                y: 0
              }}
            >
              <motion.ul
                  className="edu-card-container"
                  variants={configStepFadeIn.container}
                  initial="hidden"
                  animate="visible"
              >
                { ListItemEducation }
              </motion.ul>
            </Reveal>

          </div>

      </section>

    </>
  )

}