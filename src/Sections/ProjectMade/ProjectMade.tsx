import './ProjectMade.sass'
import Topic from "@/components/Topic/Topic";
import { dataProjectMade } from './data';
import CardProject from './components/CardProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { links } from '@/data/link';


export default function ProjectMade() {

  const ListItemProjectMade = dataProjectMade.map((item, index) => (
    <CardProject 
      key={index}
      data={item}
    />
  ))

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