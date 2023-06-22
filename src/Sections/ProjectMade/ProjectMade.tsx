import './ProjectMade.sass'
import { dataProjectMade } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { links } from '@/data/link'
import CardProject from './components/CardProject'
import Topic from "@/components/Topic/Topic"
import { media_2xl, media_3xl, media_lg, media_over } from '@/utils/functions/mediaQuery'
import Reveal from '@/components/Animation/Reveal'
import { configStepFadeIn } from '@/utils/framerMotion'
import { motion } from 'framer-motion'


export default function ProjectMade() {

  const is3xl = media_3xl()
  const is2xl = media_2xl()
  const isLg = media_lg()
  const isOver = media_over()

  let countCanHide = {
    xl3: 0,
    xl2: 0,
    lg: 0,
    md: 0,
  }

  const ListItemProjectMade = dataProjectMade.map((item, index) => {
    
    if ((is3xl || isOver) && !is2xl && item.can_hide && countCanHide.xl3++ < 1) {
      countCanHide.xl3++
      return null
    } else if (isLg && item.can_hide && countCanHide.xl2++ < 1) {
      countCanHide.xl2++
      return null
    }

    return (
      <Reveal
        key={index}
        properties={{
          delay: 0.4,
        }}
      >
        <CardProject 
          data={item}
        />
      </Reveal>
    )
  })

  return (
    <>
    
      <section id='project-made' className="project-made-container">

        <Reveal>
          <Topic
            title={`OTHER PROJECTS MADE`} 
            subTitle={`I like to create things that benefit the public the most.`}
          />
        </Reveal>

        <Reveal>
          <motion.ul
              className="container_card_navigator lg:mt-4"
              variants={configStepFadeIn.container}
              initial="hidden"
              animate="visible"
          >
            <div className="project-made-content">
              { ListItemProjectMade }

              <motion.li 
                variants={configStepFadeIn.item}
                className={`wh-full`}
              >
                <a
                  href={links.github_profile.source} 
                  target='_blank'
                  className={`view-more h-full`}
                >
                  <p className='label'>
                    View more
                  </p>
                  <FontAwesomeIcon 
                    className='icon' 
                    icon={faArrowRight} 
                  />
                </a>
              </motion.li>
              
            </div>
          </motion.ul>
        </Reveal>
      
      </section>
    
    </>
  )
}