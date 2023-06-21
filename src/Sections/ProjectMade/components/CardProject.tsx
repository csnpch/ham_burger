import { dataProjectMadeInterface } from '../data'
import './CardProject.sass'
import ListDevTools from './ListDevTools'

interface propsInterface {
  data: dataProjectMadeInterface
}


export default function CardProject(props: propsInterface) {

  return (
    <>
    
      <a 
        href={props.data.link}
        target='_blank'
        className={`card-project-container`}
      >
        <div className={`position-wrapper`}>
          <ListDevTools devTools={props.data.tools_used} />
          
          <div className={`overlay`} />
          <div className={`card-project-img`}>
            <img src={props.data.img_path} alt="#" width={'100%'} height={'100%'} />
          </div>
          <div className={`card-project-content`}>
            <div className={`title`}>
              { props.data.title }
            </div>
            <div className={`description`}>
              { props.data.description }
            </div>
          </div>
        </div>
      </a>
    
    </>
  )
  
}