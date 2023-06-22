import './Skill.sass'
import Topic from '@/components/Topic/Topic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import CardGroupItemSkill from './Components/CardGroupItemSkill'
import { mySkills } from './data'
import Reveal from '@/components/Animation/Reveal'


export default function Skill() {
  return (
    <>
    
      <section id='skill' className={`container-skill`}>

        <Reveal>
          <Topic
            title='skills & abilities'
            subTitle='Skills may not be covered, But I never stop learning.'
            icon={<FontAwesomeIcon icon={faTerminal} />}
            classes={{
              icon: 'custom-icon-skill',
            }}
          />
        </Reveal>

        <Reveal>
          <div className={`skill-content-contaner`}>
            <Reveal>
              <CardGroupItemSkill
                data={mySkills.languages}
              />
            </Reveal>
            <Reveal>
              <CardGroupItemSkill
                data={mySkills.frameworks}
              />
            </Reveal>
            <Reveal>
              <CardGroupItemSkill
                data={mySkills.tools}
              />
            </Reveal>
          </div>
        </Reveal>

        
      </section>
    
    </>
  )
}