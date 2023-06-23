import './CardGroupItemSkill.sass'
import { itemSkillInterface } from '../data'
import { IdevToolsItem } from '@/common/data/dev_tools'
import ScrollContainer from 'react-indiana-drag-scroll'
import Reveal from '@/common/components/Animation/Reveal'
import { media_md } from '@/common/utils/functions/mediaQuery'


interface propsInterface {
  data: itemSkillInterface
}


export default function CardGroupItemSkill(props: propsInterface) {


  const isMd = media_md()

  
  const getSkills = (data: IdevToolsItem[]) => {
    return (
      <ScrollContainer 
        className={`
          scroll-container 
          list-item-wrapper
          ${isMd ? 'overflow-hidden' : ''}
        `}
      >
        {
          data.map((item, index) => (
            <Reveal
              key={index}
              properties={{
                y: 1
              }}
            >
              <div 
                key={index}
                className={`item-skill`}
              >
                <img src={item.source} alt="#" />
                <p className={`item-label`}>
                  { item.label }
                </p>
              </div>
            </Reveal>
          ))
        }
      </ScrollContainer>
    )
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
                  { getSkills(props.data.basic) }
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
                  { getSkills(props.data.intermediate) }  
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
                  { getSkills(props.data.expert) }  
                </div>
              </div>
            </Reveal>
          }
        </div>
      </div>
    
    </>
  )
} 