import './CardGroupItemSkill.sass'
import { itemSkillInterface } from '../data'
import { IdevToolsItem } from '@/data/dev_tools'
import ScrollContainer from 'react-indiana-drag-scroll'
import Reveal from '@/components/Animation/Reveal'


interface propsInterface {
  data: itemSkillInterface
}


export default function CardGroupItemSkill(props: propsInterface) {

  
  const getSkills = (data: IdevToolsItem[]) => {
    return data.map((item, index) => {
      return (
        <div 
          key={index}
          className={`item-skill`}
        >
          <img src={item.source} alt="#" />
          <p className={`item-label`}>
            { item.label }
          </p>
        </div>
      )
    })
  }


  return (
    <>
    
      <div className={`card-skill`}>
        <div className={`title`}>
          <p>{ props.data.label }</p>
        </div>
        <div className={`group-skills`}>
        {
            props.data.basic.length !== 0 &&
            <Reveal>
              <div className={`level basic`}>
                <p className={`label`}>
                  Basic
                </p>
                <div className={`group-wrapper`}>
                  <ScrollContainer className="scroll-container list-item-wrapper">
                    { getSkills(props.data.basic) }
                  </ScrollContainer>
                </div>
              </div>
            </Reveal>
          }
          {
            props.data.intermediate.length !== 0 &&
            <Reveal>
              <div className={`level intermediate`}>
                <p className={`label`}>
                  Intermediate
                </p>
                <div className={`group-wrapper`}>
                  <ScrollContainer className="scroll-container list-item-wrapper">
                    { getSkills(props.data.intermediate) }
                  </ScrollContainer>
                </div>
              </div>
            </Reveal>
          }
          
          {
            props.data.expert.length !== 0 &&
            <Reveal>
              <div className={`level expert`}>
                <p className={`label`}>
                  Expert
                </p>
                <div className={`group-wrapper`}>
                  <ScrollContainer className="scroll-container list-item-wrapper">
                    { getSkills(props.data.expert) }
                  </ScrollContainer>
                </div>
              </div>
            </Reveal>
          }
        </div>
      </div>
    
    </>
  )
} 