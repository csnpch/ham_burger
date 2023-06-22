import './Skill.sass'
import Topic from '@/components/Topic/Topic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import CardGroupItemSkill from './Components/CardGroupItemSkill'
import { mySkills } from './data'


export default function Skill() {
  return (
    <>
    
      <section className={`container-skill`}>

        <Topic 
          title='skills & abilities'
          subTitle='Skills may not be covered, But I never stop learning.'
          icon={<FontAwesomeIcon icon={faTerminal} />}
          classes={{
            icon: 'custom-icon-skill',
          }}
        />

        <div className={`skill-content-contaner`}>
          <CardGroupItemSkill
            data={mySkills.languages}
          />
          <CardGroupItemSkill
            data={mySkills.frameworks}
          />
          <CardGroupItemSkill
            data={mySkills.tools}
          />
        </div>
        
      </section>
    
    </>
  )
}