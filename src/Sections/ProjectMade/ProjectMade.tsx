import './ProjectMade.sass'
import { dataProjectMade } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { links } from '@/data/link';
import CardProject from './components/CardProject';
import Topic from "@/components/Topic/Topic";
import { media_2xl, media_3xl, media_lg, media_over } from '@/utils/functions/mediaQuery';


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
      <CardProject 
        key={index}
        data={item}
      />
    )
  })

  return (
    <>
    
      <section className="project-made-container">

        <Topic
          title={`OTHER PROJECTS MADE`} 
          subTitle={`I like to create things that benefit the public the most.`}
        />

        <div className="project-made-content">
          { ListItemProjectMade }

          <a
            href={links.github_profile.source} 
            target='_blank'
            className={`view-more`}
          >
            <p className='label'>
              View more
            </p>
            <FontAwesomeIcon 
              className='icon' 
              icon={faArrowRight} 
            />
          </a>
        </div>
      
      </section>
    
    </>
  )
}